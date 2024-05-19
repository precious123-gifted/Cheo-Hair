
"use client"

import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import exitIcon from "../../../../public/exiticon1.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useStateContext } from "@/StateManager";
import { StateContextType } from "@/StateManager";


export default function SingleProductContainer({productData}:any) {


  interface Product {
    _id: string;
    product: {
      hairimage: PrismicNextImage; // Assuming PrismicNextImage matches your image data structure
      hairtitle: string;
      hairdescription: string;
      hairprize: number; // Assuming price is a number
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


  const [cartedProducts, setCartedProducts] = useState<Product[]>([]); // Manage cartedProducts state in local storage
const {cartedProductsFromState,setCartedProductsFromState} = useStateContext() 
const {cartLength,setCartLength} = useStateContext() 


// localStorage.removeItem('cartedProducts');
//   const handleAddToCartedProducts = () => {
//     // Get the product to add from props
//     const productToAdd = productData; // Assuming "product" is the key within productData


//     console.log(productToAdd)

//     // Check for duplicate products (optional)
//     const existingProductIndex = cartedProducts.findIndex(
//       (item) => item._id === productToAdd._id
//     );

//     if (existingProductIndex !== -1) {
//       // Product already in cartedProducts, handle quantity adjustments (optional)
//       alert('Product is already in cartedProducts, handle quantity from the cartedProducts page');
//       // Update cartedProducts quantity using setCartedProducts
//       console.log(`this is the cart length ${cartLength}`)

//     } else {
//       const updatedProduct = {
//         ...productToAdd, // Spread existing product properties
//         quantity: 1, // Initial quantity (adjust as needed)
//         totalPrice: productToAdd.hairprize, // Assuming "hairprize" holds the price
//       };

//       // Add new product to cartedProducts
//       setCartedProducts((prevCartedProducts) => [...prevCartedProducts, updatedProduct]); // Update cartedProducts state
// setCartLength(cartedProducts.length)
      

//       console.log(`this is the cart length ${cartLength}`)
//         localStorage.setItem(
//       'cartedProducts',
//       JSON.stringify([...cartedProducts, productToAdd])
//     );
  
//     }

  
//   };




  const handleAddToCartedProducts = () => {
    const productToAdd = productData;


    const existingProductIndex = cartedProducts.findIndex(
             (item) => item._id === productToAdd._id
           );
    
           if (existingProductIndex !== -1) {
             // Product already in cartedProducts, handle quantity adjustments (optional)
             alert('This Product is Already in Your cart');
             // Update cartedProducts quantity using setCartedProducts
             console.log(`this is the cart length ${cartLength}`)
    
           } else {
             const updatedProduct = {
               ...productToAdd, // Spread existing product properties
               quantity: 1, // Initial quantity (adjust as needed)
               totalPrice: productToAdd.product.hairprize, // Assuming "hairprize" holds the price
             };
      

    setCartedProducts((prevCartedProducts) => [
      ...prevCartedProducts,
      updatedProduct,
    ]);

    localStorage.setItem(
      "cartedProducts",
      JSON.stringify([...cartedProducts, updatedProduct])
    );

    let cartedProductsFromLS = localStorage.getItem("cartedProducts");
    
    if (cartedProductsFromLS)setCartLength(JSON.parse(cartedProductsFromLS).length);
    
  };
  }



 
  useEffect(() => {
    const existingCartedProductsData = localStorage.getItem("cartedProducts");

    if (!existingCartedProductsData) {
      localStorage.setItem("cartedProducts", JSON.stringify([]));

    } else {
      setCartedProducts(JSON.parse(existingCartedProductsData));
      setCartLength(JSON.parse(existingCartedProductsData).length);
    }
  }, []);

  






  const handleExitClick = () => {

    window.history.back();
  };


 


    
  return (
    <Bounded>
      <div className=" hairexpandedcontainer  text-[#202c2c] w-auto   flex flex-col  items-center text-center space-y-5  portrait:px-[8vw] py-[2vw] portrait:py-[8vw]">
<div className="exiticon    w-full flex justify-end ">
<Image onClick={handleExitClick} src={exitIcon} alt="exit-icon" className="landscape:w-[2vw] portrait:w-[6vw] portrait:sm:w-[4vw]  object-cover cursor-pointer"/>
</div>
    
<div className="content landscape:w-[55%] space-y-[10vw]">

   <div className="hairContainer   flex flex-col landscape:flex-row landscape:justify-between landscape:items-start items-center text-center portrait:space-y-[3vw] ">
        <div  className="hairImage landscape:w-[25vw] portrait:w-full   portrait:sm:w-[40vw] object-contain">
    
          <PrismicNextImage  field={productData.product.hairimage}  className="rounded-lg"/>
        </div>

<div className="hairdetails ">

<div className="space-y-[1vw]"> 
<div className="hairTitle text-[2vw]   portrait:text-[5vw]">
          {productData.product.hairtitle}
          
          </div>
        <div className="hairDescription text-[1.5vw]   portrait:text-[4vw] portrait:sm:text-[3vw]  ">
        {productData.product.hairdescription}
          </div>
        <div className="hairPrize   font-medium text-green-900 text-[2vw]  portrait:text-[4vw]">
        {productData.product.hairprize}
        </div>
</div>
   

      <div onClick={handleAddToCartedProducts} className="portrait:hidden addtocartedProductsbtn  mt-[4vw] px-10 py-2 bg-[#202c2c] cursor-pointer text-[#F5ECF1] hover:text-[#bbdabd] hover:bg-[#121f1f] duration-[1s] ease-in-out   text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

      </div>
</div>

      
   
      <div onClick={handleAddToCartedProducts} className="  landscape:hidden addtocartedProductsbtn  px-10 py-2  bg-[#202c2c] cursor-pointer text-[#F5ECF1] hover:text-[#bbdabd] hover:bg-[#121f1f] duration-[1s] ease-in-out text-[1.5vw] portrait:text-[6vw]  portrait:sm:text-[4vw] rounded-md">Add to Cart</div>

</div>

     
</div>
    </Bounded>
    
  )
}
