import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full justify-center items-center px-4">
      <Image
        src="/assets/rainin-icon.png"
        alt="Rainin' Icon"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Navbar;
