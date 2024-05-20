"use client"
import { Content } from "@prismicio/client";
import { RefObject } from "react";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import whyImage from "../../../public/WHYUS.jpg"
import { useScrollTriggerAnimation } from "@/animation-provider/animation";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


/**
 * Props for `Whychooseus`.
 */
export type WhychooseusProps = SliceComponentProps<Content.WhychooseusSlice>;

/**
 * Component for "Whychooseus" Slices.
 */
const Whychooseus = ({ slice }: WhychooseusProps): JSX.Element => {

const header = useRef(null)
const writeup = useRef(null)
const button = useRef(null)




const marginAnimation = (ref: RefObject<HTMLDivElement | HTMLButtonElement | HTMLImageElement | HTMLSpanElement>) =>{
  let marginAnimation =   ScrollTrigger.create({
    trigger: ref.current,
    start: "top bottom",
    end: "bottom top",
    markers:true,


      onEnter: () => {
      gsap.to(ref.current,2, {
        marginLeft:'0%',
        scrub:1,
        
      });
  
    },
    onLeave: () => {
      gsap.to(ref.current,2, {
        marginLeft:'60%',
        scrub:1,
        
      });
  
  
     
      
    },
    onLeaveBack: () => {
      gsap.to(ref.current,2, {
        marginLeft:'60%',
        scrub:1,
        
      });
  
    
  
    },
    
    onEnterBack: () => {
      gsap.to(ref.current, 2,{
        marginLeft:'0%',
        scrub:1,
       
      });
  
     
  
    },
  })
}
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
  marginAnimation(header)
  opacityAnimation(writeup,2.4)
  opacityAnimation(button,0.6 )


})




  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

      className="pt-[2vw] portrait:pt-[6vw] portrait:sm:pt-[3vw] pb-5 rounded  text-[#b6abb0] space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
    >
     

<div className="content w-full py-6 px-5 flex flex-col rounded bg-[#272118] items-center space-y-[1vw] portrait:space-y-[4vw]">

<div ref={header} className="header ml-[60%] text-[2vw] portrait:sm:text-[4vw] portrait:text-[7vw] text-center">{slice.primary.header}</div>

<div className="content w-full py-1 px-1  flex space-x-[8vw] portrait:space-x-0 portrait:flex-col  rounded-xl relative">
<div className="hairimage portrait:hidden w-[22vw]  portrait:w-full    object-contain portrait:top-[46vw] portrait:left-0 portrait:bottom-0 portrait:m-auto portrait:sm:top-[unset] portrait:sm:left-[unset] portrait:sm:bottom-[unset] portrait:sm:m-[unset] right-0   portrait:sm:right-0"><PrismicNextImage className="landscape:rounded-l-xl portrait:rounded-t-xl portrait:h-[80vw] object-cover object-top" field={slice.primary.image} /></div>

<div  className="writeupsection   h-fit  mt-5 flex flex-col items-start w-[50%] portrait:w-full portrait:sm:w-full   space-y-20 portrait:space-y-14">
<div ref={writeup}  className="writeup   opacity-0 text-[1.8vw] portrait:sm:text-[3vw] portrait:text-[6vw] leading-tight  tracking-free">{slice.primary.writeup}</div>
<PrismicNextLink ref={button} className=" opacity-0 text-[#2a3b3b]  bg-[#d3cbcf] hover:text-[#2d3d3d] hover:bg-[#d4baac] duration-[1s] ease-in-out py-4  px-8 w-full rounded text-center text-[2vw] portrait:sm:text-[3vw] portrait:text-[6vw]" field={slice.primary.hairsbutton}>Check Our Hairs</PrismicNextLink>


</div>



    </div>
</div>



    </Bounded>
  );
};

export default Whychooseus;
