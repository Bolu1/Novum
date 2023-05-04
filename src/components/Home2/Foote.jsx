import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import dev from "../../assets/icons/dev.png";

const Foote = () => {
  return (
    <div>
      <div className="w-full px-8 py-8 bg-black text-white">
        <div className="w-full h-full mx-auto text-center max-w-[69rem]">
          <h1 className="text-2xl font-bold mb-4 ">
            Novum
          </h1>
          <div className=" space-x-5">
            <p className="text-center">
           Help is closer than you think at Novum Health Services we provide client-
centered care and treatments unique to the individual. We are a wellness
center operating at the nexus of improving quality of life, both mentally and
physically through innovative health promotion measures to ensure whole-
body integration in the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foote;
