import React from "react";
import { GoLink } from "react-icons/go";

import web1 from "../images/codepen.png";
import web2 from "../images/todolist.png";
import web3 from "../images/portfolioo.png";
import web4 from "../images/syscap1.png";
import web5 from "../images/cellone.png";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="relative basis-1/3 flex-1 hover:opacity-70 transition-opacity duration-300">
          <a
            href="https://mini-projects-ten-gamma.vercel.app/codepen"
            target="_blank"
          >
            <img src={web1} className="rounded-lg object-cover" />

            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <GoLink className="text-white text-3xl" />
            </div>
          </a>
        </div>
        <div className="relative basis-1/3 flex-1 hover:opacity-70 transition-opacity duration-300">
          <a
            href="https://mini-projects-ten-gamma.vercel.app/todoapp"
            target="_blank"
          >
            <img src={web2} className="rounded-lg object-cover" />
            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <GoLink className="text-white text-3xl" />{" "}
            </div>
          </a>
        </div>
        <div className="relative basis-1/3 flex-1 hover:opacity-70 transition-opacity duration-300">
          <a href="/" target="_blank">
            <img src={web3} className="rounded-lg object-cover" />

            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <GoLink className="text-white text-3xl" />
            </div>
          </a>
        </div>
        <div className="relative basis-1/3 flex-1 hover:opacity-70 transition-opacity duration-300">
          <a href="https://github.com/syedahsan7401/Ecommerce-Web-Landing-Page" target="_blank">
            
            <img src={web4} className="rounded-lg object-cover" />
            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <GoLink className="text-white text-3xl" />{" "}
            </div>
          </a>
        </div>
        <div className="relative basis-1/3 hover:opacity-70 transition-opacity duration-300">
          <a href="https://github.com/syedahsan7401/cellone11" target="_blank">
           
            <img src={web5} className="rounded-lg object-cover" />

            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <GoLink className="text-white text-3xl" />
            </div>
          </a>
        </div>
        
      </div>
    </>
  );
};

export default Portfolio;
