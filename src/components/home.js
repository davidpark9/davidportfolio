import { useEffect } from "react"

export default function Home() {

  // useEffect(() => {
  //   let options = {
  //     root: document.querySelector("#scrollArea"),
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   };
    
  //   let observer = new IntersectionObserver(() => {
  //   },options);
  // })

    return (
        <section id="home">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center bg-white-500 rounded-s-xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text- mb-16 md:mb-0 items-center text-center">
        
         <p className="mb-1 text-3xl text-slate-400 leading-relaxed">
           Recently I've come to learn react and enjoy it alot.
          </p>
          <p className="mb-10 text-3xl text-slate-600  font-medium leading-relaxed" >
           Hey there, I'm david.
          </p>
          <div className ="absolute top-0 right-0 mt-11 mr-9">
            <a
            href="#contact"
            className="text-zinc-800  bg-gray-100 border-0 py-2 px-9 shadow-md focus:outline-none hover:drop-shadow-md hover:bg-gray-100 rounded text-lg">
            Contact
            </a>
            <a
            href="#projects"
            className="ml-4 text-zinc-800 bg-gray-100 border-0 py-2 px-9 shadow-md focus:outline-none hover:drop-shadow-md hover:bg-gray-100 rounded text-lg flex-auto ">
            Work
            </a>
            <a
            href="#about"
            className="ml-4 text-zinc-800 bg-gray-100 border-0 py-2 px-9 shadow-md focus:outline-none hover:drop-shadow-md hover:bg-gray-100 rounded text-lg flex-auto ">
            About
            </a>
          </div>
        </div>
        <div className= "lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        <img 
        className="object-cover object-center rounded"
        alt="hero"
        src="./coding.svg"
     />
    </div> 
   </section>
  )
}