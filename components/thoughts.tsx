import React from "react";

const Thoughts: React.FC = () => {
  return (
    <div
      className={`w-full gap-5 grid text-center mt-10 bg-stone-800/50 backdrop-blur-xl px-5 py-10 rounded-2xl`}
    >
      <h1 className="xl:text-4xl text-2xl">My Thoughts on Software</h1>
      <p className="xl:text-2xl text-xl xl:px-10">
        Software has had a lot of advancements lately, coming from the old times
        where Software looked shiny and unique, and now it all looks modernised
        and sometimes bland. So I thought, why don&apos;t we use a little
        semblance of the past? Without dulling the website entirely, we could
        make it more interesting by adding unique looks and features that
        differs the website from the others. As this website might reflect on my
        thoughts but,{" "}
        <a className="text-blue-600" href="https://www.raininsoft.com/">
          Rainin&apos; Services
        </a>{" "}
        reflects them better, so will your website.
      </p>
    </div>
  );
};

export default Thoughts;
