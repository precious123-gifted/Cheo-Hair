
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Kelly_Slab } from "next/font/google";
import HeaderContent from "./HeaderContent";





const kellySlab = Kelly_Slab({subsets: ["latin"],weight: "400"})
export default async function Header() {


    const client = createClient()

    const settings = await client.getSingle('app_settings')


  return (
    <section className="flex justify-center bg-[#F5ECF1] "  style={kellySlab.style}>
<HeaderContent settings={settings}/>
 
    </section>
  )
}
