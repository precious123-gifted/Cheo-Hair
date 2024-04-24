import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="content">
<div className="headersection ">
<div className="header1 text-red-500 text-2xl leading-9 tracking-tighter"><PrismicRichText field={slice.primary.header1}/></div>
<div className="header2"><PrismicRichText field={slice.primary.header2} /></div>
</div>

<div className="heroimage"><PrismicNextImage field={slice.primary.heroimage} /></div>


    </div>

    

    </section>
  );
};

export default Hero;
