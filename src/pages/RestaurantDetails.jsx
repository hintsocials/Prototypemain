import React from "react";
import loveIcon from "../assets/icons/Love.svg";
import avatarIcon from "../assets/icons/avatar.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import clockIcon from "../assets/icons/clock.svg";
import locationIcon from "../assets/icons/location.svg";
import shareIcon from "../assets/icons/shareIcon.svg";
import ticketIcon from "../assets/icons/ticket.svg";
import hotelImg from "../assets/images/hotelImg.png";


const RestaurantDetails = () => {
  const count = 159;
  const handleShare = () => {
    // implement share option.
  };
  return (
    <div className=" h-screen overflow-auto bg-black">
      <section className=" mx-6 my-10">
        <div className=" flex justify-between items-center">
          <h1 className="  text-2xl font-medium font-['Lufga'] text-[#D9D9D9]">
            Demon Slay Club @ Pune
          </h1>
          <div>
            <button onClick={handleShare}>
              <img
                src={shareIcon}
                alt=" share Icon"
                className=" translate-y-[2px] p-2"
              />
            </button>
          </div>
        </div>
        <div className=" mt-5 mb-8 h-60 w-full rounded-[10px] overflow-hidden items-center justify-center flex">
          <img
            src={hotelImg}
            alt=" restaurant image"
            className=" w-full h-fit"
          />
        </div>
        <div className=" flex justify-start  gap-4">
          <img
            src={locationIcon}
            alt="location icon"
            className=" -translate-y-2"
          />
          <span className=" text-[15px] font-thin font-['Lufga'] lowercase text-[#D9D9D9]">
            FC ROAD, PUNE, ganesh palace like the whole detailed map addresss
            and evrrything
          </span>
        </div>
        <div className=" bg-gradient-to-r from-[#845CFC57] to-[#3F21706B] h-[86px] rounded-2xl mt-[18px] mb-6">
          <div className=" flex gap-3  px-4 py-2">
            <img src={avatarIcon} alt="avatar icon" />
            <span className=" text-[15px] font-thin font-['Lufga'] text-[#D9D9D9]">
              going?{" "}
              <span className=" text-[15px] font-medium font-['Lufga']  text-[#845CFC]">
                {count}{" "}
              </span>
              people already in the venue
            </span>
          </div>
        </div>

        <section>
          <div className=" grid grid-cols-3 border-b border-[#845CFC] border-opacity-70 pb-4">
            <div className="  flex justify-center border-r  border-[#845CFC] flex-col items-center text-center py-5">
              <h3 className=" text-xl font-medium font-['Lufga'] text-[#D9D9D9]">
                24+
              </h3>
              <div className=" text-center text-white text-xs font-medium rounded-full px-3 py-[5px] bg-[#845CFC] mt-2 border-opacity-70">
                Best for drink
              </div>
            </div>
            <div className="  flex gap-1 justify-center flex-col items-center text-center border-r border-[#845CFC] border-opacity-70">
              <img src={clockIcon} alt=" clock icon" className=" w-5 h-5" />
              <h3 className=" text-[#D9D9D9] text-xs font-medium font-['Lufga']">
                Peak Hours
              </h3>
              <span className=" text-[#D9D9D9] text-[15px] font-thin font-['Lufga'] ">
                7pm - 8pm
              </span>
            </div>
            <div className=" flex gap-3 justify-center flex-col items-center text-center">
              <img
                src={calendarIcon}
                alt="calendar icon"
                className=" w-5 h-5"
              />
              <span className=" text-[#D9D9D9] text-[15px] font-thin font-['Lufga']">
                Today
              </span>
            </div>
          </div>
          <div className=" mt-6 flex justify-center gap-5">
            <div className=" relative">
              <div className=" absolute text-center mt-3 leading-[20px] ">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  10% off on first couple beer.
                </span>
              </div>
              <div className=" absolute pl-3 bottom-1 text-center">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  ABC123JSH
                </span>
              </div>
              <img src={ticketIcon} alt="ticket icon" />
            </div>
            <div className=" relative">
              <div className=" absolute text-center mt-3 leading-[20px] ">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  10% off on first couple beer.
                </span>
              </div>
              <div className=" absolute pl-3 bottom-1 text-center">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  ABC123JSH
                </span>
              </div>
              <img src={ticketIcon} alt="ticket icon" />
            </div>
            <div className=" relative">
              <div className=" absolute text-center mt-3 leading-[20px] ">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  10% off on first couple beer.
                </span>
              </div>
              <div className=" absolute pl-3 bottom-1 text-center">
                <span className=" text-center text-white text-[13px] font-normal font-['Lufga'] leading-3 ">
                  ABC123JSH
                </span>
              </div>
              <img src={ticketIcon} alt="ticket icon" />
            </div>
          </div>
          <div className=" mt-9 mb-3">
            <div className=" flex justify-between gap-3">
              <button className=" w-full h-14 rounded-full font-medium text-base text-white bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B]">
                Book a table
              </button>
              <button className=" h-14 w-[70px] bg-[#845CFC] bg-opacity-20 rounded-full flex justify-center items-center">
                <img
                  src={loveIcon}
                  alt=" love icon"
                  className=" translate-y-[2px]"
                />
              </button>
            </div>
          </div>
          <h3 className=" text-center text-[#D9D9D9] text-base font-normal font-['Lufga'] leading-relaxed tracking-tight ">
            Become a VIP to see other interested profiles?{" "}
            <span className=" text-[#854CFC]">Apply here.</span>
          </h3>
        </section>
      </section>
    </div>
  );
};

export default RestaurantDetails;
