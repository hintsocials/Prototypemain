import React from "react";
import premiumgradient from "../assets/images/premium-gradient.png";
import check from "../assets/icons/check.svg";

const Premium = () => {
  return (
    <div className=" bg-black h-screen overflow-auto relative">
      {/* Gradient Images for background. */}
      <div className="absolute inset-0 z-0 -translate-y-16">
        <img
          src={premiumgradient}
          alt="premium gradient"
          className="w-full h-full object-cover -translate-y-16"
        />
      </div>
      <section className=" m-[46px] absolute inset-x-0">
        {/* Premium Card */}
        <div className=" text-center items-center flex flex-col justify-center premium-custom-gradient rounded-[20px]">
          <div className=" pt-6 px-6">
            <h3 className=" text-white text-base font-semibold">Premium</h3>
            <span className=" text-center text-white text-xs font-medium tracking-tighter">
              Unlock all of our premium features to be
            </span>
            <span className=" text-center text-white text-xs font-medium tracking-tighter ">
              in complete control of your experience
            </span>
          </div>
          <div className=" w-full">
          <div className=" bg-white rounded-[13.50px] mt-4 py-1 mx-6 mb-8">
            <span className=" text-center text-black text-xs font-bold">
              {" "}
              One time payment @ 799
            </span>
          </div>
          </div>
        </div>

        {/* What you get? */}
        <div className=" my-8 px-[10px] ">
          <h2 className=" text-center text-white text-2xl font-medium font-['Lufga']">
            What you get?
          </h2>
          <div className=" flex flex-col gap-[15px] mt-7">
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                Spotlight Experience
              </span>
              <img src={check} alt="check mark" />
            </div>
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                3 roses per week
              </span>
              <img src={check} alt="check mark" />
            </div>
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                Unlock 2 profiles
              </span>
              <img src={check} alt="check mark" />
            </div>
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                Unlimited Swipes
              </span>
              <img src={check} alt="check mark" />
            </div>
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                See who likes you
              </span>
              <img src={check} alt="check mark" />
            </div>
            <div className=" flex justify-between">
              <span className=" text-white text-base font-medium font-['Lufga']">
                Speed dating prompts
              </span>
              <img src={check} alt="check mark" />
            </div>
          </div>
        </div>
        <div>
          <button className=" bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga'] ">
            Buy Now
          </button>
        </div>
        <div className=" flex gap-3 mt-12 mb-20">
          <div className="premium-border-gradient-rounded   rounded-[20px] py-3 px-3 flex flex-col gap-3">
            <h3 className=" text-white text-base font-semibold ">Access to the buffet list</h3>
            <p className=" text-white text-xs font-medium">Unlock all of our premium features to be in complete control of your experience</p>
            <button className=" w-full py-3 bg-[#845CFC] rounded-[13.50px]  text-center text-white text-xs font-medium ">@199/week</button>
          </div>
          <div className=" premium-border-gradient-rounded  rounded-[20px] py-3 px-3 flex flex-col gap-3">
            <h3 className=" text-white text-base font-semibold ">Access to the buffet list</h3>
            <p className=" text-white text-xs font-medium">Unlock all of our premium features to be in complete control of your experience</p>
            <button className=" w-full py-3 bg-[#845CFC] rounded-[13.50px]  text-center text-white text-xs font-medium ">@199/week</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Premium;
