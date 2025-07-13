"use client";

import React from "react";

// Define the interface for education data
// This interface describes the structure of each education entry
interface EducationInterface {
  startDate: string;
  endDate: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  address?: string;
}
// data for left side
const EducationDataL: EducationInterface[] = [
  {
    startDate: "2011-07-01",
    endDate: "2014-07-31",
    institution: "ICAT College of Design & Media",
    degree: "Bachelor's degree",
    fieldOfStudy: "Game and Interactive Media Design",
    // address: "123 University St, City, Country",
  },
  {
    startDate: "2017-07-01",
    endDate: "2019-07-31",
    institution: "Raja Balwant Singh Management Technical Campus",
    degree: "Master of Business Administration - MBA",
    fieldOfStudy:
      "Business, Management, Marketing, and Related Support Services",
    // address: "456 Institute Ave, City, Country",
  },
  {
    startDate: "2019-08-01",
    endDate: "2023-06-31",
    institution: "Glocal University",
    degree: "Bachelor of Technology - BTech",
    fieldOfStudy: "Computer Science",
    // address: "456 Institute Ave, City, Country",
  },
];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

const Education: React.FC = () => {
  return (
    <div className="flex flex-col  my-12 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-left">
          Education
        </h2>
        <ol className="relative border-l border-gray-400 dark:border-gray-700">
          {EducationDataL.map((edu, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {edu.degree}
                {/*// Only shows if it's defined*/}
                {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {edu.institution}
                {edu.address ? `, ${edu.address}` : ""}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
