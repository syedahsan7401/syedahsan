import React from "react";

const Resume = () => {
  return (
    <>
      <div className="lg:flex md:flex gap-10">
        {/* left */}
        <div className="lg:w-1/2 md:w-1/2">
          <div className="shadow-2xl p-10 rounded-3xl my-10 flex-1">
            <h3 className="text-2xl py-1 dark:text-white">Summary</h3>
            <div className="flex">
              {/* vertical line */}
              <div class="border-l-2 border-teal-500 h-auto mt-4 mr-4"></div>
              <div className="">
                <h4 className="text-lg py-1 text-teal-500">Syed Ahsan</h4>
                <p className="font-light py-2 text-gray-800 dark:text-gray-200 dark:font-thin">
                  Hey! Aspiring Front-end Web Designer focused on creating
                  visually appealing and easy-to-use websites. Dedicated to
                  understanding client needs and translating them into simple,
                  effective designs. Strong team player with a willingness to
                  learn and contribute to project success.
                </p>
                <ul className="font-light py-2 text-gray-800 dark:text-gray-200">
                  <li>(+92) 345-3171722 </li>
                  <li>ahsansyed361@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="shadow-2xl p-10 rounded-3xl my-10 flex-1">
            <h3 className="text-2xl py-1 dark:text-white">Education</h3>
            <div className="flex">
              {/* vertical line */}
              <div class="border-l-2 border-teal-500 h-auto mt-4 mr-4"></div>
              <div>
                <div className="font-light py-2 text-gray-800 dark:text-gray-200">
                  <h4 className="text-lg py-1 text-teal-500">BS-ERP</h4>
                  <div className="flex justify-between">
                    <h5>2021 - 2025</h5>
                    <h5 className="text-teal-500">3.41 CGPA</h5>
                  </div>
                  <p>
                    <em>
                      KIET (Karachi Institute of Economics and Technology){" "}
                    </em>
                  </p>
                </div>
                <div className="font-light py-2 text-gray-800 dark:text-gray-200">
                  <h4 className="text-lg py-1 text-teal-500">
                    Intermediate in Pre-engineering
                  </h4>
                  <h5>2020</h5>
                  <p>
                    <em>Jamia Milia Government Degree. College</em>
                  </p>
                </div>
                <div className="font-light py-2 text-gray-800 dark:text-gray-200">
                  <h4 className="text-lg py-1 text-teal-500">
                    Matric in Science
                  </h4>
                  <h5>2018</h5>
                  <p>
                    <em>Brilliant Master Academy </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="shadow-2xl p-10 lg:w-1/2 md:w-1/2 rounded-3xl my-10 flex-1" style={{height: '355px'}}>
          <h3 className="text-2xl py-1 dark:text-white">Certification</h3>
          <div className="flex">
            {/* vertical line */}
            <div class="border-l-2 border-teal-500 h-auto mt-4 mr-4"></div>
            <div>
              <div className="font-light py-2 text-gray-800 dark:text-gray-200">
                <h4 className="text-lg py-1 text-teal-500">
                  Diploma of Microsoft Dynamics 365 CRM Business Architect from
                  Udemy
                </h4>
                <h5>2024</h5>
                <p>
                  <em>Udemy</em>
                </p>
              </div>
              <div className="font-light py-2 text-gray-800 dark:text-gray-200">
                <h4 className="text-lg py-1 text-teal-500">
                  Front-End Designer
                </h4>
                <h5>2021</h5>
                <p>
                  <em>Aptech Learning Centre</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
