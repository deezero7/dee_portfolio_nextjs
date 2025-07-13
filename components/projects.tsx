import { Button } from "@/components/ui/button";

interface ProjectInterface {
  title: string;
  description: string[];
  link: string[];
  previewContent?: string;
  apk?: string;
  code?: string;
  technologies?: string[];
  youtubeUrl?: string;
  previewImage?: string;
  website?: string; // Optional field for website link
}

const projectsData: ProjectInterface[] = [
  {
    title: "Custom login and save game data",
    description: [
      "Custom login and registration system",
      "Save and fetch game data on cloud using Node.js and MongoDB",
      "Player data includes: profile picture, gems, gold, XP, level, etc.",
      "argon2 used for secure password hashing",
      "IP blocking after multiple failed login attempts",
      "Email verification using JWT tokens",
      "JWT token-based authentication with auto-refresh on successful login",
      "Regex used for validating email and password format",
      "Mongoose for schema definition and database connection",
      "Routing and modular structure added for scalability",
    ],

    link: ["#"],
    previewContent: "Preview content for Project One.",
    apk: "https://drive.google.com/drive/folders/1qt0N7Kyi695a-LJZkMJkO-tFHaZNnfcV?usp=sharing",
    code: "https://github.com/deezero7/Nodejs_server_for_Unity3dGame_Login_saveData",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "React",
      "Tailwind CSS",
      "unity3d",
    ],
    previewImage: "./images/unity3d-game-development.png",
    website: "https://deezero7.github.io/webapp_for_Unity3dGame_nextjs-/login",
  },
  {
    title: "Ludo 3d plus",
    description: [
      "Ludo 3d game released on play store.",
      "online-offline multiplayer",
      "In game purchase",
      "Levels upgrade system",
      "Unlockable Dices and Pieces",
      "Camera switching between 2d and 3d",
      "Beautiful 3d environment",
    ],
    link: [
      "https://play.google.com/store/apps/details?id=com.RPGames.Ludo3D&hl=en_US&gl=US",
    ],
    previewContent: "Preview content for Project One.",
    apk: "https://drive.google.com/drive/folders/1qt0N7Kyi695a-LJZkMJkO-tFHaZNnfcV?usp=sharing",
    code: "#",
    technologies: ["C#", "Unity3d", "mirror"],
    youtubeUrl: "https://www.youtube.com/embed/PZ8Kn4k_PGc?si=21TB7bLrj1OjZgYS", // embed example of YouTube URL
  },
  {
    title: "ThirstyCrow",
    description: [
      "Isometric 2d game released on play store.",
      "Unlock levels",
      "difficulty levels increase with each level",
    ],
    link: [
      "https://play.google.com/store/apps/details?id=com.rpdigital.ThirstyCrow1&hl=en_US&gl=US",
    ],
    previewContent: "Preview content for Project Two.",
    apk: "https://drive.google.com/drive/folders/1qt0N7Kyi695a-LJZkMJkO-tFHaZNnfcV?usp=sharing",
    code: "#",
    technologies: ["C#", "Unity3d"],
    youtubeUrl: "https://www.youtube.com/embed/MC9MMBTqeQ4?si=93Ku7-QDPaTultAh", //
  },
  {
    title: "Game prototype 'Planet Protector'",
    description: [
      "Game prototype made in unreal engine 4 when unreal engine 4 was just released.",
    ],
    link: ["#"],
    previewContent: "Preview content for Project One.",
    apk: "#",
    code: "#",
    technologies: ["C++", "Unreal Engine 4"],
    youtubeUrl: "https://www.youtube.com/embed/Tu5fcvC3Lts?si=2TrSuLY0cJmsWTmS",
  },
  {
    title: "Interactive Learning prototype using Leap motion",
    description: [
      "A prototype project for interactive learning with hand gesture using leap motion in Unity3d engine.",
    ],
    link: ["#"],
    previewContent: "Preview content for Project One.",
    apk: "#",
    code: "#",
    technologies: ["C#", "Unity3d", "Leap Motion sdk"],
    youtubeUrl: "https://www.youtube.com/embed/Dg1s19Q1I4U?si=3EvJZIXZxdNnwwTS",
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

              {/* {conditionA
                      ? <ComponentA />
                      : conditionB
                      ? <ComponentB />
                      : <Fallback />}
                      like
                      if (conditionA) {
                      return ComponentA;
                    } else if (conditionB) {
                      return ComponentB;
                    } else {
                      return Fallback;
                    }
                */}

              {project.previewImage ? (
                <a
                  href={project.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-lg shadow mb-4"
                  />
                </a>
              ) : project.youtubeUrl ? (
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
              ) : null}
              {/**?} */}
              <ul className="list-disc list-inside text-gray-600 dark:text-slate-400">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

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
                {/* // .filter out links that are just "#" */}
                {project.link
                  ?.filter((link) => link !== "#")
                  .map((link, linkIndex) => (
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
                {/* // if apk is "#" or not provided, do not render the .
                link */}
                {project.website && project.website !== "#" && (
                  <a
                    href={project.website}
                    className="text-green-500 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                      <Button>Webapp</Button>
                    </div>
                  </a>
                )}
                {project.apk && project.apk !== "#" && (
                  <a
                    href={project.apk}
                    className="text-green-500 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                      <Button>.apk</Button>
                    </div>
                  </a>
                )}
                {project.code && project.code !== "#" && (
                  <a
                    href={project.code}
                    className="text-green-500 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                      <Button>Code</Button>
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
