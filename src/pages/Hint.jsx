import React from "react";
import profilegradient from "../assets/images/profile-gradient.png";
import ChatButton from "../assets/icons/Hint.svg";
import BottomNav from "../components/BottomNav";
import profilebg from "../assets/images/profile-bg.png";


import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Hint = () => {
  const { userData } = useUser();
  console.log(userData);

  return (
    <div className=" bg-black overflow-auto h-screen relative ">
      {/* Profile-gradient */}
      <div className="fixed inset-0 z-0">
        <img
          src={profilebg}
          alt="profile-gradientone"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Background Profile Picture  */}
      <div className=" fixed inset-0 z-0  ">
        <img
          src={userData.profileImageOne}
          alt="User profile photo background"
          className="w-full h-full object-cover opacity-50 blur-[10px]"
        />
      </div>
      {/* Gradient */}
      <div className="fixed inset-0 z-0 ">
        <img
          src={profilegradient}
          alt="profile-gradienttwo"
          className="w-full h-full object-cover"
        />
      </div>
      <section className=" m-6 inset-x-0 absolute">
        <div className=" h-80 w-full profile-custom-gradient rounded-[34px] outline outline-2 outline-[#5A3FAB]">
          {/* Profile picture */}
          <div className=" flex justify-center items-center">
            <div className="w-[83px] h-[83px] bg-slate-900 mt-20 bg-opacity-10 rounded-full overflow-hidden items-center">
              <img src={userData.profileImageOne} alt="User profile photo" />
            </div>
          </div>
          <div className=" mt-12 ml-7">
            <div className=" w-fit  h-[27px] px-5 bg-black rounded-[34px]">
              <span className="  text-white text-xs font-normal ">
                {userData.statuses[0]}
              </span>
            </div>
            {/* <div>  For the LIKE/FIRE button and count.</div> */}
          </div>
          <div className=" ml-7">
            <span className="text-white text-xl font-bold ">
              {userData.name}{", "} {userData.age}
            </span>
            
          </div>
          <div className=" ml-7">
            <span className="w-[375px] text-stone-300 text-base font-normal ">
              {userData.qualification},{" "}
            </span>
            <span className="w-[375px] text-stone-300 text-base font-normal ">
            {userData.gender === "Women" ? "Female" : ""}
              {userData.gender === "Men" ? "Male" : ""}
              {userData.gender === "Others" ? "Others" : ""}
            </span>
          </div>
        </div>
        {/* User Details */}
        <div className=" flex gap-7 flex-col mt-12">
          {/* For Description */}
          <div>
            <span className="text-center text-violet-500 text-xl font-medium font-['Lufga']">
              Description
            </span>
            <dl className=" text-white text-2xl font-normal font-['Lufga']">
              {userData.bio}
            </dl>
          </div>
          {/* For Interests */}
          <div>
            <span className="text-center text-violet-500 text-xl font-medium font-['Lufga']">
              Interests
            </span>
            <div className=" flex flex-wrap">
              {userData.interests.map((interest) => (
                <div key={interest} className="inline-flex">
                  <div className="mt-[18px] mr-2 px-3 py-[5px] border-white border-[2px] rounded-full backdrop-blur-[9.17px]">
                    <span className="text-center text-white text-base font-medium font-['Axiforma'] leading-[22.93px]">
                      {interest}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* For Basics */}
          <div className=" pb-56">
            <span className="text-center text-violet-500 text-xl font-medium font-['Lufga']">
              Basics
            </span>
            <div className=" flex flex-wrap">
              {userData.statuses.map((status) => (
                <div key={status} className="inline-flex">
                  <div className="mt-[18px] mr-2 px-3 py-[5px] border-white border-[2px] rounded-full backdrop-blur-[9.17px]">
                    <span className="text-center text-white text-base font-medium font-['Axiforma'] leading-[22.93px]">
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        {/* Bottom Nav and send button */}
        <section className=" fixed mb-1 bottom-0 overflow-hidden w-full backdrop-blur-3xl">
          <div className=" mx-6 pt-2">

          <div className=" flex gap-2 mb-2">
            <button className=" w-full h-15  py-2.5 bg-violet-500 rounded-[34px] backdrop-blur-[10px] gap-2.5  text-white text-base font-medium font-['Lufga']">
              Send a hint!
            </button>
            <button className=" p-3 bg-white bg-opacity-20 rounded-full  justify-center items-center">
              <img src={ChatButton} alt="Hint svg" className=" w-12" />
            </button>
          </div>
          <div>
            <BottomNav />
          </div>
          <div className=" justify-center items-center flex mt-2">
            <p className=" text-zinc-300 text-base font-normal font-['Lufga'] leading-relaxed tracking-tight">
              Unlock the full account.{" "}
              <Link to="/premium">
              
              <span className="text-violet-500 text-base font-bold font-['Lufga'] leading-relaxed tracking-tight">
                Click here
              </span>
              </Link>
            </p>
          </div>
          </div>
        </section>
    </div>
  );
};

export default Hint;
