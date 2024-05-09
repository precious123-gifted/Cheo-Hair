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
import ProductInfoPage from "@/app/product/[id]/page";
import { BestsellersSliceDefault } from "../../../prismicio-types";
// import { useStateContext } from "@/StateManager";

/**
 * Props for `Bestsellers`.
 */
export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */


 


const Bestsellers = async ({ slice }: BestsellersProps ) => {

  const client = createClient()
  


  const processedData = slice.items.map((item :any ) => {
    return {
      id: uuidv4(), 
      product: item, 
    };
  });


 
 
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment
    ? `http://localhost:${process.env.PORT}`
    : "https://cheo-hair-precious123gifteds-projects.vercel.app/";
  const url = `${baseUrl}/api/processedData`;
  
  
 
 

const sendData = async () =>{

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(processedData),
  });


}
sendData()


const getData = async () =>{

  const response = await fetch(url);

  if (!response.ok) {
      console.error('Error fetching data:', response.statusText);
    
    } else {
      console.log('Data successfully recieved in frontend!');
    }

    return response.json()

}

if(!baseUrl)return null

const products = await getData()
console.log(`this is it : ${products}`)

  return (
    <Bounded
    
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
  
<div className="content relative text-[#2E2820] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
<div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full ">


  
          <HairProduct products={products}/>
         

      
</div>

</div>

    </Bounded>
  );
};




export default Bestsellers;


// import { createClient } from "@/prismicio";
// import { Content,isFilled } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";
// import { BestsellersSlice } from "../../../prismicio-types";
// import Bounded from "@/app/components/Bounded";
// import { PrismicNextImage } from "@prismicio/next";
// import { useContext, useEffect, useRef } from "react";
// import HairProduct from "./HairProduct";
// import { v4 as uuidv4 } from 'uuid';
// import { useDataCarrier } from "@/StateManager";
// import HairExpandedContainer from "./HairExpandedContainer";
// import ProductInfoPage from "@/app/product/[id]/page";
// import { BestsellersSliceDefault } from "../../../prismicio-types";
// import { headers } from "next/headers";
// // import { useStateContext } from "@/StateManager";

/**
 * Props for `Bestsellers`.
 */
// export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */


 

// const Bestsellers = async ({ slice }: BestsellersProps ) => {

//   const client = createClient()
  


//   const processedData = slice.items.map((item :any ) => {
//     return {
//       id: uuidv4(), 
//       product: item, 
//     };
//   });


 
 

  
//   const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || `http://localhost:${process.env.PORT}`;
//   const url = "@/app/api/processedData" ;

// const sendData = async () =>{
//   const host = headers().get("host");
//   const protocal = process?.env.NODE_ENV==="development"?"http":"https"
//   const response = await fetch(`${protocal}://${host}/api/processedData`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(processedData),
//   });


// }
// sendData()


// // function getBaseUrl() {
// //   if (typeof window !== 'undefined') return '';
// //   const vc = process.env.NEXT_PUBLIC_VERCEL_URL;
// //   if (vc) return `https://${vc}`;
// //   return 'http://localhost:3000';
// // }




// const getData = async () =>{


//   const host = headers().get("host");
//   const protocal = process?.env.NODE_ENV==="development"?"http":"https"
//   let response = await fetch(`${protocal}://${host}/api/processedData`, { cache: "no-store" });
 
 

//   if (!response.ok) {
//       console.error('Error fetching data:', response.statusText);
    
//     } else {
//       console.log('Data successfully recieved in frontend!');
//     }

//     return response.json()

// }

// if(!baseUrl)return null

// const products = await getData()
// console.log(`this is it : ${products}`)

//   return (
//     <Bounded
    
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}

//     >
  
// <div className="content relative text-[#2E2820] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
// <div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


// <div className="hairsection w-full ">


  
//           <HairProduct products={products}/>
         

      
// </div>

// </div>

//     </Bounded>
//   );
// };




// export default Bestsellers;



















