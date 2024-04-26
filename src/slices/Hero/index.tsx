import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import starIcon from "../../../public/staricon.png"
import Bounded from "@/app/components/Bounded";

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
     className="pt-[2vw] portrait:pt-[6vw] portrait:sm:pt-[3vw] pb-5 bg-[rgb(245,236,241)]  space-y-10  portrait:space-y-80 portrait:sm:space-y-40 " >
    <div className="content w-full py-4 px-5 flex justify-between bg-[#2E2820] rounded-xl relative">
<div className="headersection w-[50%] portrait:w-full portrait:sm:w-[50%]  h-full space-y-7">
<div className="header1  text-[#EDE0E7] text-[4vw] portrait:sm:text-[4vw] portrait:text-[6vw] leading-tight  tracking-free"><PrismicRichText field={slice.primary.header1}/></div>
<div className="header2 text-[#E5DBE1] text-[2vw] portrait:sm:text-[2vw] portrait:text-[4vw] "><PrismicRichText field={slice.primary.header2} /></div>
</div>

<div className="heroimage absolute w-[20vw]  portrait:w-[45vw]  portrait:sm:w-[25vw] object-contain portrait:top-[50vw] portrait:left-0 portrait:bottom-0 portrait:m-auto portrait:sm:top-[unset] portrait:sm:left-[unset] portrait:sm:bottom-[unset] portrait:sm:m-[unset] right-0   portrait:sm:right-0"><PrismicNextImage field={slice.primary.heroimage} /></div>


    </div>

    <div className="staricons  flex justify-center">
      <div className="content object-contain w-[30vw] portrait:w-[90vw]  portrait:sm:w-[70vw]">

      <Image alt="staricon  " src={starIcon}></Image>


      </div>
    </div>

    </Bounded>
  );
};

export default Hero;
