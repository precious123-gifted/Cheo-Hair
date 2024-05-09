
"use client"

import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import exitIcon from "../../../../public/exiticon.png"
import Image from "next/image";


export default function SingleProductContainer({productData}:any) {


  const handleExitClick = () => {

    window.history.back();
  };


    
  return (
    <Bounded>
      <div className="hairexpandedcontainer   w-auto   flex flex-col  items-center text-center space-y-5  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon    w-full flex justify-end ">
<Image onClick={handleExitClick} src={exitIcon} alt="exit-icon" className="landscape:w-[2vw] portrait:w-[6vw] portrait:sm:w-[4vw]  object-cover cursor-pointer"/>
</div>
    
<div className="content landscape:w-[55%] space-y-[10vw]">

   <div className="hairContainer   flex flex-col landscape:flex-row landscape:justify-between landscape:items-start items-center text-center portrait:space-y-[3vw] ">
        <div  className="hairImage landscape:w-[25vw] portrait:w-full   portrait:sm:w-[40vw] object-contain">
    
          <PrismicNextImage  field={productData.product.hairimage}  className="rounded-lg"/>
        </div>

<div className="hairdetails ">

<div className="space-y-[1vw]"> 
<div className="hairTitle text-[2vw]   portrait:text-[5vw]">
          {productData.product.hairtitle}
          
          </div>
        <div className="hairDescription text-[1.5vw]   portrait:text-[4vw] portrait:sm:text-[3vw]  ">
        {productData.product.hairdescription}
          </div>
        <div className="hairPrize   font-medium text-green-900 text-[2vw]  portrait:text-[4vw]">
        {productData.product.hairprize}
        </div>
</div>
   

      <div className="addtocartbtn  mt-[4vw] px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

      </div>
</div>

      
   
      <div className="landscape:hidden addtocartbtn  px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>

     
</div>
    </Bounded>
    
  )
}
