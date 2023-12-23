import React from "react";
import listinGradientTop from "../assets/images/buffet-gradientTop.png";
import listingGradientBottom from "../assets/images/buffet-gradientBottom.png";
import ChatButton from "../assets/icons/Hint.svg";
import BottomNav from "../components/BottomNav";
import apiUrl from '../apiConfig';

import { Link } from "react-router-dom";

import Image from "../assets/images/Image.png";

const Listing = () => {
  return (
    <div className=" h-screen overflow-auto bg-black relative">
      {/* Background gradient */}
      <div className=" fixed inset-x-0 -translate-y-28 z-0">
        <img
          src={listinGradientTop}
          alt="listing-gradientone"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <section className=" flex flex-col justify-center gap-5 items-center relative m-11 z-10">
        <div className=" p-3 bg-[#845CFC] rounded-full  justify-center items-center">
          <img src={ChatButton} alt="Hint svg" className=" w-8" />
        </div>
        <div className=" grid gap-1">
          <h2 className=" text-center text-violet-500 text-2xl font-normal font-['Lufga']">
            Interested in you
          </h2>
          <span className=" text-center text-white text-sm font-normal font-['Lufga']">
            Check all the people who liked your profile!
          </span>
        </div>
      </section>

      {/* Listing the Hint User who like your profie. */}

      <section className=" overflow-auto m-6 relative ">
        {/* map through the user who likes(send a hint) to the currentUser */}

        <div className=" h-[73px] flex justify-between items-center">
          <div className=" flex gap-4">
            <div className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
              <img src={Image} alt="Profile Image" className=" w-fit h-fit" />
            </div>
            <div className=" flex flex-col">
              <h3 className=" text-white text-[15px] font-normal font-['Lufga']">
                Name
              </h3>
              <span className=" text-slate-400 text-[13px] font-normal font-['Lufga'] ">
                Send a rose
              </span>
            </div>
          </div>
          <div className="  -translate-y-[10px] ">
            {/* Timestamp of the rose sended. */}
            <span className=" text-slate-400 text-[13px] font-normal font-['Lufga']">
              Just Now
            </span>
          </div>
        </div>

        <div className=" h-[73px] flex justify-between items-center">
          <div className=" flex gap-4">
            <div className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
              <img src={Image} alt="Profile Image" className=" w-fit h-fit" />
            </div>
            <div className=" flex flex-col">
              <h3 className=" text-white text-[15px] font-normal font-['Lufga']">
                Name
              </h3>
              <span className=" text-slate-400 text-[13px] font-normal font-['Lufga'] ">
                Send a rose
              </span>
            </div>
          </div>
          <div className="  -translate-y-[10px] ">
            {/* Timestamp of the rose sended. */}
            <span className=" text-slate-400 text-[13px] font-normal font-['Lufga'] ">
              Just Now
            </span>
          </div>
        </div>

        <div className=" h-[73px] flex justify-between items-center">
          <div className=" flex gap-4">
            <div className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
              <img src={Image} alt="Profile Image" className=" w-fit h-fit" />
            </div>
            <div className=" flex flex-col">
              <h3 className=" text-white text-[15px] font-normal font-['Lufga']">
                Name
              </h3>
              <span className=" text-slate-400 text-[13px] font-normal font-['Lufga'] ">
                Send a rose
              </span>
            </div>
          </div>
          <div className="  -translate-y-[10px] ">
            {/* Timestamp of the rose sended. */}
            <span className=" text-slate-400 text-[13px] font-normal font-['Lufga'] ">
              Just Now
            </span>
          </div>
        </div>
      </section>

      {/* space for the bottom. */}
      <div className=" mb-40"></div>

      {/* Footer - Bottom navigation */}
      <section className=" fixed inset-x-0  bottom-0 backdrop-blur-3xl bg-gradient-to-t from-[#4B0E83] to-black ">
        <div className=" flex gap-2 flex-col mx-6 mb-2 mt-2">
          <Link to="/premium">
            <button className=" mb-[6px] bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga'] ">
              Join Premium
            </button>
          </Link>
          <BottomNav />
        </div>
      </section>
    </div>
  );
};

export default Listing;
