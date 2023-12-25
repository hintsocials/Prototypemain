import React, { useState, useEffect } from "react";
import axios from "axios";
import profilebasicgradient from "../assets/images/profile-basic-gradient.png";
import settings from "../assets/icons/settings.svg";
import AddButton2 from "../assets/icons/AddButton2.svg";
import rightarrow from "../assets/icons/rightarrow.svg";


import { Link,useNavigate } from "react-router-dom";
import GenderSelection from "../components/GenderButton";
import Interest from "../components/Interest";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [selectedGender, setSelectedGender] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleAddPhoto = () => {
    // For adding more images.
    navigate("/retake")
  };

  const handleSendInvites = () => {
    //For Sending Invites.
  };

  const handleToggleInstagram = () => {
    //For Handling Instagram.
  };

  const handleToggleSpotify = () => {
    //For Handling Spotify.
  };

  const handleWork = () => {
    // Handle Work.
  };
  const handleEducation = () => {
    // Handle Education.
  };
  const handleGender = () => {
    // Handle Gender.
  };
  const handleHeight = () => {
    // Handle Height.
  };
  const handleStarSign = () => {
    // Handle Start sign.
  };
  const handlePersonalityType = () => {
    // Handle Personality.
  };
  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("https://hintserver.onrender.com/api/fetch-user-details", { withCredentials: true });
        const { success, user } = response.data;

        if (success) {
          // Update state with user details
          console.log(user);
          setUserDetails(user);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts
  return (
    <div className=" relative bg-black h-screen overflow-auto">
      {/* Gradient Images for background. */}
      <div className=" absolute z-0">
        <img
          src={profilebasicgradient}
          alt="profilebasicgradient"
          className="w-full h-full object-cover"
        />
      </div>
      <section className=" m-8 absolute inset-x-0">
        {/* Settings Button */}
        <div className=" flex justify-end">
          <Link to="/settings">
            <img src={settings} alt="settings" className=" w-[22px] h-[22px]" />
          </Link>
        </div>

        {/* For Profile Images */}
        <div className=" justify-center items-center flex flex-col">
          <div className=" flex gap-4 justify-center items-center">
            <div className=" w-[83px] h-[83px] rounded-full bg-stone-900 flex justify-center items-center profile-border-gradient">
              {/* Use the user details for profile image one */}
              <img src={userDetails.profileImageOne} alt="profile image one" />
            </div>
            <div className=" w-[83px] h-[83px] rounded-full bg-stone-900 flex justify-center items-center profile-border-gradient">
              {/* Use the user details for profile image two */}
              <img src={userDetails.profileImageTwo} alt="profile image two" />
            </div>
          </div>
          <span className=" text-white text-sm font-normal font-['Lufga'] mt-3 mb-1">

          </span>
          <span className="  text-white text-2xl font-bold font-['Lufga']">
            {userDetails.name} {/* Render user's name */}
            <span className=" text-white text-sm font-normal font-['Lufga']">
              {userDetails.age} {/* Render user's age */}
            </span>
          </span>
        </div>

        {/*Invite and send Invites. */}
        <div className=" mt-8">
          <div>
            {/* <h3 className=" text-white text-2xl font-medium font-['Lufga']">
              Invites
            </h3> */}
            {/* <span className=" text-white text-sm font-normal font-['Lufga'] mt-3 mb-1">
              Edit live picture
            </span> */}
          </div>
          {/* ... (rest of the component) */}
        </div>

        {/*  For Add more Pictures */}
        {/* ... (rest of the component) */}

        {/* Gender */}
        <div>
          <div className=" mb-4">
            <span className=" text-white text-2xl font-medium font-['Lufga']">
              Gender
            </span>
          </div>
          {/* Use the user details for gender selection */}
          <GenderSelection
            setSelectedGender={setSelectedGender}
            selectedGender={selectedGender}
            gender={userDetails.gender}
          />
        </div>

        {/* For Edit Interest. */}
      <div className="mt-11">
        <div className="mb-4">
          <span className="text-white text-2xl font-medium font-['Lufga']">
            Edit Interest
          </span>
        </div>
        {/* Use the user details for rendering interests */}
        <Interest interests={userDetails.interests} />
      </div>

       {/* For Bio */}
      <div className="mt-11">
        <h3 className="text-white text-2xl font-medium font-['Lufga']">
          My Bio
        </h3>
        <span className="text-white text-sm font-normal font-['Lufga']">
          Write a one-liner fun intro
        </span>
        <div className="mt-6">
          {/* Render the user's bio without the option to edit */}
          <textarea
            rows={3}
            cols={40}
            value={userDetails.bio}
            readOnly
            className="py-3 px-3 bg-[#202022] text-white text-base font-normal font-['Lufga'] w-full h-fit rounded-[10px] outline-none"
          />
        </div>
      </div>

      {/* For My Basics */}
      <div className="mt-11">
        <h3 className="text-white text-2xl font-medium font-['Lufga']">
          My Basics
        </h3>
        <div className="mt-7 flex flex-col gap-3">
          {/* Work */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Work</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current work information */}
              <span className="text-white text-sm font-normal">
                {userDetails.work || 'Not provided'}
              </span>
              {/* Button to edit work information */}
              {/* <button
                onClick={handleWork}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>

          {/* Education */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Education</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current education information */}
              <span className="text-white text-sm font-normal">
                {userDetails.education || 'Not provided'}
              </span>
              {/* Button to edit education information */}
              {/* <button
                onClick={handleEducation}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>

          {/* Gender */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Gender</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current gender information */}
              <span className="text-white text-sm font-normal">
                {userDetails.genderr || 'Not provided'}
              </span>
              {/* Button to edit gender information */}
              {/* <button
                onClick={handleGender}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>

          {/* Height */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Height</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current height information */}
              <span className="text-white text-sm font-normal">
                {userDetails.height || 'Not provided'}
              </span>
              {/* Button to edit height information */}
              {/* <button
                onClick={handleHeight}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>

          {/* Star sign */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Star sign</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current star sign information */}
              <span className="text-white text-sm font-normal">
                {userDetails.starSign || 'Not provided'}
              </span>
              {/* Button to edit star sign information */}
              {/* <button
                onClick={handleStarSign}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>

          {/* Personality type */}
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-zinc-300 rounded-[7px]"></div>
              <span className="text-white text-sm font-medium">Personality type</span>
            </div>
            <div className="flex gap-2">
              {/* Display the current personality type information */}
              <span className="text-white text-sm font-normal">
                {userDetails.personalityType || 'Not provided'}
              </span>
              {/* Button to edit personality type information */}
              {/* <button
                onClick={handlePersonalityType}
                className="flex gap-2 text-center items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Edit</span>
                <img src={rightarrow} alt="right arrow" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

          {/* Premium */}
      <div className="my-9 text-center">
        <Link to="/premium">
          <button className="mb-[6px] bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga']">
            Join Premium
          </button>
        </Link>
      </div>
      
      </section>

      
    </div>
    
  );
};

export default Profile;
