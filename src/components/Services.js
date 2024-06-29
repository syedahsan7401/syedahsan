import React from "react";
import design1 from "../images/design1.png";
import code1 from "../images/code1.png";
import responsive from "../images/responsive.png";
const Services = () => {
  return (
    <>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src={design1} width={100} height={100} alt=""/>
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful design</h3>
          <p className="py-2">
            Manage your entire website's design using global elements and
            website-wide design settings. I will combine the art of design with
            the science of programming.
          </p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src={code1} width={100} height={100} alt=""/>
          <h3 className="text-lg font-medium pt-8 pb-2 ">Web Developement</h3>
          <p className="py-2">
            I know how it feels to use your creative juices to perfect a piece
            of code, only to have someone else ask for a sudden change in a
            different direction.
          </p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src={responsive} width={100} height={100} alt="" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Responsive Design</h3>
          <p className="py-2">
            Building beautiful responsive websites is easy. I made websites
            responsive by nature and also gives you full control over how your
            website looks on mobile devices.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
