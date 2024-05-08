import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

interface ID{
id:string
}

export const dynamic = 'auto'
export const dynamicParams = true
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export async function GET(request: NextRequest,{params}:{params:ID}) {
  
  
    if (!params.id) {
      // Handle missing ID gracefully (e.g., return a 400 Bad Request response)
      return new Response('Missing product ID.', { status: 400 });
    }
  
    try {
      await dbConnect();
  
      // Retrieve the specific product with matching ID
      const product = await Product.findById(params.id);
     
      if (!product) {
        // Handle product not found (e.g., return a 404 Not Found response)
        return new Response('Product not found.', { status: 404 });
      }
  
      // Return the product data as JSON
      return NextResponse.json(product);
      
    } catch (error) {
      console.error('Error retrieving product:', error);
      return new Response('Error fetching product.', { status: 500 });
    }
  }