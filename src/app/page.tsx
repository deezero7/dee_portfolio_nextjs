import Image from "next/image";
import Intro from "../../components/intro";
import Education from "../../components/education";
import Skills from "../../components/skills";
import Projects from "../../components/projects";
import { Contact } from "../../components/contact";
import { DockCustom } from "../../components/dockCustom";
import ExtraLinks from "../../components/extraLinks";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-2 sm:px-8 py-4 sm:py-12 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
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
        <section id="extralinks">
          <ExtraLinks />
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
