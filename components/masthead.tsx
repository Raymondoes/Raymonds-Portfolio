import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Masthead: React.FC = () => {
  return (
    <div className="gap-5 text-white min-h-screen content-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 -z-10 w-full h-full object-cover bg-neutral-950"
      >
        <source src="/assets/masthead-bg.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="grid md:grid-cols-2 bg-stone-800/50 backdrop-blur-xl px-5 py-10 rounded-2xl">
        <Image
          src="/assets/Raymond2.png"
          className="rounded-[500px]"
          width={500}
          height={500}
          alt="Raymond"
        />
        <div className="flex flex-col gap-5 text-center px-5 items-center justify-center">
          <h1 className="xl:text-5xl text-3xl">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent font-bold">
              Raymond
            </span>
            !
          </h1>
          <p className="text-xl xl:text-2xl">
            I am a Software Developer from Medan, a City in the Province of
            North Sumatra in Indonesia. I build Websites, Desktop Applications,
            Mobile Applications, and also deal with Express and the Backend.
          </p>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/raymond-wongso-5505b4363/">
              <FaLinkedin className="hover:shadow-xl active:shadow-xl size-9 transition shadow-blue-600" />
            </a>
            <a href="https://github.com/Raymondoes">
              <FaGithub className="hover:shadow-xl active:shadow-xl size-9 transition shadow-white" />
            </a>
            <a href="https://www.instagram.com/aureliusraymond/">
              <FaInstagram className="hover:shadow-xl active:shadow-xl size-9 transition shadow-purple-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
