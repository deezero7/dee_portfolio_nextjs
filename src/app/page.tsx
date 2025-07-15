"use client";
import Image from "next/image";
import Intro from "../../components/intro";
import Education from "../../components/education";
import Skills from "../../components/skills";
import Projects from "../../components/projects";
import { Contact } from "../../components/contact";
import { DockCustom } from "../../components/dockCustom";
import OtherLinks from "../../components/otherLinks";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-2 sm:px-8 py-4 sm:py-12 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] -[40rem] rounded-md md:items-center md:justify-center relative overflow-hidden">
      {/* Grid Background Behind Everything */}
      <div
        className={cn(
          "fixed inset-0 -z-10 h-full w-full",
          "[background-size:40px_40px]",
          // Light mode: very subtle gray lines
          "[background-image:linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)]",
          // Dark mode: even darker subtle lines
          "dark:[background-image:linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
        )}
      />

      {/* Optional radial overlay for softness */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Spotlight />
      <main className="flex flex-col gap-8 sm:gap-12 w-full max-w-4xl">
        {/* Home/Intro Section */}
        <section id="home">
          {" "}
          {/* OR id="intro" */}
          <Intro />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Projects Section */}
        <section id="otherLinks">
          <OtherLinks />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Education Section */}
        <section id="education">
          <Education />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
        <DockCustom />
      </main>
    </div>
  );
}
