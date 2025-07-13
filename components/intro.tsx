"use client ";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Intro = () => {
  return (
    <div className="flex-row">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start w-full">
        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] flex items-center justify-center">
          <Image
            src="/images/deependra_singh.jpg"
            alt="Deependra Singh"
            width={220}
            height={220}
            className="rounded-full border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-full aspect-square"
            style={{ transform: "scaleX(-1)" }} // Flip the image horizontally
          />
        </div>
        <div className="w-full sm:w-8/12 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl">
            Hello, this is{" "}
            <a className="underline decoration-sky-500 text-4xl sm:text-5xl font-bold">
              Deependra singh
            </a>
            .{" "}
          </h1>
          <BoxReveal>
            <p className="mx-3 sm:mx-6 text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400 text-justify">
              Hey there! I'm a game developer with experience deploying several
              games on the Play Store. I've implemented features like custom
              login with backend , ads APIs, in-game purchases, and cloud saves,
              among others. Skilled in C++, C#, nodejs, javascript and adept at
              Data Structures, Algorithms, and Problem Solving.
            </p>
          </BoxReveal>
        </div>
        <div></div>
      </div>
      <div className="mx-3 sm:mx-6 items-center sm:items-start">
        <BoxReveal>
          <p className="text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400 text-justify">
            I've primarily worked with the Unity3D engine for my deployed games.
            However, I've also dabbled in Unreal Engine in the past.
          </p>
          <p className="text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400 text-justify">
            I have a degree in computer science and game design and also possess
            art and design skills, using tools like Blender, Maya, ZBrush,
            Photoshop, Affinity Photo, and Affinity Designer for my projects.
            I've successfully deployed both 2D and 3D games on the Play Store.
          </p>
          <p className="text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400 text-justify">
            I thrive on tackling complex problems and delivering top-notch
            solutions tailored to the needs of the project. Looking forward to
            pushing boundaries and creating engaging experiences in the gaming
            world! and other's.
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};
export default Intro;
