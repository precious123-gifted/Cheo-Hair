import { createClient } from "@/prismicio";
import Image from "next/image";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Header() {

    const client = createClient()

    const settings = await client.getSingle('app_settings')

  return (
    <div className="w-full bg-[#F5ECF1] flex justify-center items-center">
  <div className="content w-[95%] flex flex-row justify-between items-center">
<div className="logo cursor-pointer object-contain  w-[20vw] portrait:w-[30vw]  ">
<PrismicNextImage  field={settings.data.logo} />
      </div>


<div className=" menuicon landscape:hidden cursor-pointer object-contain  w-[5vw]">
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
    </div>
  )
}
