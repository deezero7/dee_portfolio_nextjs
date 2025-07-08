import { Button } from "@/components/ui/button";

interface ProjectInterface {
  title: string;
  description: string;
  link: string[];
  previewContent?: string;
  code?: string;
  technologies?: string[];
  youtubeUrl?: string;
}

const projectsData: ProjectInterface[] = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    link: ["https://google.com"],
    previewContent: "Preview content for Project One.",
    code: "#",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube URL
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    link: ["https://google.com"],
    previewContent: "Preview content for Project Two.",
    code: "#",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="w-full flex justify-center px-0 sm:px-4 py-4 sm:py-8">
      <div className="w-full max-w-4xl border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className=" text-2xl font-bold mb-6 sm:text-2xl mt-4 sm:mb-6 text-left pl-4 sm:pl-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-6 justify-center">
          {projectsData.map((project, index) => (
            <div
              key={project.title + index}
              className="w-full max-w-sm bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-left">
                {project.title}
              </h3>
              {/* youtube video preview */}
              {project.youtubeUrl && (
                <div className="mb-4 w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded"
                    src={project.youtubeUrl}
                    title={project.title + " video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <p className="text-base sm:text-lg text-opacity-100  text-gray-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech, techIndex) => (
                  <span
                    key={tech + techIndex}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.link?.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link}
                    className="text-blue-500 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer" //Always use rel="noopener noreferrer" with target="_blank" for security.
                  >
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                      <Button>Play store</Button>
                    </div>
                  </a>
                ))}
                {project.code && (
                  <a
                    href={project.code}
                    className="text-green-500 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                      <Button>.apk</Button>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
