import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="backdrop-filter bg-gray-900 backdrop-blur-lg bg-opacity-70 px-8 flex items-baseline py-2 sticky top-0 shadow bg-transparent z-20  text-white max-w-7xl mx-auto text-sm">
      <span className="mt-1 font-medium flex">
        <span className="mr-1" style={{ color: "#6c757d" }}>
          Chirag
        </span>
        <span>Raju</span>
      </span>
      <div
        className="hidden w-full lg:flex justify-end space-x-10 opacity-70"
        style={{ lineHeight: "45px" }}
      >
        <li className="list-none cursor-pointer">
          <Link to="experience" smooth={true} offset={-100}>
            Experience
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="skills" smooth={true} offset={-100}>
            Skills
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="aboutMe" smooth={true} offset={-100}>
            About me
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myProjects" smooth={true} offset={-100}>
            Projects
          </Link>
        </li>
        
      </div>
      <div
        className="flex justify-end w-full lg:hidden cursor-pointer w-auto ml-auto"
        onClick={() => setIsToggled(!isToggled)}
        style={{ width: "auto" }}
      >
        {isToggled ? (
          <></>
        ) : (
          <i
            className="fas fa-bars text-slate-500 mt-3"
            style={{ fontSize: "18px" }}
          ></i>
        )}
      </div>
      <div
        className={
          isToggled
            ? "backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-95 flex-col justify-center items-center absolute top-0   left-0 w-full h-auto text-white p-4 space-y-4 block transition-all duration-300 ease-in-out rounded text-sm shadow-2xl"
            : "hidden"
        }
      >
        <div className="flex justify-end w-full">
          <i
            className=" fas fa-times text-slate-500 mt-3"
            style={{ fontSize: "18px" }}
            onClick={() => setIsToggled(!isToggled)}
          ></i>
        </div>
        <div className="flex justify-center">
          <ul className="leading-10 text-center space-y-6 font-semibold ">
            <li className="list-none cursor-pointer">
              <Link
                to="experience"
                offset={-100}
                onClick={() => setIsToggled(!isToggled)}
              >
                Experience
              </Link>
            </li>
            <li className="list-none cursor-pointer">
              <Link
                to="skills"
                offset={-100}
                onClick={() => setIsToggled(!isToggled)}
              >
                Skills
              </Link>
            </li>
            <li className="list-none cursor-pointer">
              <Link
                to="aboutMe"
                offset={-100}
                onClick={() => setIsToggled(!isToggled)}
              >
                About me
              </Link>
            </li>
            <li className="list-none cursor-pointer">
              <Link
                to="myProjects"
                offset={-100}
                onClick={() => setIsToggled(!isToggled)}
              >
                Projects
              </Link>
            </li>

    
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
