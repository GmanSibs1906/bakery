import React from "react";

function ProjectCard({title , link, image, text1, text2}) {
  return (
    <a
      href={link}
      target="_blank"
      className=" w-[120px] flex flex-col justify-center items-center border border-slate-200 rounded-[10px] mb-[10px] "
    >
      
      <img src={image} alt="" className=" w-[60px] h-[60px] rounded-md " />
      <div className="flex w-full justify-center text-[14px] font-thin">
        {title}
      </div>
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
