import React from "react";
import { basket } from "../../assets/images";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const homePage = () => {
    navigate(`/`);
  };

  const aboutPage = () => {
    navigate(`/about`);
  };

  return (
    <div className=" fixed top-0 z-50 w-full h-[50px] bg-[#80461B] bg-opacity-10 backdrop-blur-sm flex justify-between items-center ">
      <div onClick={homePage} className="cursor-pointer md:flex ml-[20px] text-[#80461B] font-custom text-[20px]  rounded-md ">
        Wheaty Bakery
      </div>
      <div onClick={aboutPage} className="cursor-pointer md:flex ml-[20px] text-black font-custom text-[20px]  rounded-md mx-[30px] ">
        About Page
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
