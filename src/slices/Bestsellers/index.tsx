import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Bestsellers`.
 */
export type BestsellersProps = SliceComponentProps<Content.BestsellersSlice>;

/**
 * Component for "Bestsellers" Slices.
 */
const Bestsellers = ({ slice }: BestsellersProps): JSX.Element => {
  return (
    <Bounded
    
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
  
<div className="content text-[#2E2820] w-full flex flex-col items-center pt-6  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw] ">
<div className="heading  text-[3vw] portrait:sm:text-[4vw] portrait:text-[7vw] portrait:mb-10">{slice.primary.header}</div>

<div className="hairsection w-full grid  portrait:grid-cols-2 landscape:grid-cols-4  gap-5   gap-y-20">




      {slice.items.map((item, index) => (
        <div key={index} className="hairContainer w-auto flex flex-col items-center text-center space-y-1 ">
          <div className="hairImage w-[12vw] portrait:w-[27vw]  portrait:sm:w-[23vw] object-contain">
            <PrismicNextImage field={item.hairimage}  className="rounded-lg"/>
          </div>
          <div className="hairTitle text-[1.5vw] portrait:text-[5vw]">{item.hairtitle}</div>
          <div className="hairDescription text-[1vw]  portrait:text-[4vw] portrait:sm:text-[3vw]  ">{item.hairdescription}</div>
          <div className="hairPrize font-medium text-green-900 portrait:text-[4vw]">{item.hairprize}</div>
        </div>
      ))}
   

</div>



</div>

    </Bounded>
  );
};

export default Bestsellers;
