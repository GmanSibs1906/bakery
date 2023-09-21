import React from "react";
import ProjectCard from "./ProjectCard";
import { game, portfolio, profileCard, bot } from "../../assets/images";

function Footer() {
  return (
    <footer className="  w-full man flex-col bg-opacity-10 backdrop-blur-sm p-4 rounded-md bg-red-200">
      <div className=" flex flex-col md:flex-row w-full ">
        <div className=" md:hidden lg:flex md:w-[30%] justify-center items-center w-full">
          <div className=" text-[#80461B] text-[40px] font-custom text-center ">
            Wheaty Bakery
          </div>
        </div>
        <div className=" flex flex-col w-full ">
          <div className=" flex w-full justify-center underline text-[#80461B] my-[10px] ">
            {" "}
            A few Projects{" "}
          </div>
          <div className=" flex flex-col md:flex-row items-center w-full justify-evenly ">
            <ProjectCard
              link="https://sparkling-lollipop-51e33e.netlify.app/"
              title="Game"
              image={game}
              text1="Javascript"
              text2="OOP"
            />
            <ProjectCard
              link="https://64e6e02d27e0cb3c7e370004--gregarious-meringue-d11912.netlify.app/"
              title="Chat Bot"
              image={bot}
              text1="Javascript"
              text2="API"
            />
            <ProjectCard
              link="https://jovial-seahorse-ce30a6.netlify.app/"
              title="Profile Card"
              image={profileCard}
              text1="React Js"
              text2="Tailwind Css"
            />
            <ProjectCard
              link="https://portfolio-fa997.web.app/"
              title="Portfolio"
              image={portfolio}
              text1="React Js"
              text2="Tailwind Css"
            />
          </div>
          <div className="hidden md:flex lg:hidden w-full justify-center items-center my-[5px] text-[18px] underline">
            Designed & built by Gman
          </div>
        </div>
        <div className="md:hidden lg:flex w-full mt-[20px] md:mt-[0] flex-col md:w-[30%] justify-center items-center">
          <div className=" text-[25px] underline font-thin text-center ">
            Designed & built by
          </div>
          <div className="text-[#80461B] text-[40px] font-custom text-center">Gman</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
