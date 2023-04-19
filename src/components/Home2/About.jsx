import React from "react";
import { projects } from "../../data/about";
import { BiArrowToRight, BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
const MyProjects = () => {
  return (
    <div id="about">
      <div 
      className="w-full h-full max-w-[69rem] mx-auto py-5 px-8 pb-20 text-black bg-white  lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full  h-full grid  grid-cols-1 gap-y-16">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="h-[100%]  [&:nth-child(2n)]:flex-row-reverse items-center flex justify-between  "
                >
                  <div className="flex-col md:w-2/3 h-full justify-center space-y-6 mt-5 items-center">
                    <div className="flex space-x-5 items-center">

                    <h1 className="text-[38px] large-texts flex justify-center font-bold border-b-2 border-black">
                      {project.title}
                    </h1>

                    </div>
                    <p className="text-lg">{project.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
