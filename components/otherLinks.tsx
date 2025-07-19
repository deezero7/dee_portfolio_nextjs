import Work2d from "../src/app/otherLinks/work2d/page";
import { Button } from "@/components/ui/button";

const otherLinks = () => {
  return (
    <div className="flex flex-col  my-12 border-2 border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 ">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-left border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2">
          Other Works
        </h2>
        <div className="flex flex-col gap-1 sm:gap-6 px-2 sm:px-6 ">
          <a
            href="/otherLinks/work2d"
            className="text-green-500 hover:underline text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-wrap items-center gap-2 md:flex-row ">
              <Button>2-D Work</Button>
            </div>
          </a>
          <a
            href="/otherLinks/work3d"
            className="text-green-500 hover:underline text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Button>3-D Work</Button>
            </div>
          </a>
          <a
            href="https://leetcode.com/u/Deependra_singh_dev/"
            className="text-green-500 hover:underline text-sm "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Button>LeetCode</Button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default otherLinks;
