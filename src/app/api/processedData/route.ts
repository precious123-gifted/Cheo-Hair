
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server'

import { createClient } from "../../../prismicio";
import dbConnect  from "@/lib/dbConnect";
import Product from "@/lib/models/Product";



export async function GET(request: NextRequest) {
  // Connect to MongoDB
  await dbConnect();

  // Initial empty array to store data
  let storedData: any ;

  try { 
    await dbConnect();
    // Retrieve data from MongoDB
    const products = await Product.find({});
if(products)console.log('products')


    // Save data to storedData
    storedData = products;

    console.log(products)

  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    return new Response('Error fetching data.', { status: 500 });
  }

  // Return the stored data as JSON
  return new Response(JSON.stringify(storedData), { status: 200 });
}





async function getRequestBody(request: NextRequest) {
  const requestClone = request.clone();
  const body = await requestClone.json();

  return body;
}


export async function POST(request: NextRequest) {
  try {
    const processedData = await getRequestBody(request);

    console.log('Received data:', processedData); // Log the entire received data

    // Check if data is an array of objects
    if (!Array.isArray(processedData)) {
      return new Response('Invalid data format. Please provide an array of objects.', { status: 400 });
    }

    for (const item of processedData) {
      console.log('Processing product:', item); // Log each product object

      // Assuming hairprize needs conversion (remove "$")
      if (item.product.hairprize) {
        item.product.hairprize = Number(item.product.hairprize.slice(1));
        console.log('Updated hairprize:', item.product.hairprize); // Log updated value
      }

      const imageId = item.product.hairimage.id;

      const query = { "product.hairimage.id": imageId };

      try {
        // Check for existing item with same image ID
        const existingItem = await Product.findOne(query);

        if (existingItem) {
          // Item with same image ID already exists
          console.error('Duplicate item detected:', item.id);
          return new Response(`Duplicate item detected for image ID: ${imageId}`, { status: 409 });
        }

        // Proceed with posting only if no duplicates
        const newItem = new Product(item);
        await newItem.save();
        console.log('Product saved successfully:', item.id);
      } catch (error) {
        console.error('Error saving product:', item.id, error);
        // Consider returning a more specific error response based on the error type
        return new Response('Error saving product.', { status: 500 });
      }
    }

    return new Response('Data received and saved successfully.', { status: 201 });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return new Response('Error receiving or saving data.', { status: 500 });
  }
}


// export async function POST(request: NextRequest) {
//   try {
//     const processedData = await getRequestBody(request)

//     console.log('Received data:', processedData); // Log the entire received data

//     // Check if data is an array of objects
//     if (!Array.isArray(processedData)) {
//       return new Response('Invalid data format. Please provide an array of objects.', { status: 400 });
//     }

//     for (const item of processedData) {
//       console.log('Processing product:', item); // Log each product object

//       // Assuming hairprize needs conversion (remove "$")
//       if (item.product.hairprize) {
//         item.product.hairprize = Number(item.product.hairprize.slice(1));
//         console.log('Updated hairprize:', item.product.hairprize); // Log updated value
//       }

//       // Your logic to create a product using Product.create(item)

//       // Add error handling within the loop (optional)
//       try {
//         await Product.create(item);
//         console.log('Product saved successfully:', item.id);
//       } catch (error) {
//         console.error('Error saving product:', item.id, error);
//       }
//     }

//     return new Response('Data received and saved successfully.', { status: 201 });
//   } catch (error) {
//     console.error('Error processing POST request:', error);
//     return new Response('Error receiving or saving data.', { status: 500 });
//   }
// }





