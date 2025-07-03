"use client ";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import Image from "next/image";

const Intro = () => {
  return (
    <div className=" flex gap-4">
      <div className="w-8/12 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">
          Hello, this is{" "}
          <a className="underline decoration-sky-500 text-5xl font-bold">
            Deependra singh
          </a>
          .{" "}
        </h1>
        <p className="text-lg ">
          Explore my projects and skills. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Incidunt officiis aspernatur laboriosam
          culpa non amet autem quod dolore repellat commodi reiciendis maxime
          laudantium perferendis, minima earum, beatae omnis pariatur nihil!
        </p>
      </div>
      <div className="flex-1 items-center justify-center w-4/12 ">
        <ScratchToReveal
          width={300}
          height={300}
          minScratchPercentage={50}
          gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
        >
          <Image
            src="/images/deependra_singh.jpg"
            alt="Deependra Singh"
            width={300}
            height={300}
            className="rounded-full border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full object-cover"
          />
        </ScratchToReveal>
      </div>
    </div>
  );
};
export default Intro;
