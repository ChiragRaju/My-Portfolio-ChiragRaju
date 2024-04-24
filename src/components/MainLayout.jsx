import React from "react";
import Intro from "./Intro";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center z-10">
      <img
        src="/Images/Lines.webp"
        alt="grid"
        className="flex absolute justify-center backdrop-filter backdrop-blur-xl bg-cover w-full top-0"
        style={{ zIndex: "-999" }}
      />
      <Intro />
    </div>
  );
};

export default MainLayout;
