
"use client"

  
import { useSignal } from "@preact/signals-react";
import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link";
import React, { MutableRefObject, RefObject, useEffect, useRef} from "react";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
  
  




    export default function HairProduct({products,slice}:any) {
const headerref =  useRef(null)
type ProductRef = MutableRefObject<HTMLDivElement | null>;

const productrefs = useRef<ProductRef[]>([]);





     
   
  const opacityAnimation = (ref: RefObject<HTMLDivElement | HTMLButtonElement | HTMLImageElement | HTMLSpanElement>,time:number) =>{
    let opacityAnimation =   ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      end: "bottom top",
      
      
        onEnter: () => {
        gsap.to(ref.current,time, {
          opacity:'100%',
          scrub:1,
          ease: "Power1.easeIn" ,
          
        });
    
      },
      onLeave: () => {
        gsap.to(ref.current,time, {
          opacity:'0%',
          scrub:1,
          ease: "Power1.easeIn" 
          
        });
    
    
       
        
      },
      onLeaveBack: () => {
        gsap.to(ref.current,time, {
          opacity:'0%',
          scrub:1,
          ease: "Power1.easeIn" 
          
        });
    
      
    
      },
      
      onEnterBack: () => {
        gsap.to(ref.current, time,{
          opacity:'100%',
          scrub:1,
          ease: "Power1.easeIn" 
         
        });
    
       
    
      },
    })
  }
  
  
  useEffect(()=>{
    opacityAnimation(headerref,0.4)

    productrefs.current.forEach((el)=>{

      opacityAnimation(el,0.8)

    })


 

   
    
  
  
  })   


      return (


        <>
        <div ref={headerref} className="heading opacity-0 text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center  ">
        <div   className="hairProductsContainer w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20"> 
        {products.map((product:any,index:number) => (
          <div
            key={product._id}
            id={product._id}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{opacityAnimation(productref,0.8)}}
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


    

 
    
  


