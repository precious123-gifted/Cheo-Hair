
//   // if (imageElement) {
"use client"
  import { usePrismicClient } from "@prismicio/react";
  
  import { PrismicNextImage } from "@prismicio/next"
  import { BestsellersSliceDefaultItem } from "../../../prismicio-types";
  import { useRefsContext } from "@/StateManager";
  import { useContext, useEffect, useRef, useState } from "react";
  import Image from "next/image";
import Link from "next/link";
import { title } from "process";

  
  
  
  
  // interface HairProductProps {
  //     item: BestsellersSliceDefaultItem; 
  //     index: number;
  //     key: string | number; 
  //    id:string
  //   }
interface IProduct  {
     id: string;
     product: {
       hairimage: object; // Assuming you don't have a specific schema for hair image
       hairtitle: string;
       hairdescription: string;
       hairprize: number; // Assuming you want to store prize as a string
     };
   }




    export default function HairProduct({products}:any) {



      
       
      return (
      
        <div className="hairProductsContainer w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20"> {/* Wrap all products */}
        {products.map((product:any) => (
          <div
            key={product._id} // Unique key for each product
            id={product._id}
            className="hairProduct w-auto flex flex-col items-center text-center space-y-1"
          >
            <Link  href={`/product/${product._id}`}> {/* Link to product page */}
              <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw] portrait:sm:w-[23vw] object-contain">
                <PrismicNextImage field={product.product.hairimage} className="rounded-lg" />
              </div>
            </Link>
            <Link href={`/product/${product._id}`}> {/* Link to product page */}
              <div className="hairTitle cursor-pointer text-[1.5vw] portrait:text-[5vw]">{product.product.hairtitle}</div>
            </Link>
            <div className="hairDescription cursor-pointer text-[1vw] portrait:text-[4vw] portrait:sm:text-[3vw]">{product.product.hairdescription}</div>
            <div className="hairPrize cursor-pointer font-medium text-green-900 portrait:text-[4vw]">{product.product.hairprize}</div>
          </div>
        ))}
      </div>
      );
    }


    

 
    
  


