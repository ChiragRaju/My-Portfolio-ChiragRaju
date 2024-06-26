import React from "react";
import Navbar from "./Navbar";

const ApplicationLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-40 text-sm">
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
