import React from "react";
import settingsgradient from "../assets/images/settings-gradient.png";
import rightArrow from "../assets/icons/rightarrow.svg";

const Settings = () => {
  return (
    <div className=" bg-black h-screen overflow-auto relative">
      {/* Gradient Images for background. */}
      <div className="absolute inset-0 z-0 -translate-y-16">
        <img
          src={settingsgradient}
          alt="settings gradient"
          className="w-full h-fit object-cover translate-y-24"
        />
      </div>
      <section className=" m-11 absolute inset-x-0">
        <h2 className="text-zinc-300 text-[32px] font-medium font-['Lufga'] mb-11">
          Settings
        </h2>
        <div>
          <h3 className="text-white text-2xl font-medium font-['Lufga'] mb-7">
            Notifications Settings
          </h3>
          <div className=" flex flex-col gap-5">
            <span className="  text-white text-base font-normal font-['Lufga']">
              New Messages
            </span>
            <span className="  text-white text-base font-normal font-['Lufga']">
              New Matches
            </span>
            <span className="  text-white text-base font-normal font-['Lufga']">
              Hint Events
            </span>
            <span className="  text-white text-base font-normal font-['Lufga']">
              Offers
            </span>
          </div>
        </div>
        <div className=" flex justify-between mt-9">
          <h3 className="text-white text-2xl font-medium font-['Lufga']">
            Contacts and FAQs
          </h3>
          <img src={rightArrow} alt="left arrow" />
        </div>
        <div className=" flex justify-between mt-9">
          <h3 className="text-white text-2xl font-medium font-['Lufga']">
            Security and Privacy
          </h3>
          <img src={rightArrow} alt="left arrow" />
        </div>

        <div className=" mt-5 flex justify-center items-center inset-x-0">
          <h1 className="text-center text-white text-[40px] font-normal font-['Lufga']">
            hint
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Settings;
