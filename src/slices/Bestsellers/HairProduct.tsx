
"use client"

  
import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link";


  
  




    export default function HairProduct({products}:any) {



      
       
      return (
      
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
      );
    }


    

 
    
  


