"use client";

import React from "react";

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
    startDate: "2018-08-01",
    endDate: "2022-05-31",
    institution: "XYZ University",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    address: "123 University St, City, Country",
  },
  {
    startDate: "2022-09-01",
    endDate: "2024-05-31",
    institution: "ABC Institute",
    degree: "Master of Science",
    fieldOfStudy: "Software Engineering",
    address: "456 Institute Ave, City, Country",
  },
];
// data for right side
const EducationDataR: EducationInterface[] = [
  {
    startDate: "2018-08-01",
    endDate: "2022-05-31",
    institution: "RRXYZ University",
    degree: "RRBachelor of Science",
    fieldOfStudy: "RRComputer Science",
    address: "RR123 University St, City, Country",
  },
  {
    startDate: "R2022-09-01",
    endDate: "R2024-05-31",
    institution: "RABC Institute",
    degree: "RMaster of Science",
    fieldOfStudy: "RSoftware Engineering",
    address: "R456 Institute Ave, City, Country",
  },
];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

const Education: React.FC = () => {
  return (
    <div className="flex space-x-4 my-12">
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

      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-right">
          {/* space for alignment */}
          &nbsp;
        </h2>
        <ol className="relative border-l border-gray-400 dark:border-gray-700">
          {EducationDataR.map((edu, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {edu.degree}
                {/*// Only shows if it's defined*/}
                {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}{" "}
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
