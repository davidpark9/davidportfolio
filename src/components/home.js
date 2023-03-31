import { useEffect } from "react"

export default function Home() {

    return (
        <section id="home">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center bg-white-500 rounded-s-xl">
        <div className="bg-green-200;lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text- mb-16 md:mb-0 items-center text-center">
        
         <p className="tracking-tight mt-12 absolute top-2 text-2xl text-purple-400 font-medium leading-relaxed ">
           Recently utilized G-SAP Library and React-Three-Fiber
          </p>
          <p className="tracking-tight mt-12 absolute top-12 text-2xl text-slate-600 font-medium leading-relaxed " >
           Nice to meet you, I'm David Park.
          </p>
          <div className ="mt-16 absolute top-0 right-0 mt-11 mr-9">
            <a
            href="#contact"
            className="hover:outline outline-gray-200 rounded text-zinc-800 text-black font-semi-bold bg-gray-100 py-1.5 px-9 shadow-md hover:opacity-100 hover:drop-shadow-md bg-gray-100 bg-opacity-50 text-lg">
            Contact
            </a>
            <a
            href="#projects"
            className="hover:outline outline-gray-200 rounded ml-5 text-zinc-800 text-black font-semi-bold bg-gray-100 border-0 py-1.5 px-9 shadow-md hover:drop-shadow-md bg-gray-100 bg-opacity-50 text-lg flex-auto ">
            Work
            </a>
            <a
            href="#about"
            className="hover:outline outline-gray-200 rounded ml-5 text-zinc-800 text-black font-semi-bold bg-gray-100 border-0 py-1.5 px-9 shadow-md hover:drop-shadow-md bg-gray-100 bg-opacity-50 text-lg flex-auto ">
            About
            </a>
          </div>
        </div>
        <div className= "lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        {/* <img 
        className="object-cover object-center rounded"
        alt="hero"
        src="./coding.svg"
     /> */}
    </div> 
   </section>
  )
}