// Unused

import React from "react";
import { Inter } from "next/font/google";

const InterFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Menus: React.FC = () => {
  return (
    <div
      className={`list-none hidden lg:flex justify-self-end gap-8 ${InterFont.className}`}
    >
      <li className="transition cursor-pointer delay-75 border-b-2 border-transparent hover:border-orange-600">
        About
      </li>
      <li className="transition cursor-pointer delay-75 border-b-2 border-transparent hover:border-orange-600">
        Experience
      </li>
      <li className="transition cursor-pointer delay-75 border-b-2 border-transparent hover:border-orange-600">
        Thoughts
      </li>
      <li className="transition cursor-pointer delay-75 border-b-2 border-transparent hover:border-orange-600">
        Contact
      </li>
    </div>
  );
};

export default Menus;
