"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../../../components/ui/images-slider";
import { Button } from "@/components/ui/button";

const images = [
  "/images/work2d/deependra-singh-env33.png",
  "/images/work2d/deependra-singh-env23c2.png",
  "/images/work2d/deependra-singh-env19c2.png",
  "/images/work2d/deependra-singh-env19c26.png",
  "/images/work2d/deependra-singh-env19c22.png",
  "/images/work2d/deependra-singh-env19c24.png",
];

export default function Work2dPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-2 sm:px-8 py-4 sm:py-12 gap-4 sm:gap-8 font-[family-name:var(--font-geist-sans)] -[40rem] rounded-md md:items-center md:justify-center relative overflow-hidden">
      <h2 className=" text-2xl font-bold mb-6 sm:text-2xl mt-4 sm:mb-6 text-left pl-4 sm:pl-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4 ">
        2D Work
      </h2>
      <div className="w-full max-w-4xl flex flex-col  my-12 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 mx-auto">
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>
      </div>
      <div className="w-full max-w-4xl flex flex-col  my-12 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 mx-auto gap-3">
        <h2 className=" text-2xl font-bold mb-6 sm:text-2xl mt-4 sm:mb-6 text-left pl-4 sm:pl-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2 ">
          Links
        </h2>
        <a
          href="https://deezero7.artstation.com/projects/wZwrZ"
          className="text-green-500 hover:underline text-sm "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Artstation 1</Button>
          </div>
        </a>
        <a
          href="https://deezero7.artstation.com/"
          className="text-green-500 hover:underline text-sm "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Artstation 2</Button>
          </div>
        </a>
        <a
          href="https://deezero7.wixsite.com/deesigner/2d-works
"
          className="text-green-500 hover:underline text-sm "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Art Work</Button>
          </div>
        </a>
      </div>
    </div>
  );
}

// https://deezero7.artstation.com/projects/wZwrZ
// https://deezero7.artstation.com/
//https://deezero7.wixsite.com/deesigner
