"use client"

import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import deliveryVector from "../../../public/deliveryVector.png"
import roadVector from "../../../public/roadVector.png"
import roadDemacationVector from "../../../public/roadDemacationVector.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);




/**
 * Props for `Deliverysection`.
 */
export type DeliverysectionProps =
  SliceComponentProps<Content.DeliverysectionSlice>;

/**
 * Component for "Deliverysection" Slices.
 */
const Deliverysection = ({ slice }: DeliverysectionProps): JSX.Element => {

  function isPortrait() {
    const portraitQuery = window.matchMedia('(orientation: portrait)');
    return portraitQuery.matches;
  }
  function isLandscape() {
    const portraitQuery = window.matchMedia('(orientation: landscape)');
    return portraitQuery.matches;
  }


  const demacationLines = useRef<HTMLImageElement | null>(null);
  const demacationLines2 = useRef<HTMLImageElement | null>(null);
  const demacationLines3 = useRef<HTMLImageElement | null>(null);
  const deliverytruck = useRef<HTMLImageElement | null>(null);



  const animateRoadMovement = (ref:any) => {
    gsap.fromTo(ref.current, {
      xPercent: 0 // Start from the right edge
    }, {
      xPercent: -100, // Move to -100% for continuous scrolling effect
      repeat: -1,
      duration: 5,
      ease: "linear",
      scrub: true,
    });
  };

const animateCarBounce = () => {
  const tl = gsap.timeline({ repeat: -1 }); // Create a timeline for repeated bouncing

  tl.to(deliverytruck.current, {
    y: '-50%', // Move down 10px
    duration: 0.5, // Duration for downward movement
    ease: "Power1.easeIn", // Ease in for a smooth start
  })
  .to(deliverytruck.current, {
    y: '-50.5%', // Move up 10px
    duration: 0.5, // Duration for upward movement
    ease: "Power1.easeOut", // Ease out for a smooth stop
  });


if(isPortrait()){

  tl.to(deliverytruck.current, {
    y: '-55%', // Move down 10px
    duration: 0.5, // Duration for downward movement
    ease: "Power1.easeIn", // Ease in for a smooth start
  })
  .to(deliverytruck.current, {
    y: '-55.1%', // Move up 10px
    duration: 0.5, // Duration for upward movement
    ease: "Power1.easeOut", // Ease out for a smooth stop
  });

}

};



useEffect(()=>{
  
  animateRoadMovement(demacationLines)
  animateRoadMovement(demacationLines2)
  animateRoadMovement(demacationLines3)
  animateCarBounce()
})


  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}

    className="      text-[#3a5050]  space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
  >
   

<div className="content bg-[#CAC2B6] w-full pt-8 pb-14 px-5 flex flex-col items-center space-y-[10vw] portrait:space-y-[26vw]">


<div className="writeup text-[2vw] portrait:sm:text-[6vw] portrait:text-[7vw]  text-start leading-[2.5vw] portrait:leading-[8vw] portrait:sm:leading-[7vw]">{slice.primary.writeup}</div>

<div className="vectors relative flex flex-col justify-items-center">
 
<Image ref={deliverytruck} src={deliveryVector} alt="delivery truck"  className="absolute z-10 w-[8vw] portrait:w-[26vw] top-[5%] transform translate-y-[-50%] portrait:translate-y-[-55%]"/>

<Image src={roadVector} alt="road vector" className="w-[30vw] portrait:w-[90vw]"/>
<div  className="roaddemacationLines absolute top-1/2 transform -translate-y-1/2 flex space-x-5 overflow-hidden">
<Image ref={demacationLines} src={roadDemacationVector} alt="road demacation vector " className=""/>
<Image  ref={demacationLines2}   src={roadDemacationVector} alt="road demacation vector " className=""/>
<Image  ref={demacationLines3}  src={roadDemacationVector} alt="road demacation vector " className=""/>
</div>
</div>

</div>



  </Bounded>
  );
};

export default Deliverysection;
