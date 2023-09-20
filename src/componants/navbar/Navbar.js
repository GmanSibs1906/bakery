import React from "react";
import { basket } from "../../assets/images";

function Navbar() {
  return (
    <div className=" fixed top-0 z-50 w-full h-[50px] bg-[#80461B] bg-opacity-10 backdrop-blur-sm flex justify-between items-center ">
      <div className=" ml-[20px] text-white bg-[#80461B] font-custom text-[20px] backdrop-blur-lg p-[5px] rounded-md ">
        Wheaty Bakery
      </div>
      <div className=" relative ">
        <img
          src={basket}
          alt="shopping basket"
          className=" h-[20px] object-contain mr-[40px] mt-[15px] "
        />
        <div className=" bg-[#80461B] h-[20px] w-[20px] border border-black rounded-[50%] flex justify-center items-center absolute mt-[-35px] ">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
