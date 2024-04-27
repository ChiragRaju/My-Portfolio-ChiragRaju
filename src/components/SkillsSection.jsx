import React from "react";
import HTMLIcon from "./../images/htmlIcon.png";
import CSSIcon from "../images/cssIcon.png";
import JsIcon from "../images/jsicon.webp";
import ReactIcon from "../images/reactIcon.png";
import NodejsIcon from "../images/nodejsIcon.webp";
import Java from "../images/Java.png";
import dotnet from "../images/dotnet.png";
import postman from "../images/postman.webp";

import AwsIcon from "../images/awsIcon.png";
import GithubIcon from "../images/githubIcon.png";

import { Element } from "react-scroll";

const SkillsSection=()=>{
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto mb-6 sm:mb-44 py-5">
        <div className="flex flex-col w-full ">
          <span className="text-white text-xl sm:text-2xl flex justify-center sm:justify-start">
            My{" "}
            <span style={{ fontWeight: "700" }} className="font-semibold">
              Skills
            </span>
          </span>

          <div
            className="w-full flex justify-center items-center flex-wrap gap-6 p-8 mt-10 rounded"
            style={{ background: "linear-gradient(99deg, #6c757d 0%, rgba(18, 19, 24, 0) 100%)" }}
          >
            <img src={HTMLIcon} width="60" alt="Icons" />
            <img src={CSSIcon} width="60" alt="Icons" />
            <img src={JsIcon} width="60" alt="Icons" />
            <img src={ReactIcon} width="60" alt="Icons" />
            <img src={NodejsIcon} width="60" alt="Icons" />
            <img src={Java} width="50" alt="Icons"/>
            <img src={dotnet} width="60" alt="Icons"/>
            <img src={postman} width="60" alt="Icons"/>
            <img src={AwsIcon} width="60" alt="Icons" />
            <img src={GithubIcon} width="60" alt="Icons" />
           
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
