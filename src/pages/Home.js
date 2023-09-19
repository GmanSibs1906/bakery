import React from "react";
import { banner } from "../assets/images/images";
import Product from "./componants/products/Product";

function Home() {
  return (
    <div className=" relative ">
      <img
        src={banner}  
        alt="man adding cream topping to a cake"
        className=" hidden lg:flex w-[100vw] max-h-[100vh] overflow-x-hidden "
      />


      <div className="  absolute top-0 z-10 w-full h-full flex items-center justify-center ">
        {/* semi transparent text and button container */}
        <div class="bg-opacity-10 backdrop-blur-sm p-4 rounded-md bg-red-200 flex flex-col items-center justify-center px-[50px] border border-red-200 ">
          <h1 className=" text-[#80461B] text-[120px] font-custom ">Wheaty Bakery</h1>
          <button className=" w-[100px] h-[40px] rounded-md border border-[#80461B] cursor-pointer text-[#80461B] bg-white hover:bg-red-200 hover:text-white ">
            Shop
          </button>
        </div>
      </div>

{/* shop section */}
      <section className=" w-full flex flex-col justify-center items-center mt-[40px] ">
      <h1 className=" text-[50px] font-custom text-[#80461B] ">Shop</h1>
      <Product />
      </section>

    </div>
  );
}

export default Home;
