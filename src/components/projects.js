import React from 'react';
import { projects } from '../data';
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
             <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="text-purple-400 flex justify-start sm:text-4xl text-3xl font-medium title-font mb-4">
                Discover
              </h1>
              <p className="text-black flex justify-start lg:w-1/2 text-left leading-relaxed text-base">
              David, who is currently living in NYC, started his career as a design director for an e-commerce company. He transitioned into product roles shortly after moving to NYC in 2020. He's actively attedning classes at The New School and Cornell Tech, where he is specializing in User Experience and Development tracks. 
              </p>
            </div>
            <div className="p-15 flex-wrap-m-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4 bg-green-200">
                  <div className="flex relative ">
                    {/* <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    /> */}
                    <div className="shadow-md p-10 rounded-md text-left text-black px-8 py-8 relative z-10 w-full hover:outline outline-gray-200 bg-gray-100 bg-opacity-50">
                      <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-sm font-medium text-black mb-1">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}