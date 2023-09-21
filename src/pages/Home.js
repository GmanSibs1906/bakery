import React from "react";
import { banner } from "../assets/images/";
import Product from "../componants/products/Product";
import { products } from "../assets/data/productData";

function Home() {
  const productDada = products;

  return (
    <div className=" relative ">
      <img
        src={banner}
        alt="man adding cream topping to a cake"
        className=" mt-[45px] md:mt-[0] flex w-[100vw] max-h-[100vh] overflow-x-hidden "
      />

      <div className="  absolute top-0 z-10 w-full h-full flex justify-center ">
        {/* semi transparent text and button container */}
        <div class="bg-opacity-10 backdrop-blur-sm p-4 rounded-md bg-red-200 flex flex-col items-center justify-center md:px-[50px] border border-red-200 h-[40px] md:h-[300px] mt-[20%] md:mt-[10%] ">
          <h1 className=" text-[#80461B] md:text-[120px] font-custom ">
            Wheaty Bakery
          </h1>
          <a href="#shop">
            <button className=" hidden md:flex w-[100px] h-[40px] rounded-md border border-[#80461B] cursor-pointer text-[#80461B] bg-white hover:bg-red-200 hover:text-white justify-center items-center ">
              Shop
            </button>
          </a>
        </div>
      </div>

      {/* shop section */}
      <section
        className=" w-full flex flex-col justify-center items-center mt-[20px] md:mt-[60px] "
        id="shop"
      >
        <h1 className=" text-[40px] font-custom text-[#80461B] z-50 ">Welcome</h1>
        <div className="flex flex-wrap w-full justify-evenly mt-[-20px] md:mt-[0] ">
          {productDada.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.product_id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
