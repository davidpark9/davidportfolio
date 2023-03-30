import { useEffect } from "react"

export default function About() {

  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };
    
    let observer = new IntersectionObserver(() => {
    },options);
  })

    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-red-500 rounded-s-xl">
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey I'm David Park. 
            
          </h1>

          <p className="mb-8 leading-relaxed">
            My first experience doing product design came along after I had joined a startup in New York City, called Cheers. It was a transition that set me for life as I had been contemplating about doing product 
            for a very long time since.
          </p>
          <div className ="flex justify-center">
            <a
            href="#contact"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg inline-flex ">
            Let's connect
            </a>
            <a
            href="#projects"
            className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Work
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