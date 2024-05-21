
"use client"

  
import displayElementWhenPageLoads from "@/animation-provider/animation";
import { useSignal } from "@preact/signals-react";
import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link";
import { useEffect, useRef} from "react";


  
  




    export default function HairProduct({products,slice}:any) {
const headerref =  useRef(null)

     
const loadingAnimation = useEffect(()=>{

  displayElementWhenPageLoads(headerref,0.5,800)
})       


      return (


        <>
        <div ref={headerref} className="heading opacity-0 text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center  ">
        <div className="hairProductsContainer w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20"> 
        {products.map((product:any) => (
          <div
            key={product._id}
            id={product._id}
            className="hairProduct  w-auto flex flex-col items-center text-start  space-y-1"
          >
            <Link  href={`/product/${product._id}`}> 
              <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw] portrait:sm:w-[23vw] object-contain">
                <PrismicNextImage field={product.product.hairimage} className="rounded-lg" />
              </div>
            </Link>
            <Link href={`/product/${product._id}`}> 
              <div className="hairTitle w-[12vw] portrait:w-[26vw]  cursor-pointer text-[1.5vw] portrait:text-[5vw]">{product.product.hairtitle}</div>
            </Link>
            <div className="hairDescription w-[12vw] portrait:w-[26vw]  cursor-pointer text-[1.19vw]  portrait:text-[4vw] portrait:sm:text-[3vw]">{product.product.hairdescription}</div>
            <div className="hairPrize w-[12vw] portrait:w-[26vw]  cursor-pointer font-medium text-green-900 portrait:text-[4vw]">{product.product.hairprize}</div>
          </div>
        ))}


      </div>
      
      </div>
      </div>
      </>
      );
    }


    

 
    
  


