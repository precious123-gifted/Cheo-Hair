"use client"

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { MouseEvent, TouchEvent } from 'react';
import Image from "next/image"
import Link from "next/link"
import { signal, Signal } from "@preact/signals-react";
import cartIcon from "../../../public/carticon.png";
import menuIcon from "../../../public/menuicon.png";
import exitIcon from "../../../public/exiticon.png"
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function HeaderContent({settings}: any) {

  interface forString{

    label: any,
    link: any

  }



  const [Icon,setIcon] = useState(true)

  const menuslide = useRef(null)
  const menuslidebackground = useRef<HTMLDivElement | null>(null)
  const links = useRef(null)
  const exiticon = useRef(null)
  const menuicon = useRef(null)



  const showMenu = () =>{
  
 setIcon(!Icon)
 Icon?gsap.to(exiticon.current,{opacity:1,duration:1,position:"fixed"}):gsap.to(exiticon.current,{})

 Icon?gsap.to(links.current,{marginLeft:0,duration:1}):gsap.to(links.current,{marginLeft:"100vw"})
 Icon?gsap.to(menuslide.current,{opacity:1,duration:1,position:"fixed",display:"unset",}):gsap.to(menuslide.current,{opacity:0,display:"none",})
 Icon?gsap.to(menuslidebackground.current,{opacity:"98%",duration:0.7,position:"fixed",display:"unset",}):gsap.to(menuslidebackground.current,{opacity:"0%",display:"none",})



  }
  



  return (
    <>
       <div className="content w-[95%]  flex flex-row justify-between items-center relative pt-2">
<div className="logo cursor-pointer object-contain  w-[17vw] portrait:w-[32vw]  pb-1">
  <Link href={"/"}> <PrismicNextImage  field={settings.data.logo} /></Link>
      </div>


<div className="cartNmenuDiv landscape:hidden flex items-center  relative space-x-8 portrait:sm:space-x-14">
<div className="carticon cursor-pointer object-contain     rounded-sm">
<Image  src={cartIcon} alt="cart icon" className="w-[6vw] portrait:sm:w-[5vw]"/>
</div>

<div onClick={showMenu} className="icon  relative">

<div className=" menuicon   landscape:hidden cursor-pointer object-contain  absolute z-50 ">
{Icon? <Image ref={menuicon} src={menuIcon} alt="cart icon" className="w-[6vw]  " />:
<Image ref={exiticon} src={exitIcon} alt="cart icon" className="w-[6vw]  " />}

</div>
<div className=" menuicon   landscape:hidden cursor-pointer object-contain   ">
<Image  src={exitIcon} alt="cart icon" className="w-[6vw]  opacity-0 " />
</div>
</div> 

</div>







<div className="links portrait:hidden w-auto space-x-[4vw] flex items-center ">
<ul  className=" flex justify-between w-[80%] text-[1.5vw] space-x-[6vw]">

{settings.data.navigation.map(({label,link}:forString)=>(
<li  key={label}>
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>

<div className="carticon cursor-pointer ">
<Image  src={cartIcon} alt="cart icon" className="object-contain  w-[2.5vw]"/>
</div>

</div>



  </div>



  <div ref={menuslidebackground} className="menuslidebackground landscape:hidden absolute hidden z-10 touch-none bg-[#47443F] opacity-0  h-full w-full"></div>

  <div ref={menuslide} className="menuslide opacity-0 landscape:hidden hidden w-[50%] h-auto  text-[6vw] portrait:sm:text-[5vw] text-[#3A3329] pt-[9vw] portrait:sm:pt-[6vw] pb-[5vw] absolute z-20 ">
<div className="content w-full ">

<div ref={links} className="links w-full  ml-[100vw] flex flex-col justify-between items-start space-y-6 portrait:sm:space-y-8">
<ul className=" space-y-4 portrait:sm:space-y-6">

{settings.data.navigation.map(({label,link}:forString)=>(
<li onClick={()=>{showMenu()}} key={label} className="bg-[#E2CABE] p-2 rounded-sm">
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>


</div>

</div>

</div>
    </>
  )
}
