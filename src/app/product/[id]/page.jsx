import SingleProductContainer from "./SingleProductContainer";

const isDevelopment = process.env.NODE_ENV === 'development' ;
  const baseUrl = isDevelopment
    ? `http://localhost:${process.env.PORT}`
    : "https://cheo-hair-precious123gifteds-projects.vercel.app/";
  const url = `${baseUrl}/api/processedData`;
  
  

export async function generateStaticParams() {
 

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching processed data: ${response.statusText}`);
    }

    const productsData = await response.json();
    

    return productsData.map((data) => ({
      id: data.id?.toString(), // Use optional chaining to handle missing 'id'
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Handle the error gracefully, potentially return an empty array or log a message
    return []; // Example: Return an empty array in case of error
  }
}

// async function getProduct(id) {
//   const url = `${baseUrl}/api/processedData`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error fetching product ${id}: ${response.statusText}`);
//     }

//     const productData = await response.json();
//     return productData;
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     // Handle the error gracefully, potentially return null or a default value
//     return null; // Example: Return null in case of error
//   }
// }
// 


async function getProduct(id) { // Ensure 'id' is a string
  const url = `${baseUrl}/api/processedData`; // Use the correct endpoint for product details

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching product ${id}: ${response.statusText}`);
    }

    const productsData = await response.json(); // Assuming response contains an array

    // Filter for the product with matching ID
    const product = productsData.find(product => product._id === id);

    // Return the product or handle the case if none is found
    if (product) {
      return product;
    } else {
      console.warn(`Product with ID ${id} not found.`);
      return null; // Or return a default value as needed
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // Example: Return null in case of error
  }
}


export default async function ProductInfoPage({params}) {

const product = await getProduct(params.id)

console.log(`this is the params id ${params.id} and ${product}`)

  return (
    <div>
   
   <SingleProductContainer productData={product}/>
    
  </div>
  )
}
