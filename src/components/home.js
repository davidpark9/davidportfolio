import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
    // MAKING THE RESIZING WINDOW POSSIBLE
  const [width, setWidth] = useState();
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    console.log(width);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  // MAKING THE MENU BUTTON STATE
  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  const mobileMenu = menuOpen && width < 750 ? (<div className="bg-orange-300 mt-16 flex flex-col text-center top-0 right-0 ">
  <a
    href="#contact"
    className="text-center rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
  >
    Contact
  </a>
  <a
    href="#projects"
    className="text-center hover:scale-125 ml-5 rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
  >
    Work
  </a>
  <a
    href="#about"
    className="text-center ml-5 rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
  >
    About
  </a>
</div> ) : null
  const responsiveNav =
    width > 750 ? (
      <>
      <p className="tracking-tight mt-12 absolute top-2 text-2xl text-purple-200 font-medium leading-relaxed sm:text-lg">
      Recently utilized G-SAP Library and React-Three-Fiber
    </p>
    <p className="tracking-tight mt-12 absolute top-12 text-2xl text-slate-600 font-medium leading-relaxed sm:text-lg">
      Nice to meet you, I'm David Park.
    </p>
    
      <div className="mt-16 absolute top-0 right-0 mt-11 mr-9">
        <a
          href="#contact"
          className="rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
        >
          Contact
        </a>
        <a
          href="#projects"
          className="hover:scale-125 ml-5 rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
        >
          Work
        </a>
        <a
          href="#about"
          className="ml-5 rounded font-semi-bold py-1.5 px-9 text-lg hover:shadow-xl hover:outline outline-purple-200 hover:text-purple-400 hover:blur-text"
        >
          About
        </a>
      </div> </>
    ) : (
      <>
      <p className="tracking-tight mt-12 top-2 text-2xl text-purple-200 font-medium leading-relaxed sm:text-lg">
      Recently utilized G-SAP Library and React-Three-Fiber
    </p>
    <p className="tracking-tight mt-12 top-12 text-2xl text-slate-600 font-medium leading-relaxed sm:text-lg">
      Nice to meet you, I'm David Park.
    </p>
    <br></br>
      <button onClick = {handleClick} > Menu </button>
      </>
    );

  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center bg-white-500 rounded-s-xl">
        <div className="bg-green-200;lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text- mb-16 md:mb-0 items-center text-center">
         

          {responsiveNav}
          {mobileMenu}
        </div>
      </div>
    </section>
  );
}
