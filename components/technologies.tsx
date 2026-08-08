import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
} from "react-icons/si";

const tools = [
  { id: 1, name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { id: 2, name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  {
    id: 3,
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },
  { id: 4, name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { id: 5, name: "React Native", icon: SiReact, color: "text-blue-400" },
  { id: 6, name: "Docker", icon: SiDocker, color: "text-blue-600" },
];

const Technologies: React.FC = () => {
  return (
    <div
      className={`w-full gap-5 bg-stone-800/50 backdrop-blur-xl px-5 py-10 rounded-2xl`}
    >
      <h1 className="xl:text-4xl text-2xl text-center">
        Languages & Frameworks
      </h1>
      <div className="grid grid-cols-2 justify-items-center overflow-y-auto">
        {tools.map((tool) => {
          const IconComponent = tool.icon;

          return (
            <div
              key={tool.id}
              className="flex items-center gap-3 p-4 rounded-lg"
            >
              <IconComponent className={`text-3xl ${tool.color}`} />
              <span className="font-medium text-lg text-slate-200">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
