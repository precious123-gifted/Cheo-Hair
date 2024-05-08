"use client"
import { PrismicNextImage } from "@prismicio/next";


export default function SingleProductContainer({productData}:any) {


    
  return (
    <div>
      <div className="hairexpandedcontainer  absolute z-30 w-auto bg-[#ebe4e8] rounded-xl flex flex-col items-center text-center space-y-11 px-[4vw]  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon ml-[45vw] portrait:ml-[60vw] ">

</div>
    
      <div className="hairContainer   flex flex-col items-center text-center space-y-1 ">
        <div  className="hairImage w-[17vw] portrait:w-[70vw]  portrait:sm:w-[40vw] object-contain">
    
          <PrismicNextImage  field={productData.product.hairimage}  className="rounded-lg"/>
        </div>
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
   
      <div className="addtocartbtn  px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>
    </div>
  )
}
