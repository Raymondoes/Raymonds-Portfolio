import React from "react";
import Masthead from "@/components/masthead";
import Navbar from "@/components/navbar";
import Technologies from "@/components/technologies";
import Thoughts from "@/components/thoughts";
import Connect from "@/components/connect";
import { Inter } from "next/font/google";

const InterFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/*
will add a Background and make this quite similar to the Rainin' Soft website
*/

const Home: React.FC = () => {
  return (
    <div className={`${InterFont.className} xl:px-10 px-3`}>
      <Navbar />
      <Masthead />
      <Technologies />
      <Thoughts />
      <Connect />
    </div>
  );
};

export default Home;
