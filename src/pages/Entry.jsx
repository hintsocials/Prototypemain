import React from "react";
import homeimage from "../assets/images/homeimage.png";
import homestyle from "../assets/images/homestyle.png";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

  const handleTap = () => {
    navigate("/hotel")
  }
  return (
    <div className=" bg-black h-screen relative overflow-hidden" onClick={handleTap}>
      <div className="absolute inset-0 z-0">
        <img
          src={homeimage}
          alt="homeimage"
          className="w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 ">
        <img
          src={homestyle}
          alt="homestyle"
          className="w-full h-full object-cover translate-y-24"
        />
      </div>
      <div className="flex flex-col gap-2 absolute inset-x-0 justify-center bottom-0 mb-20">
        <h1 className=" text-white text-center text-[40px] text-4xl font-medium font-['Lufga']">
          Start Of <br /> Something <br />
          Great!
        </h1>
        <p className=" opacity-80 text-center text-white text-xl font-bold taps">
          Tap the screen to Proceed
        </p>
      </div>
    </div>
  );
};

export default Entry;
