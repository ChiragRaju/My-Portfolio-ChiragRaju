import React from "react";
import { Element } from "react-scroll";
import globallogic from "./../images/globallogic.png";

const Experience = () => {
  return (
    <Element name="experience">
      <div className="text-gray-300 w-full sm:mb-44">
        <span className="flex text-xl sm:text-2xl justify-center sm:justify-start md:justify-left font-semibold">
          Experience
        </span>
        <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
          <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-slate-500 sm:border-b-0 pb-5 sm:pb-0">
            <img className="w-8 sm:w-12 " src={globallogic} alt="GlobalLogic" />
            <span className="font-bold text-lg sm:hidden">GlobalLogic</span>
          </div>

          <div className="flex flex-1 flex-col space-y-2 border-slate-500 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Associate Software Engineer</h1>
            <span className="text-sm text-gray-400">
              September, 2023 - Present
            </span>
            <div className="flex flex-col leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Designed and implemented reusable UI components using
                  React.js, improving development speed by 25% through code
                  reusability and modular design.
                </li>
                <li>
                  Developed and integrated secure and scalable APIs for file
                  upload, download, and import using Redux, resulting in a 40%
                  improvement in frontend data handling and performance.
                </li>
                <li>
                  Contributed to implementing AWS Lambda for integrated email
                  services in .NET, enhancing email functionality and
                  operational efficiency.
                </li>
                <li>
                  Collaborated in Agile sprints to address React.js and .NET
                  Core bugs and defects, contributing to a 35% reduction in
                  issue turnaround time using Jira for sprint tracking and
                  prioritization.
                </li>
                <li>
                  Enforced clean, maintainable validation logic in .NET APIs
                  using FluentValidation.
                </li>
                <li>
                  Identified and resolved critical security vulnerabilities such
                  as stored XSS and open redirect issues by sanitizing user
                  inputs and validating redirection URLs, improving application
                  security and preventing phishing and injection attacks.
                </li>
                <li>
                  Improved codebase security by fixing SAST and DAST issues
                  flagged by tools like GitHub Advanced Security (GHAS), Snyk,
                  and Burp Suite, reducing high-severity risks and enhancing
                  compliance by 45%.
                </li>
              </ul>
              <div className="mt-4 font-semibold">
                Skills: C#, JavaScript, SQL, React.js, ASP.NET Core, .NET Core
                Web API, LINQ, Entity Framework Core, ADO.NET
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
          <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-slate-500 sm:border-b-0 pb-5 sm:pb-0">
            <img className="w-8 sm:w-12 " src={globallogic} alt="GlobalLogic" />
            <span className="font-bold text-lg sm:hidden">GlobalLogic </span>
          </div>

          <div className="flex flex-1 flex-col space-y-2 border-slate-500 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Software Engineer Intern</h1>
            <span className="text-sm text-gray-400">
              Febuary, 2023 - June, 2023
            </span>
            <div className="flex flex-col leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Received specialized Full Stack Developer training during
                  internship focusing on ReactJS and .NET Core Web API
                  technologies.
                </li>

                <li>
                  - Contributed on creating UI Components uinsg React Js and
                  Developed API using Repository Pattern and SOLID Principles in
                  .NET Core Web API.
                </li>
              </ul>
              <div className="mt-4 font-semibold">
                Skills: HTML , CSS , JavaScript ,React Js , . Net Core
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
