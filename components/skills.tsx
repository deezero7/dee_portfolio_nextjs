const skillsData: string[] = [
  "c#",
  "c++",
  "unity3d",
  "hlsl",
  "compute shaders",
  "dsa",
  "algorithms",
  "unreal engine",
  "blender",
  "game development",
  "javascript",
  "typescript",
  "nodejs",
  "expressjs",
  "mongodb",
  "mysql",
  "git",
  "github",
  "html",
  "css",
  "tailwindcss",
  "reactjs",
  "nextjs",
  "python",
];

const Skills: React.FC = () => {
  return (
    
    <div className="flex flex-col  my-12 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 ">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2  ">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-md text-center px-1 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
