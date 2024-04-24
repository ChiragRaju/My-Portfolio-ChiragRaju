import React from "react";
import { MdOutlinePermContactCalendar, MdAlternateEmail } from "react-icons/md";

const Intro = () => {
  return (
    <div className="flex flex-col h-screen text-white justify-center items-center">
      <h1 className="relative font-bold text-center md:text-5xl sm:text-3xl text-xl -mt-28">
        I am <span style={{ color: "#6c757d" }}>Chirag </span>
        <span>Raju</span>
      </h1>
      <span className="mt-5 font-normal text-center text-md sm:w-4/5">
        Passinate Full Stack Web Developer with 7+ Months of experience crafting
        responsive, user-centric web applications.
      </span>
      <span className="mt-5 text-center inline-block">
        <MdOutlinePermContactCalendar className="inline-block mr-1 text-xl" />
        8296546757
        <span className="inline-block ml-5">
          <MdAlternateEmail className="inline-block mr-1 text-xl" />
          <a href="mailto:chiragrajus2002@gmail.com" className="inline-block">
            chiragrajus2002@gmail.com
          </a>
        </span>
      </span>

      <div className="flex space-x-6 mt-3">
        <a
          href="https://drive.google.com/file/d/1d3yArUppICm49oPUrxmLSc7ffJ4cIYI-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="text-gray-200 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-110 text-sm w-32 sm:w-40"
            style={{
              background: "#6c757d",
              borderRadius: "70px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            View Resume
          </button>
        </a>
      </div>
      <div className="flex flex-col space-y-3 mt-16 absolute bottom-20">
        <p className="text-gray-400">Do Follow and connect with me </p>
        <div className="flex space-x-8 mb-8 mx-auto md:mx-0 justify-center">
          <a
            href="https://github.com/ChiragRaju"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-github  text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-raju-78b866230/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin-in text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
