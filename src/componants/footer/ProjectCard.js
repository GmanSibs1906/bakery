import React from "react";

function ProjectCard({title , link, image, text1, text2}) {
  return (
    <a
      href={link}
      target="_blank"
      className=" w-[150px] flex flex-col justify-center items-center border border-slate-200 rounded-[10px] mb-[10px] "
    >
      <div className="flex w-full justify-center text-[18px] font-bold">
        {title}
      </div>
      <img src={image} alt="" className=" w-[100px] h-[100px] rounded-md " />
      <div className="flex w-full justify-center text-[12px] font-extralight text-slate-600 ">
        #{text1}
      </div>
      <div className="flex w-full justify-center text-[12px] font-extralight text-slate-600">
        #{text2}
      </div>
    </a>
  );
}

export default ProjectCard;
