
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Kelly_Slab } from "next/font/google";
import Bounded from "./Bounded";
import Link from "next/link";




const kellySlab = Kelly_Slab({subsets: ["latin"],weight: "400"})
export default async function Header() {

  interface forString{

    label: any,
    link: any

  }

    const client = createClient()

    const settings = await client.getSingle('app_settings')

  return (
    <Bounded>
  <div className="content w-full  flex flex-row justify-between items-center relative pt-2">
<div className="logo cursor-pointer object-contain  w-[17vw] portrait:w-[32vw]  ">
  <Link href={"/"}> <PrismicNextImage  field={settings.data.logo} /></Link>
      </div>


<div className="cartNmenuDiv flex items-center relative space-x-8">
<div className="carticon cursor-pointer object-contain  w-[6vw] portrait:sm:w-[10vw]  rounded-sm">
<PrismicNextImage  field={settings.data.carticon} />
</div>

<div className="icon  portrait:sm:w-[4vw]  ">

<div className=" menuicon w-[6vw]  landscape:hidden cursor-pointer object-contain  absolute">
<PrismicNextImage  field={settings.data.menuicon} />
</div>

<div className=" exiticon w-[6vw] landscape:hidden cursor-pointer object-contain   ">
<PrismicNextImage  field={settings.data.exiticon} />
</div>

</div> 

</div>







<div className="links portrait:hidden w-auto space-x-[4vw] flex items-center ">
<ul className=" flex justify-between w-[80%] text-[1.5vw] space-x-[6vw]">

{settings.data.navigation.map(({label,link}:forString)=>(
<li key={label}>
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>

<div className="carticon cursor-pointer ">
<PrismicNextImage  field={settings.data.carticon} className="object-contain  w-[2.5vw]"/>
</div>

</div>



  </div>




  <div className="menuslide opacity-0 landscape:hidden w-[50%] h-auto  text-[6vw] portrait:sm:text-[4vw] text-[#3A3329] pt-[15vw] px-[4vw] pb-[5vw] absolute z-20 ">
<div className="content w-full ">

<div className="links w-full  flex flex-col justify-between items-start space-y-6 portrait:sm:space-y-8">
<ul className=" space-y-4 portrait:sm:space-y-6">

{settings.data.navigation.map(({label,link}:forString)=>(
<li key={label} className="bg-[#E2CABE] p-2 rounded-sm">
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>


</div>

</div>

</div>
    </Bounded>
  )
}
