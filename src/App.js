import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import hero from "./images/hero.png";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Services from "./components/Services";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-5 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-7 mb-12 flex sm:text-sm justify-between dark:text-white">
            <h1 className="text-3xl font-pacifico">DevelopedByAhsan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white px-4 py-2 border-none rounded-md ml-8 "
                  href="/public/ahsan.pdf"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* HERO */}
          <div className="text-center py-7">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Syed Ahsan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product.
            </p>
          </div>
          <div className="text-5xl flex justify-center dark:text-white gap-16 py-3 text-gray-600">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.facebook.com/syed.taha.984349" target="_blank">
              <AiFillFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-ahsan-55191b1bb/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/syedahsan7401" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-b from-teal-900 via-teal-700  mt-10 mx-auto overflow-hidden md:h-96 md:w-96">
            <img src={hero} className="object-cover" />
          </div>
        </section>
        {/* RESUME */}
        <section className="">
          <div className="container">
            <h3 className="text-3xl py-1 text-teal-500">Resume</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here you will find more information{" "}
              <span className="text-teal-500">about me.</span>
            </p>
            <Resume />
          </div>
        </section>
        {/* SKILLS */}
        <section className="">
          <div className="container">
            <h3 className="text-3xl py-1 text-teal-500">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My current skills mostly in terms of{" "}
              <span className="text-teal-500">programming</span> and{" "}
              <span className="text-teal-500">technology.</span>
            </p>
            <Skills />
          </div>
        </section>
        {/* SERVICES */}
        <section className="">
          <div>
            <h3 className="text-3xl py-1 text-teal-500">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Crafting Engaging and{" "}
              <span className="text-teal-500">Responsive </span>Web Solutions
              with Precision and Expertise.
            </p>
          </div>
          <Services />
        </section>
        {/* PORTFOLIO */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-500">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here you will find some of the personal
              <span className="text-teal-500"> projects</span> that I created
              with each project I learned a new thing.
            </p>
          </div>
          <div>
            <Portfolio />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App