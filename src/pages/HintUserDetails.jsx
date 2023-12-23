import React, { useState } from "react";
import Image from "../assets/images/Image.png";
import HotelImage from "../assets/images/hotelImg.png";
import BottomNav from "../components/BottomNav";
import ChatButton from "../assets/icons/Hint.svg";


import Verify from "../assets/icons/Verify.svg";
import Like from "../assets/icons/Like.svg";

import { useUser } from "../context/UserContext";

const HintUserDetails = () => {
  const { userData } = useUser();

  const [like, setLike] = useState(5);
  const handleLike = () => {
    setLike(like + 1);
  };

  const profiles = [
    {
      profileImageOne: HotelImage,
      name: "John Doe",
      age: 25,
    },
    {
      profileImageOne: Image,
      name: "Jane Smith",
      age: 28,
    },
    {
      profileImageOne: HotelImage,
      name: "Alex Johnson",
      age: 22,
    },
    {
      profileImageOne: HotelImage,
      name: "Emily Brown",
      age: 30,
    },
    {
      profileImageOne: HotelImage,
      name: "Michael Davis",
      age: 27,
    },
    {
      profileImageOne: HotelImage,
      name: "Sophia Lee",
      age: 26,
    },
    {
      profileImageOne: HotelImage,
      name: "William White",
      age: 29,
    },
    {
      profileImageOne: HotelImage,
      name: "Olivia Taylor",
      age: 24,
    },
    {
      profileImageOne: HotelImage,
      name: "Daniel Miller",
      age: 31,
    },
    {
      profileImageOne: HotelImage,
      name: "Ella Moore",
      age: 23,
    },
  ];

  return (
    <div className=" h-screen overflow-auto bg-black ">
      {/* User Details Page */}
      <section className=" relative h-screen overflow-hidden">
        <img src={Image} alt="User Profile Image" className=" w-full " />
        <div className=" absolute bottom-[10%] my-7 mx-6 z-10">
          <div className=" flex gap-3">
            <div className=" w-fit  h-[27px] px-5 bg-violet-500 rounded-[34px]">
              <span className="  text-white text-xs font-normal ">
                {userData.statuses[0]}
              </span>
            </div>
            <div className=" flex gap-1">
              <img src={Like} alt="Like button" />

              <span className=" text-white text-lg font-bold font-['Lufga'] translate-y-[2px]">
                {like}
              </span>
            </div>
          </div>
          <div className=" -mb-1 mt-1 mx-2 flex gap-2">
            <span className="text-white text-2xl font-bold ">
              {profiles[0].name[0]}, {profiles[0].age}
            </span>

            <img src={Verify} alt="Verfiy button" />
          </div>
          <div className=" mx-2">
            <span className=" text-stone-300 text-base font-normal ">
              {userData.qualification}Mca
              {", "}
            </span>
            <span className=" text-stone-300 text-base font-normal ">
              {userData.gender === "Women" ? "Female" : ""}
              {userData.gender === "Men" ? "Male" : ""}
              {userData.gender === "Others" ? "Others" : ""}
              Female
            </span>
          </div>
          {/* <div className=" absolute inset-0 -z-10">
            <div className=" w-full h-full bg-opacity-80 blur-xl bg-violet-900"></div>
          </div> */}
        </div>
      </section>

      {/*  Details Screen - 2 */}

      <section className=" relative h-screen overflow-hidden">
        <img src={Image} alt="User Profile Image" />
        <div className=" absolute bottom-0 bg-black w-full">
          <div className=" flex flex-col gap-8 m-7">
            {/* Description */}
            <div className=" grid gap-3">
              <span className=" text-[#835CFC] text-xl font-medium font-['Lufga']">
                Description
              </span>
              <p className=" text-white text-2xl font-normal font-['Lufga']">
                I am a fitness freak smple down to earth.
              </p>
            </div>
            {/* Interests */}
            <div className=" grid gap-3">
              <span className=" text-[#835CFC] text-xl font-medium font-['Lufga']">
                Interests
              </span>
              {/* Map throught the Interest */}
              <div className=" px-3.5 py-[5px] w-fit rounded-[20px] border border-zinc-300 justify-center items-center gap-2.5 ">
                <span className=" text-white text-center text-base font-normal font-['Lufga']">
                  Fitness
                </span>
              </div>
            </div>
            {/* Basics */}
            <div className=" grid gap-3">
              <span className=" text-[#835CFC] text-xl font-medium font-['Lufga']">
                Basic
              </span>
              {/* Map throught the Basics */}
              <div className=" px-3.5 py-[5px] w-fit rounded-[20px] border border-zinc-300 justify-center items-center gap-2.5 ">
                <span className=" text-white text-center text-base font-normal font-['Lufga']">
                  Relationship
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Screen - 3 */}
      <section className=" relative h-screen overflow-hidden">
        <img src={Image} alt="User Profile Image" />
        <div className=" absolute bottom-0 w-full bg-gradient-to-t from-[#4B0E83] via-[#280749] to-[#11051E]">
          <div className="  mx-6 mb-2 mt-16  ">
            <div className=" pl-5 mb-14">
              <span className=" text-[#845CFC] text-xl font-medium font-['Lufga']">
                What are you looking for?
              </span>
              {/* Render the Content here. */}
              <p className=" pt-2 text-white text-2xl font-normal font-['Lufga']">
                A guy nice to treat me well and looks towards life through
                positive lens.
              </p>
            </div>
            <div className=" flex gap-2 mb-4 mt-3">
              <button className=" w-full py-2.5 bg-violet-500 rounded-[34px] backdrop-blur-[10px] gap-2.5  text-white text-base font-medium font-['Lufga']">
                Send a hint!
              </button>
              <button
                onClick={handleLike}
                className=" p-3 bg-[#5B3E79] rounded-full  justify-center items-center"
              >
                <img src={ChatButton} alt="Hint svg" className=" w-12" />
              </button>
            </div>
            <BottomNav />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HintUserDetails;
