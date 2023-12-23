import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";



import InfoGradientTwo from "../assets/images/info-gradient2.svg";
import SwipeButton from "../components/SwipeButton";
import Interest from "../components/Interest";
import Status from "../components/Status";
import GenderPreferedSelection from "../components/GenderPreference";
import AgeSlider from "../components/AgeSlider";

const PersonalInfoTwo = () => {
  const [preferedGender, setPreferedGender] = useState("");
  const [selectAllGenders, setSelectAllGenders] = useState(false);
  const [age, setAge] = useState([27, 45]);
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();

  const handleSave = () => {
    // User input Validatin to be done.
    const userData = {
      preferedGender: preferedGender,
      preferedAge: {
        minAge: age[0],
        maxAge: age[1],
      },

    };

    updateUser(userData);

    console.log(userData);
    navigate("/info-3" , { selectedInterests: userData.interests });
  };
  
  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handleToggleAllGenders = () => {
    setSelectAllGenders(!selectAllGenders);
    setPreferedGender(selectAllGenders ? [] : ["Men", "Women", "Other"]);
  };


  return (
    <div className=" bg-black overflow-auto h-screen relative ">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 ">
        <img
          src={InfoGradientTwo}
          alt="homestyle"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="m-[32px] absolute inset-x-0">
        <div className=" flex flex-col gap-5">
          <h3 className=" text-white -my-2 text-[32px] font-normal font-['Lufga']">
            pick your interest.
          </h3>
          <p className="opacity-70 text-white text-base font-normal font-['Lufga']">
            Personalize the experience of finding your suitable partner.
          </p>
          {/*  Interests */}
          <div>
            <Interest/>
          </div>
          <p className="text-white text-sm font-normal font-['Lufga']">
            Pick any five, you will be able to change this later
          </p>
          {/*  Status */}
          <div className=" mt-9 w-full bg-gradient-to-r from-[#544481]  to-rgba([#3F2170], 0.04) rounded-[34px]  backdrop-blur-[10px] flex-col px-4 py-6 gap-5 border-2 border-violet-950 inline-flex">
            <h3 className="text-white text-[32px] font-normal font-['Lufga']">
              Choose your status.
            </h3>
            <Status />
          </div>
          {/* Choose your Preferences */}
          <div className="flex flex-col mt-9 ">
            <h3 className=" text-white text-[32px] font-normal font-['Lufga'] ">
              Choose your preferences.
            </h3>
            <GenderPreferedSelection
              setPreferedGender={setPreferedGender}
              preferedGender={preferedGender}
              selectAllGenders={selectAllGenders}
              setSelectAllGenders={handleToggleAllGenders}
            />
          </div>

          {/* Age slider to select the preference of the age limit. */}
          <div className=" mt-8 mb-11">
            <AgeSlider handleAgeChange={handleAgeChange} age={age}/>
          </div>

          {/* Swipe Button (Not exactly Swipe.) */}
          <SwipeButton Steps="Step 2 out of 3" handleSave={handleSave} />
        </div>
        <div className=" text-center my-2 mb-16 ">
          <p className="text-white text-xs font-medium font-['Lufga']">
            This all will be shown on your profile.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfoTwo;
