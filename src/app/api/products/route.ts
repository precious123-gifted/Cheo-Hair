// import dbConnect  from "@/app/lib/dbConnect";
// import Product from "@/app/lib/models/Product";
// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";



// export async function GET(request: NextRequest) {
//     // Initial empty array to store data
//     let storedData:any = [];
  
//     // Check if a POST request has been made previously
//     if (request.method === 'POST') {
//       try {
//         const data = await request.body;
  
//         // Check if data is an array of objects
//         if (!Array.isArray(data) || !data.every((item) => typeof item === 'object')) {
//           return new Response('Invalid data format. Please provide an array of objects.', { status: 400 });
//         }
  
//         storedData = data;
//       } catch (error) {
//         console.error('Error processing POST request:', error);
//         return new Response('Error receiving data.', { status: 500 });
//       }
//     }
  
//     // Return the stored data as JSON
//     return new Response(JSON.stringify(storedData), { status: 200 });
//   }


import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Connect to MongoDB
  await dbConnect();

  // Initial empty array to store data
  let storedData: any = ['kjkj'];

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


