import { createClient } from "@/prismicio";
import { Content,isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BestsellersSlice } from "../../../prismicio-types";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { useContext, useEffect, useRef } from "react";
import HairProduct from "./HairProduct";
import { v4 as uuidv4 } from 'uuid';
import { useDataCarrier } from "@/StateManager";
import HairExpandedContainer from "./HairExpandedContainer";
import ProductInfoPage from "@/app/product/[...id]/page";
import { BestsellersSliceDefault } from "../../../prismicio-types";
// import { useStateContext } from "@/StateManager";

/**
 * Props for `Bestsellers`.
 */
export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */


interface Product {
  hairimage?: Object; // Optional image field
  hairtitle: string;
  hairdescription: string;
  hairprize?: string; // Optional price field
  // ... other product properties based on your Prismic data
}

interface HairProductl {
  id: string; // Assuming you have an ID for each product
  hairimage?: string; // Optional image field (adjust based on your data structure)
  hairtitle: string;
  hairdescription: string;
  hairprize?: string; // Optional price field (adjust based on your data structure)
  // ... other product properties
}
const Bestsellers = async ({ slice }: BestsellersProps ) => {

  const client = createClient()
  


  const processedData = slice.items.map((item :any ) => {
    return {
      id: uuidv4(), // Generate unique ID for each item
      product: item, // Assign the item object to the product property
    };
  });


 
 
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || `http://localhost:${process.env.PORT}`;
  const url = `${baseUrl}/api/processedData`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(processedData),
  });


  // if (!response.ok) {
  //   console.error('Error fetching data:', response.statusText);
  //   // Optionally, throw an error or handle the failure differently
  //   // throw new Error('Failed to fetch data');
  // } else {
  //   console.log('Data successfully sent to backend!');
  //   // You can further process the response here
  //   // For example, if you expect JSON data back:
  //   const responseData = await response.json();
  //   console.log('Response data:', responseData);
  // }



  return (
    <Bounded
    
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
  
<div className="content relative text-[#2E2820] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
<div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20">


  

   {processedData.map((itemWithId, index) => (
          <HairProduct
            key={itemWithId.id} // Use the generated ID as a unique key
            id={itemWithId.id} // Pass the generated ID as a prop
            item={itemWithId.product} // Pass the product data
            index={index} 
            
          />
        ))}

       <HairExpandedContainer processedData={processedData}/> 
       <ProductInfoPage processedData={processedData}/>
</div>

</div>

    </Bounded>
  );
};




export default Bestsellers;










