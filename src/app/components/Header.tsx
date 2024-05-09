
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Kelly_Slab } from "next/font/google";
import Bounded from "./Bounded";




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
<PrismicNextImage  field={settings.data.logo} />
      </div>


 <div className="icon  w-[6vw] mb-5 portrait:sm:mb-8">

<div className=" menuicon landscape:hidden cursor-pointer object-contain  absolute">
<PrismicNextImage  field={settings.data.menuicon} />
</div>

<div className=" exiticon landscape:hidden cursor-pointer object-contain  absolute ">
<PrismicNextImage  field={settings.data.exiticon} />
</div>

</div> 





<div className="links portrait:hidden w-[40%] flex items-center ">
<ul className=" flex justify-between w-[80%] text-[1.5vw] mr-10">

{settings.data.navigation.map(({label,link}:forString)=>(
<li key={label}>
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>

<div className="carticon cursor-pointer object-contain  w-[2.5vw]">
<PrismicNextImage  field={settings.data.carticon} />
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

<div className="carticon cursor-pointer object-contain bg-[#E2CABE] w-[15vw] portrait:sm:w-[10vw] p-2 rounded-sm">
<PrismicNextImage  field={settings.data.carticon} />
</div>

</div>

</div>

</div>
    </Bounded>
  )
}
