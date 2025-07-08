"use client ";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Intro = () => {
  return (
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
          <p className="text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400 ">
            Explore my projects and skills. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Incidunt officiis aspernatur
            laboriosam culpa non amet autem quod dolore repellat commodi
            reiciendis maxime laudantium perferendis, minima earum, beatae omnis
            pariatur nihil!
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};
export default Intro;
