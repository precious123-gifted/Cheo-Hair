import { ReactNode } from "react";
import clsx from "clsx";
import { Kelly_Slab } from "next/font/google";


type BoundedProps = {
as? : React.ElementType;
className? : string;
children : ReactNode;


}

const kellySlab = Kelly_Slab({subsets: ["latin"],weight: "400"})
export default function Bounded({
as: Comp = "section",
className,
children,
...restProps


}:BoundedProps) {
  return (
    <Comp className={clsx("w-full h-fit flex bg-[#F5ECF1] flex-col  items-center ",className)  } {...restProps} style={kellySlab.style}>
      <div className={clsx("wall   w-[95%] h-full ",className)} {...restProps}  >{children}</div>
    </Comp>
  )
}
