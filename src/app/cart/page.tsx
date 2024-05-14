
"use client"

import { useStateContext } from "@/StateManager";
import { PrismicNextImage} from "@prismicio/next";
import { useEffect, useState } from "react";
import Bounded from "../components/Bounded";

export default function CartContainer() {

  interface Product {
    _id: string;
    quantity: number ;// Assuming price is a number

    product: {
      hairimage: PrismicNextImage; // Assuming PrismicNextImage matches your image data structure
      hairtitle: string;
      hairdescription: string;
      hairprize: number;
    };
  }
  
  interface PrismicNextImage {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    copyright: null | string; // nullable copyright property
    url: string;
    id: string;
    edit: {
      x: number;
      y: number;
      zoom: number;
      background: string;
    };
  }


  const [cartData, setCartData] = useState<Product[]>([]);
const {cartLength,setCartLength} = useStateContext() 


useEffect(() => {
  const storedCartData = localStorage.getItem("cartedProducts");
  if (storedCartData) {
    setCartData(JSON.parse(storedCartData));
    setCartLength(JSON.parse(storedCartData).length);
  }
}, [cartLength]);

  return (
    <Bounded>
    <div className="w-full text-[#2E2820]  flex portrait:flex-col ">
      
    <div className="cart-container  w-[80%] portrait:w-[97%]">
    <table className=" table-auto border-separate border-spacing-8 portrait:border-spacing-x-6">
    <thead >
      <tr className="text-left text-[1.3vw] portrait:text-[4.5vw] ">
        <th className="py-8">Products</th>
        <th className="py-8">Price</th>
        <th className="py-8">Quantity</th>
        <th className="py-8">Total</th>
      </tr>
    </thead>
    <tbody className="text-[1.2vw] portrait:text-[3vw] portrait:sm:text-[3vw] ">
      {cartData.map((product) => (
        <tr key={product._id}  >
          <td className="flex portrait:flex-col items-start space-x-6 portrait:space-x-0 portrait:space-y-2">  
            <PrismicNextImage field={product.product.hairimage} className="rounded-lg w-[6vw] portrait:w-[22vw] portrait:sm:w-[18vw] object-contain"/>
              <div className="title flex flex-col  space-y-1">
              <div className="title text-[1.3vw] portrait:text-[4vw] font-medium">{product.product.hairtitle}</div>
               <div className="description"> {product.product.hairdescription}</div>
              </div>
               </td>
          <td className="mb-6 text-center portrait:text-[5vw] portrait:sm:text-[4vw]">{product.product.hairprize}</td>
          <td className="mb-6 text-center portrait:text-[5vw] portrait:sm:text-[4vw]"><div className="text-[1.6vw] portrait:text-[7vw] portrait:sm:text-[5vw] cursor-pointer">+</div><div> {product.quantity} </div><div className="text-[1.6vw] portrait:text-[7vw] portrait:sm:text-[5vw]  cursor-pointer">-</div></td>
          <td className="mb-6 text-center portrait:text-[5vw] portrait:sm:text-[4vw]">
            {product.product.hairprize * product.quantity}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<div className="orderSummary w-[37%] portrait:w-full mb-10 space-y-8 p-8 bg-[#EEDDE7] rounded-md h-fit mt-14 flex flex-col items-center">

  <div className="heading w-full text-center  text-[1.6vw] portrait:text-[6vw] portrait:sm:text-[4.8vw]">Order Summary</div>

  <div className="subNship w-full text-[1.3vw] portrait:text-[4.2vw] portrait:sm:text-[3.4vw]">
<div className="sub flex  justify-between"><div className="text">Subtotal</div><div className="amount">$2200</div></div>
<div className="ship flex justify-between"><div className="text">Shipping</div><div className="free">free</div></div>
  </div>

  <div className="total w-full text-[1.3vw] portrait:text-[4.2vw] portrait:sm:text-[3.4vw] flex justify-between"><div className="text">Total</div><div className="amount">$2200</div></div>

  <div className="checkoutBTN text-[1.6vw] portrait:text-[4.6vw] portrait:sm:text-[3.8vw] py-2 px-4 cursor-pointer text-[#E2CABE] bg-[#31503d] rounded-md">Checkout</div>









</div>
    </div>
    </Bounded>
  )
}

