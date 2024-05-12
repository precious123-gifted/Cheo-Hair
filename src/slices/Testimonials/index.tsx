"use client"

import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'




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

    className="pt-[2vw] portrait:pt-[6vw] portrait:sm:pt-[3vw] rounded-t bg-[#E2CABE] text-[#47412A] space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
  >
   

<div className="content w-full pt-4 pb-14 px-5 flex flex-col items-center space-y-[2.5vw] portrait:space-y-[4vw]">

<div className="header text-[2vw] portrait:sm:text-[4vw] portrait:text-[7vw] text-center">{slice.primary.heading}</div>



  <div className="testimonies text-[1.4vw] portrait:sm:text-[3vw] portrait:text-[5vw]  text-center leading-[2.5vw] portrait:leading-[8vw] portrait:sm:leading-[5vw]">



  <Swiper
  navigation = {true}
  pagination={{type:'fraction'}}
  modules={[Navigation]}
  className="w-[80vw]"
  >
      <div className="testifierContainer flex flex-col items-center space-y-[2.5vw] portrait:space-y-[4vw]">
        {slice.items.map((item, index) => (
          <SwiperSlide key={index} className="space-y-14">

            
            <div className="testifierTestimony flex items-center justify-center w-full ">  <div className="block   text-[1.6vw]  portrait:text-[5vw] portrait:sm:text-[3vw]">{item.testimony}</div></div>
            
            <div className="testifierName space-y-3 flex flex-col items-center justify-center text-[2vw]  portrait:text-[5vw] portrait:sm:text-[3.5vw]">
            <PrismicNextImage field={item.testifierimage} className="w-[12vw] block  portrait:w-[26vw] portrait:sm:w-[23vw] object-contain rounded-full border-2 border-[#47412A]" />

             <div className="block"> {item.testifiername}</div>  
            </div>


          </SwiperSlide>
        ))}
      </div>
    </Swiper>

</div>





</div>



  </Bounded>
  );
};

export default Testimonials;
