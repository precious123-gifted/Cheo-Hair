



import { useStateContext } from "@/StateManager";
import { BestsellersSliceDefaultItem } from "../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";



type Props = {
searchParams : {[key:string]:string | string[] | undefined }

}

interface HairProductProps {
  processedData?:any;
  item?: BestsellersSliceDefaultItem; 
  index?: number;
  key?: string | number; 
 id?:string
}


export default async function ProductInfoPage({processedData}: HairProductProps) {





  return (
    <div>
    <div className="hairexpandedcontainer  absolute z-30 w-auto bg-[#ebe4e8] rounded-xl flex flex-col items-center text-center space-y-11 px-[4vw]  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon ml-[45vw] portrait:ml-[60vw] ">
{/* <PrismicNextImage field={settings.data.exiticon}  className="w-[2vw] portrait:w-[6vw] portrait:sm:w-[4vw] absolute cursor-pointer" /> */}
</div>
    
      <div className="hairContainer   flex flex-col items-center text-center space-y-1 ">
        <div  className="hairImage w-[17vw] portrait:w-[70vw]  portrait:sm:w-[40vw] object-contain">
           {/* {expandedImageAttributes && expandedImage && (
      // <Image src={expandedImage.src} width={expandedImage.width} height={expandedImage.height}  {...expandedImageAttributes} alt="k"/> // Spread attributes onto expanded image
    )} */}
          <PrismicNextImage  field={processedData[0].product.hairimage}  className="rounded-lg"/>
        </div>
        <div className="hairTitle text-[1.5vw] portrait:text-[5vw]">
          {processedData[0].product.hairtitle}
          {/* {expandedHairTitle} */}
          </div>
        <div className="hairDescription text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">
          {/* {slice.items[3].hairdescription} */}
          </div>
        <div className="hairPrize   font-medium text-green-900 portrait:text-[4vw]">
          {/* {slice.items[3].hairprize} */}
        </div>
      </div>
   
      <div className="addtocartbtn  px-10 py-2 bg-[#2E2820] cursor-pointer text-[#F5ECF1] text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>
  </div>
  )
}
