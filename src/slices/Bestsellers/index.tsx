import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import HairProduct from "./HairProduct";
import Link from "next/link";



/**
 * Props for `Bestsellers`.
 */
export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */


 


const Bestsellers = async ({ slice }: BestsellersProps ) => {

  


  const processedData = slice.items.map((item :any ) => {
    return {
            product: item, 
    };
  });


 
 
  const isDevelopment = process.env.NODE_ENV === 'development' ;
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


  return (
    <Bounded
    
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
  
<div className="content relative  text-[#2a3a3a] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
<div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full ">


  
          <HairProduct products={products}/>
         

      
</div>


</div>

    </Bounded>
  );
};




export default Bestsellers;





