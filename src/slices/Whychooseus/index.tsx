import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import whyImage from "../../../public/WHYUS.jpg"


/**
 * Props for `Whychooseus`.
 */
export type WhychooseusProps = SliceComponentProps<Content.WhychooseusSlice>;

/**
 * Component for "Whychooseus" Slices.
 */
const Whychooseus = ({ slice }: WhychooseusProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

      className="pt-[2vw] portrait:pt-[6vw] portrait:sm:pt-[3vw] pb-5 rounded  text-[#d3cbcf] space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
    >
     

<div className="content w-full py-6 px-5 flex flex-col rounded bg-[#272118] items-center space-y-[1vw] portrait:space-y-[4vw]">

<div className="header text-[2vw] portrait:sm:text-[4vw] portrait:text-[7vw] text-center">{slice.primary.header}</div>

<div className="content w-full py-1 px-1  flex space-x-[8vw] portrait:space-x-0 portrait:flex-col  rounded-xl relative">
<div className="hairimage portrait:hidden w-[22vw]  portrait:w-full    object-contain portrait:top-[46vw] portrait:left-0 portrait:bottom-0 portrait:m-auto portrait:sm:top-[unset] portrait:sm:left-[unset] portrait:sm:bottom-[unset] portrait:sm:m-[unset] right-0   portrait:sm:right-0"><Image className="landscape:rounded-l-xl portrait:rounded-t-xl portrait:h-[80vw] object-cover object-top" src={whyImage} alt="whyus-image"/></div>

<div className="writeupsection   h-fit  mt-5 flex flex-col items-start w-[50%] portrait:w-full portrait:sm:w-full   space-y-10 portrait:space-y-8">
<div className="writeup   text-[1.8vw] portrait:sm:text-[3vw] portrait:text-[6vw] leading-tight  tracking-free">{slice.primary.writeup}</div>
<PrismicNextLink className="text-[#141C1C] bg-[#d3cbcf] py-4  px-8 w-full rounded text-center text-[2vw] portrait:sm:text-[3vw] portrait:text-[6vw]" field={slice.primary.hairsbutton}>Check Our Hairs</PrismicNextLink>


</div>



    </div>
</div>



    </Bounded>
  );
};

export default Whychooseus;
