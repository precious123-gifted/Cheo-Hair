
"use client"

  
import { useSignal } from "@preact/signals-react";
import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";


  
  




    export default function HairProduct({products}:any) {

      // const router = useRouter();
      // const isHomePage = router.pathname === '/';

      // const windowPath = useSignal("");

      // useEffect(() => {
      //   windowPath.value = window.location.pathname;
      // }, []);
       
      return (
      <div className="space-y-16 flex flex-col items-center  ">
        <div className="hairProductsContainer w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20"> 
        {products.map((product:any) => (
          <div
            key={product._id}
            id={product._id}
            className="hairProduct w-auto flex flex-col items-center text-center space-y-1"
          >
            <Link  href={`/product/${product._id}`}> 
              <div className="hairImage cursor-pointer w-[12vw] portrait:w-[26vw] portrait:sm:w-[23vw] object-contain">
                <PrismicNextImage field={product.product.hairimage} className="rounded-lg" />
              </div>
            </Link>
            <Link href={`/product/${product._id}`}> 
              <div className="hairTitle cursor-pointer text-[1.5vw] portrait:text-[5vw]">{product.product.hairtitle}</div>
            </Link>
            <div className="hairDescription cursor-pointer text-[1vw] portrait:text-[4vw] portrait:sm:text-[3vw]">{product.product.hairdescription}</div>
            <div className="hairPrize cursor-pointer font-medium text-green-900 portrait:text-[4vw]">{product.product.hairprize}</div>
          </div>
        ))}


      </div>
      {/* { windowPath === '/' && (
<Link href={"/hairs"} className=" text-[1.8vw] portrait:sm:text-[4vw] portrait:text-[5vw] px-4 py-4 bg-[#2E2820] text-[#DAD3D7] rounded-[0.210rem]  "> View All Hairs </Link>
      )} */}
      </div>
      );
    }


    

 
    
  


