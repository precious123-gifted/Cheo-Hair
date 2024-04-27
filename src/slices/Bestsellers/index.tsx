import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef } from "react";

/**
 * Props for `Bestsellers`.
 */
export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */
const Bestsellers = async ({ slice }: BestsellersProps) => {

  const client = createClient()

  const settings = await client.getSingle('app_settings')



const alertt = () =>{

alert('working')

}


  return (
    <Bounded
    
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
  
<div className="content relative text-[#2E2820] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
<div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20">




      {slice.items.map((item, index) => (
        <div key={index}   className="hairContainer  w-auto flex flex-col items-center text-center space-y-1 ">
          <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw]  portrait:sm:w-[23vw] object-contain">
            <PrismicNextImage field={item.hairimage}  className="rounded-lg"/>
          </div>
          <div className="hairTitle cursor-pointer text-[1.5vw] portrait:text-[5vw]">{item.hairtitle}</div>
          <div className="hairDescription  cursor-pointer text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">{item.hairdescription}</div>
          <div className="hairPrize cursor-pointer  font-medium text-green-900 portrait:text-[4vw]">{item.hairprize}</div>
        </div>
      ))}
   

</div>


<div className="hairexpandedcontainer hidden absolute z-30 w-auto bg-[#ebe4e8] rounded-xl flex flex-col items-center text-center space-y-11 px-[4vw]  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon ml-[45vw] portrait:ml-[60vw] "><PrismicNextImage field={settings.data.exiticon}  className="w-[2vw] portrait:w-[6vw] portrait:sm:w-[4vw] absolute cursor-pointer" /></div>
      
        <div  className="hairContainer   flex flex-col items-center text-center space-y-1 ">
          <div className="hairImage w-[17vw] portrait:w-[70vw]  portrait:sm:w-[40vw] object-contain">
            <PrismicNextImage field={slice.items[3].hairimage}  className="rounded-lg"/>
          </div>
          <div className="hairTitle text-[1.5vw] portrait:text-[5vw]">{slice.items[3].hairtitle}</div>
          <div className="hairDescription text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">{slice.items[3].hairdescription}</div>
          <div className="hairPrize   font-medium text-green-900 portrait:text-[4vw]">{slice.items[3].hairprize}</div>
        </div>
     
        <div className="addtocartbtn  px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>







</div>

    </Bounded>
  );
};

export default Bestsellers;
