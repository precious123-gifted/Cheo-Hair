
//   // if (imageElement) {
"use client"
  import { usePrismicClient } from "@prismicio/react";
  
  import { PrismicNextImage } from "@prismicio/next"
  import { BestsellersSliceDefaultItem } from "../../../prismicio-types";
  import { useRefsContext } from "@/StateManager";
  import { useContext, useEffect, useRef, useState } from "react";
  import Image from "next/image";
import Link from "next/link";

  
  
  
  
  interface HairProductProps {
      item: BestsellersSliceDefaultItem; 
      index: number;
      key: string | number; 
     id:string
    }
  






    export default function HairProduct({  id, item, ...otherProps }: HairProductProps) {
      // No need for refs in this context
     
     

let itemArray = [id,item]






      return (
        <div
       
          id={id}
          className="hairProduct w-auto flex flex-col items-center text-center space-y-1"
        >
          <Link href={`/product/${id}`}> {/* Link to product page */}
            <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw] portrait:sm:w-[23vw] object-contain">
              <PrismicNextImage field={item.hairimage} className="rounded-lg" />
            </div>
          </Link>
          <Link href={`/product/${id}`}> {/* Link to product page */}
            <div className="hairTitle cursor-pointer text-[1.5vw] portrait:text-[5vw]">{item.hairtitle}</div>
          </Link>
          <div className="hairDescription cursor-pointer text-[1vw] portrait:text-[4vw] portrait:sm:text-[3vw]">{item.hairdescription}</div>
          <div className="hairPrize cursor-pointer font-medium text-green-900 portrait:text-[4vw]">{item.hairprize}</div>
        </div>
      );
    }


    

 
    
  

//   export default function HairProduct({item,index} :HairProductProps) {
  
//       const {hairProductRef} = useRefsContext()
//   let expandedHairTitle = 'tititi'
  
  
//   const hairImage = useRef(null)
  
//    const [expandedImage, setExpandedImage] = useState<HTMLImageElement | null>(null);
//     const [expandedImageAttributes, setExpandedImageAttributes] = useState<
//       React.ImgHTMLAttributes<HTMLImageElement> | any
//     >(null);
  
  
  
  
  
//   // const bop = (event: React.MouseEvent<HTMLDivElement>) => {
//   //   const clickedElement = event.currentTarget;
//   //   const imageElement = clickedElement.querySelector(".hairImage img") as HTMLImageElement; // Type cast
// //   //   setExpandedImage(imageElement);
// //   // }
// // setExpandedImage(imageElement)
// //     if (imageElement) {
// //       const attributes = {
// //         ...imageElement, // Spread all attributes from imageElement
// //          crossOrigin: imageElement.crossOrigin || "anonymous",
// //         // Optionally exclude specific attributes (e.g., delete attributes.id)
// //       };
     
// //       setExpandedImageAttributes(attributes);


 
// // };

// // }



// return (

  

//   <div index={index}    ref={hairProductRef}  className="hairProduct  w-auto flex flex-col items-center text-center space-y-1 ">
//   <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw]  portrait:sm:w-[23vw] object-contain">
//     <PrismicNextImage    field={item.hairimage}  className="rounded-lg"/>
//   </div>
//   <div className="hairTitle cursor-pointer text-[1.5vw] portrait:text-[5vw]">{item.hairtitle}</div>
//   <div className="hairDescription  cursor-pointer text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">{item.hairdescription}</div>
//   <div className="hairPrize cursor-pointer  font-medium text-green-900 portrait:text-[4vw]">{item.hairprize}</div>
// </div>





//   )
// }
