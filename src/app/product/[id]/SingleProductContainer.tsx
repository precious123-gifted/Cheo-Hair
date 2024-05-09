
"use client"

import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import exitIcon from "../../../../public/exiticon.png"
import Image from "next/image";


export default function SingleProductContainer({productData}:any) {


    
  return (
    <Bounded>
      <div className="hairexpandedcontainer   w-auto   flex flex-col  items-center text-center space-y-5  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon    w-full flex justify-end ">
<Image src={exitIcon} alt="exit-icon" className="landscape:w-[2.5vw] portrait:w-[6vw] object-cover cursor-pointer"/>
</div>
    
<div className="content w-full space-y-[10vw]">

   <div className="hairContainer   flex flex-col items-center text-center space-y-[3vw] ">
        <div  className="hairImage landscape:w-5 portrait:w-full   portrait:sm:w-[40vw] object-contain">
    
          <PrismicNextImage  field={productData.product.hairimage}  className="rounded-lg"/>
        </div>

<div className="hairdetails space-y-[1vw]">

    <div className="hairTitle text-[1.5vw] portrait:text-[5vw]">
          {productData.product.hairtitle}
          
          </div>
        <div className="hairDescription text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">
        {productData.product.hairdescription}
          </div>
        <div className="hairPrize   font-medium text-green-900 portrait:text-[4vw]">
        {productData.product.hairprize}
        </div>
      </div>
</div>

      
   
      <div className="addtocartbtn  px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>

     
</div>
    </Bounded>
    
  )
}
