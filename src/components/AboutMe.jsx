import React from "react";
import Chiragrajupic from "./../images/Chiragrajupic.png";
import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element name="aboutMe">
      <div className="mb-6 sm:mb-44 text-gray-300 w-full h-auto text-2xl  text-center md:text-left py-5">
        <span className="flex text-xl sm:text-2xl justify-center sm:justify-start">
          About <span className="font-semibold ml-2">ME</span>
        </span>
        <div className="flex flex-col justify-center md:flex-row h-auto">
          <div className="w-full h-auto mt-10">
            <div
              style={{ borderRadius: "50%" }}
              className="h-48 w-48 lg:h-80 lg:w-80  mx-auto"
            >
              <img
                src={Chiragrajupic}
                alt="MyPic"
                width="100%"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col text-lg mt-10 md:mt-16 lg:mt-28">
            <span className="text-sm text-gray-300">Hello, I am</span>
            <span className="text-2xl font-semibold mt-2 text-slate-500">
              Chirag Raju
            </span>
            <span className="mt-2 text-sm text-gray-300 leading-relaxed">
              I am currently working as a Trainee Software Engineer at
              GlobalLogic - Hitachi group company. I have around 10+ months of
              experience. I have exposure in both frontend and backend
              technologies. Currently Learning Java Spring Boot and TypeScript.
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
