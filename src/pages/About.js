import React from "react";
import { about, aboutOne } from "../assets/images";

function About() {
  return (
    <div className=" w-full flex justify-center items-center relative ">
      <img
        src={about}
        alt="about image"
        className=" hidden lg:flex h-[70vh] object-contain "
      />
      <img src={aboutOne} alt="about image" className=" flex lg:hidden h-[70vh] object-contain " />
      <div className=" absolute min-h-[70vh] min-w-[270px] ml-[-30%] top-0 z-30 bg-white bg-opacity-80 backdrop-blur-sm flex flex-col items-center ">
        {/* about us heading */}
        <div className=" w-full text-center text-[40px] text-[#80461B] font-custom mt-[80px] ">
          About Us
        </div>

        {/* about text */}
        <div className=" text-[12px] font-light max-w-[230px] mt-[20px]">
          Wheaty Bakery: Where Baking Meets Passion.
          <div className=" text-[14px] font-semibold underline my-[3px] ">
            Our Mission
          </div>
          Our mission is simple: craft
          exceptional treats that warm the soul.
          <div className=" text-[14px] font-semibold underline my-[3px] ">
            The Wheaty Experience
          </div>
          We source the finest ingredients, from local flours to ripe fruits, to
          create our artisanal products. We
          blend experience with creativity to turn ingredients into edible art.
          <div className=" text-[14px] font-semibold underline my-[3px] ">
            Join Our Community
          </div>
          Step into Wheaty Bakery, where every bite tells a story. Come for the
          flavors, stay for the memories.
        </div>
      </div>
    </div>
  );
}

export default About;
