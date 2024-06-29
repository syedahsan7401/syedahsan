import React, { useState } from "react";

const Skills = () => {
  const skills = {
    "Front-End Development": [
      "HTML",
      "CSS",
      "JavaScript (JS)",
      "Bootstrap",
      "jQuery",
      "Reactjs",
    ],
    "Back-End Development": ["C#"],
    "Databases": ["SQL Server"],
    "Enterprise Resource Planning (ERP)": [
      "SAP MM",
      "SAP SD",
      "SAP FM",
      "ERP Implementation",
    ],
    "Microsoft Technologies": [
      "Dynamics 365 Customer Engagement Apps",
      "Microsoft PowerApps",
      "Dynamics 365 CRM",
      "MS Office: Word, Excel, PowerPoint, Teams",
      "Basic Knowledge of all Microsoft Power Platform",
    ],
    "Key Competencies": [
      "Cost-benefit Analysis",
      "Teamwork and Collaboration",
      "Strong Interpersonal Skills",
      "Proactive and Self-motivated",
      "Exceptional Organizational Skills",
      "Creative Thinking"
    ],
    "Software Development Methodologies": [
      "Application Analysis and Design",
      "Agile Software Development",
    ],
    
  };

  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(skills)[0]
  );

  return (
    <>
      <div className="container lg:flex mx-auto p-4 m-4">
        <div className=" lg:w-1/2 ">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`font-light text-teal-500 border border-teal-500 m-2 px-4 py-3 rounded-lg ${
                selectedCategory === category
                  ? "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700"
                  : " text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)} >
              {category}
            </button>
          ))}
        </div>
        <div className="bg-transparent dark:border border-teal-500 shadow-lg dark:text-gray-200 rounded-lg p-6 lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
          <ul className="list-disc list-inside">
            {skills[selectedCategory].map((skill) => (
              <li key={skill} className="mb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
