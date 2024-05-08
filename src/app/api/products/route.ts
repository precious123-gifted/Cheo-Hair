
import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Connect to MongoDB
  await dbConnect();

  // Initial empty array to store data
  let storedData: any = [];

  try {
    // Retrieve data from MongoDB
    const products = await Product.find({});

    // Save data to storedData
    storedData = products;

    console.log(storedData)

  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    return new Response('Error fetching data.', { status: 500 });
  }

  // Return the stored data as JSON
  return new Response(JSON.stringify(storedData), { status: 200 });
}


