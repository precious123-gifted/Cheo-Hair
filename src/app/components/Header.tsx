import { createClient } from "@/prismicio";
import Image from "next/image";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Header() {

    const client = createClient()

    const settings = await client.getSingle('app_settings')

  return (
    <div className="w-full bg-[#F5ECF1] flex flex-col  items-center ">
  <div className="content w-[95%] flex flex-row justify-between items-center relative">
<div className="logo cursor-pointer object-contain  w-[20vw] portrait:w-[32vw]  ">
<PrismicNextImage  field={settings.data.logo} />
      </div>


<div className=" menuicon landscape:hidden cursor-pointer object-contain  w-[6vw]">
<PrismicNextImage  field={settings.data.menuicon} />
</div>


<div className="links portrait:hidden w-[40%] flex items-center ">
<ul className=" flex justify-between w-[80%] text-[1.4vw] mr-10">

{settings.data.navigation.map(({label,link})=>(
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




  <div className="menuslide landscape:hidden w-[50%] h-auto  text-[6vw] text-[#3A3329] pt-[15vw] px-[4vw] pb-[5vw] absolute z-20 ">
<div className="content w-full ">

<div className="links w-full  flex flex-col justify-between items-start space-y-6">
<ul className=" space-y-4">

{settings.data.navigation.map(({label,link})=>(
<li key={label} className="bg-[#E2CABE] p-3 rounded-sm">
<PrismicNextLink field={link}>{label}</PrismicNextLink>

</li>

))}

</ul>

<div className="carticon cursor-pointer object-contain bg-[#E2CABE] w-[15vw] p-2 rounded-sm">
<PrismicNextImage  field={settings.data.carticon} />
</div>

</div>

</div>

</div>
    </div>
  )
}
