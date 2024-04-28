import React from 'react';
import { Element } from 'react-scroll';
import ProjectsConfig from './ProjectsConfig';

const Projectlist = () => {
  return (
    <Element name="myProjects">
      <div className="mb-6 sm:mb-44 py-5">
        <span className="flex text-gray-300 text-xl sm:text-2xl justify-center sm:justify-start">
          My <span className="font-semibold">&nbsp;Projects</span>
        </span>
        <div className="flex flex-col space-y-20 py-10">
          {ProjectsConfig.map((config,index) => (
            <div className="h-auto w-full  text-white rounded-md flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-slate-700 p-4 sm:p-10 bg-opacity-80 transform transition-all hover:scale-105 sm:hover:scale-110 cursor-pointer">
              <div className={"w-full rounded-2xl "}>
                {config.previewImage ?
                (
                <img
                key={index}
                  src={config.previewImage}
                 
                  className={
                    "w-full h-full rounded object-cover shadow-2xl transform transition-all hover:scale-110"
                  }
                  alt="Still Not Deployed"
                />):(<video key={index} src={config.video}  autoPlay loop muted className={
                  "w-full h-full rounded object-cover shadow-2xl transform transition-all hover:scale-110"}/>)
                }
              </div>
              <div className="w-full h-6/6 flex flex-col pt-6 md:p-8">
                <span className="mb-1 font-bold" style={{ fontSize: "20px" }}>
                  {config.title}
                </span>
                <div className="flex justify-between">
                  {config.alternate && (
                    <div className="mt-1">
                      <img src={config.alternate} alt="preview"/>
                    </div>
                  )}
                </div>
                <div className="mt-2 mb-4">
                  <p className="text-xs md:text-sm lg:text-md leading-relaxed md:leading-relaxed">
                    {config.description}
                  </p>
                </div>
                {config.liveDemoLink ? (
                  <div className="flex justify-between mt-auto">
                    <a
                      target="_blank"
                      href={config.liveDemoLink}
                      className="font-bold text-blue-400"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      href={config.githubLink}
                      className="font-bold text-gray-400"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                ) : (
                  <div className="mt-auto">
                    <div className="flex justify-between mt-auto">
                    
                    <a
                      target="_blank"
                      href={config.githubLink}
                      className="font-bold text-gray-400"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Projectlist