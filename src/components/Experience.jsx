import React from 'react'
import { Element } from 'react-scroll';
import globallogic from "./../images/globallogic.png";

const Experience = () => {
    return (
        <Element name="experience">
          <div className="text-gray-300 w-full sm:mb-44">
            <span className="flex text-xl sm:text-2xl justify-center sm:justify-start md:justify-left font-semibold">
              Experience
            </span>
            <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
              <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-blue-400 sm:border-b-0 pb-5 sm:pb-0">
                <img
                  className="w-8 sm:w-12 "
                  src={globallogic}
                  alt="GlobalLogic"
                />
                <span className="font-bold text-lg sm:hidden">GlobalLogic</span>
              </div>
    
              <div className="flex flex-1 flex-col space-y-2 border-slate-500 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
                <h1>Trainee Software Engineer</h1>
                <span className="text-sm text-gray-400">September, 2023 - Present</span>
                <div className="flex flex-col leading-relaxed">
                  <span>
                    - Currently employed by Diligent Corporation, dedicated to developing the Community product—a comprehensive agenda and meeting management tool tailored to fulfill the governance needs of public sector entities, including councils and school boards 
                  </span>
                  <span>
                    - API Integration For Download , Upload and Import Functionality Using REDUX resulting in optimize efficiency and functionality with
40% faster response time and clean code practice.
                  </span>
                  <span>
                    - Developed and implemented UI components According to Client Requirement Using React Js.
                  </span>
                  <span>
                    - Implemented Correlation ID logging within the core .NET Core Web API application to track and identify errors efficiently on AWS.
This initiative significantly reduced error occurrences and improved response time.
                    </span>
                  <div className="flex flex-col">
                    <span>
                      - Skills: React js , javascript , MUI , .Net Core 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
              <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-slate-500 sm:border-b-0 pb-5 sm:pb-0">
              <img
                  className="w-8 sm:w-12 "
                  src={globallogic}
                  alt="GlobalLogic"
                />
                <span className="font-bold text-lg sm:hidden">GlobalLogic </span>
              </div>
    
              <div className="flex flex-1 flex-col space-y-2 border-slate-500 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
                <h1>Software Engineer Intern</h1>
                <span className="text-sm text-gray-400">Febuary, 2023 - June, 2023</span>
                <div className="flex flex-col leading-relaxed">
                  <span>
                    - Received specialized Full Stack Developer training during internship focusing on ReactJS and .NET Core Web API technologies.
                  </span>
                  <span>
                    - Contributed on creating UI Components uinsg React Js and Developed API using Repository Pattern and SOLID Principles in .NET
Core Web API.
                  </span>
                  <div className="flex flex-col">
                    <span>
                      - Skills: HTML , CSS , JavaScript ,React Js , . Net Core
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      );
}

export default Experience