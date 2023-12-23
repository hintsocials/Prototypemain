import React, { useState, useEffect } from "react";
import hotelgradient from "../assets/images/hotelgradient.png";
import hotelImg from "../assets/images/hotelImg.png";
import hotelLogo from "../assets/images/hotelLogo.png";

import { useNavigate } from "react-router-dom";

const Hotel = () => {
  const [hotelImage, setHotelImage] = useState(hotelImg);
  const [hotelLogoImage, setHotelLogoImage] = useState(hotelLogo);
  const [userCount, setUserCount] = useState("30");

  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/login");
  };

  useEffect(() => {
    animateCounting();
  }, []);

  const animateCounting = () => {
    const targetNumber = userCount; 
    const duration = 2000;

    const increment = targetNumber / (duration / 16);

    let currentNumber = 0;
    const intervalId = setInterval(() => {
      currentNumber += increment;
      setUserCount(Math.round(currentNumber));

      if (currentNumber >= targetNumber) {
        clearInterval(intervalId);
        setUserCount(targetNumber);
      }
    }, 16);
  };

  return (
    <div className="bg-black h-screen overflow-hidden relative">
      {/* Dynamic background for hotel image to be done later.*/}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelImage}
          alt="hotel image"
          className="w-full  object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={hotelgradient}
          alt="hotelgradient"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" justify-center items-center inset-x-0 absolute">
        <h1 className=" text-center text-white text-[40px] font-normal font-['Lufga'] mt-[56px]">
          hint
        </h1>
      </div>

      <div>{/* for hotel logo and hint user count. */}</div>

      <div className=" flex flex-col justify-end items-center ">
        <div className=" absolute bottom-0 mb-[78px]">
          <div className=" relative flex justify-center items-center mb-1">
            <img
              src={hotelLogoImage}
              alt="Hotel Logo Image"
              className="w-[177px] h-24"
            />
          </div>
          <div className=" flex justify-center flex-col gap-6 mb-10">
            <h3 className="text-center text-zinc-300 text-[10px] font-bold font-['Lufga']">
              BAR & KITCHEN
            </h3>

            <p
              id="userCount"
              className="text-center text-white text-2xl font-bold font-['Lufga']"
            >
              {userCount}+ hint users
            </p>
          </div>

          {/* Enter Button */}
          <button
            onClick={handleEnter}
            className=" w-[173px] h-[55px] px-[60px] py-2.5 bg-violet-500 rounded-[34px] text-white text-base font-medium"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;


