import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import starIcon from "../../../public/staricon.png"
import Bounded from "@/app/components/Bounded";
import heroImage from "../../../public/headerimage.jpg"

/**
 * Props for `Hero`.
 */


export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
     className="pt-[1.8vw] portrait:pt-[2vw] portrait:sm:pt-[3vw] pb-5 text-[#c9bfc4] space-y-10  portrait:space-y-80 portrait:sm:space-y-40 " >
    <div className="content w-full py-1 px-1  flex space-x-[8vw] portrait:space-x-0 portrait:flex-col bg-[#141C1C] rounded-xl relative">
<div className="heroimage  w-[22vw]  portrait:w-full    object-contain portrait:top-[46vw] portrait:left-0 portrait:bottom-0 portrait:m-auto portrait:sm:top-[unset] portrait:sm:left-[unset] portrait:sm:bottom-[unset] portrait:sm:m-[unset] right-0   portrait:sm:right-0"><PrismicNextImage className="landscape:rounded-l-xl portrait:rounded-t-xl portrait:h-[80vw] object-cover object-top "   field={slice.primary.heroimage} /></div>

<div className="headersection  bg-[#141C1C] h-fit  mt-5 flex flex-col items-start w-[50%] portrait:w-full portrait:sm:w-full   space-y-7 portrait:space-y-4">
<div className="header1  text-[4vw] portrait:sm:text-[4vw] portrait:text-[6vw] leading-tight  tracking-free"><PrismicRichText field={slice.primary.header1}/></div>
<div className="header2 text-[2vw] portrait:sm:text-[3vw] portrait:text-[5vw] "><PrismicRichText field={slice.primary.header2} /></div>

<div className="staricons  flex justify-center">
      <div className="content mb-2   object-contain w-[15vw] portrait:w-[40vw]  portrait:sm:w-[30vw]">

      <Image alt="staricon  " src={starIcon}></Image>


      </div>
    </div>
</div>



    </div>


    </Bounded>
  );
};

export default Hero;
