import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}

    className="pt-[2vw] portrait:pt-[6vw] portrait:sm:pt-[3vw] pb-5 rounded bg-[#E2CABE] text-[#47412A] space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
  >
   

<div className="content w-full py-4 px-5 flex flex-col items-center space-y-[2.5vw] portrait:space-y-[4vw]">

<div className="header text-[2vw] portrait:sm:text-[4vw] portrait:text-[7vw] text-center">{slice.primary.heading}</div>

<div className="testimonies text-[1.4vw] portrait:sm:text-[3vw] portrait:text-[5vw]  text-center leading-[2.5vw] portrait:leading-[8vw] portrait:sm:leading-[5vw]">

<div className="testifierContainer flex flex-col items-center space-y-[2.5vw] portrait:space-y-[4vw]">

<div className="testifierTestimony">{
  slice.items[0].testimony
}</div>
<div className="testifierImage">
 
  <PrismicNextImage field={slice.items[0].testifierimage} className="w-[12vw] portrait:w-[26vw] portrait:sm:w-[23vw] object-contain rounded-full border-2 border-[#47412A]"/>

</div>
<div className="testifierName text-[2vw]  portrait:text-[4vw]">
{
  slice.items[0].testifiername
}
</div>

</div>



</div>

</div>



  </Bounded>
  );
};

export default Testimonials;
