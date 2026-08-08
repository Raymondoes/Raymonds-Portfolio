import React from "react";
import { BiEnvelope } from "react-icons/bi";
import {
  FaMapMarkerAlt,
  FaCoffee,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Connect: React.FC = () => {
  return (
    // Changed grid-cols to flex-col so heading/coffee stays full width on top
    // Added 'relative' so the absolute footer positions correctly
    <div
      className={`w-full gap-8 flex flex-col mt-10 bg-stone-800/50 backdrop-blur-xl px-6 pt-10 pb-16 rounded-2xl relative`}
    >
      {/* Top Section: Heading and Coffee text spans full width */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="xl:text-4xl text-2xl font-bold">Get in Touch</h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <p className="text-xl">
            Open for freelance opportunities. Or lets just have a
          </p>
          <FaCoffee className="fill-amber-900 size-10" />
          <p className="text-xl">and chat.</p>
        </div>
      </div>

      {/* Bottom Section: Splits into 2 columns on desktop */}
      <div className="grid md:grid-cols-2 gap-8 w-full mt-4 items-center justify-center">
        {/* Left Column: Contact details stacked vertically */}
        <div className="flex flex-col gap-4 items-center md:items-end md:pr-8">
          {/* Location Item */}
          <div className="flex gap-3 items-center">
            <FaMapMarkerAlt className="fill-red-500 size-6 shrink-0" />
            <p className="text-xl">Medan, Indonesia</p>
          </div>

          {/* Email Item */}
          <div className="flex gap-3 items-center">
            <BiEnvelope className="fill-blue-500 size-6 shrink-0" />
            <p className="text-xl">marioboygamingyt@gmail.com</p>
          </div>
        </div>

        {/* Right Column: Social Icons row */}
        <div className="flex gap-5 justify-center md:justify-start md:border-l md:border-stone-400/50 md:pl-8 py-2">
          <a
            href="https://www.linkedin.com/in/raymond-wongso-5505b4363/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:scale-110 active:scale-95 size-9 transition text-blue-500" />
          </a>
          <a
            href="https://github.com/Raymondoes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:scale-110 active:scale-95 size-9 transition text-white" />
          </a>
          <a
            href="https://www.instagram.com/aureliusraymond/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:scale-110 active:scale-95 size-9 transition text-pink-500" />
          </a>
        </div>
      </div>

      {/* Absolute Footer */}
      <div className="absolute left-0 right-0 bottom-4">
        <p className="text-center text-stone-400 text-sm">
          Created Rightfully by Raymond
        </p>
      </div>
    </div>
  );
};

export default Connect;
