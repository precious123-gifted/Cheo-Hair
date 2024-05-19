import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import deliveryVector from "../../../public/deliveryVector.png"
import roadVector from "../../../public/roadVector.png"
import roadDemacationVector from "../../../public/roadDemacationVector.png"





/**
 * Props for `Deliverysection`.
 */
export type DeliverysectionProps =
  SliceComponentProps<Content.DeliverysectionSlice>;

/**
 * Component for "Deliverysection" Slices.
 */
const Deliverysection = ({ slice }: DeliverysectionProps): JSX.Element => {
  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}

    className="      text-[#2a3a3a] space-y-10  portrait:space-y-80 portrait:sm:space-y-40"
  >
   

<div className="content bg-[#CAC2B6] w-full pt-8 pb-14 px-5 flex flex-col items-center space-y-[10vw] portrait:space-y-[26vw]">


<div className="writeup text-[2vw] portrait:sm:text-[6vw] portrait:text-[7vw]  text-start leading-[2.5vw] portrait:leading-[8vw] portrait:sm:leading-[7vw]">{slice.primary.writeup}</div>

<div className="vectors relative flex flex-col justify-items-center">
 
<Image src={deliveryVector} alt="delivery truck"  className="absolute z-10 w-[8vw] portrait:w-[26vw] top-[5%] transform translate-y-[-50%] portrait:translate-y-[-55%]"/>
<Image src={roadVector} alt="road vector" className="w-[30vw] portrait:w-[90vw]"/>
<Image src={roadDemacationVector} alt="road demacation vector " className="absolute top-1/2 transform -translate-y-1/2"/>
</div>

</div>



  </Bounded>
  );
};

export default Deliverysection;
