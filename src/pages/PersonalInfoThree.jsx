import React, { useRef, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

import cameragradient from "../assets/images/cameragradient.png";
import AddButton from "../assets/icons/AddButton.svg";
import SwipeButton from "../components/SwipeButton";

// Function to convert Blob URL to base64
const convertBlobToBase64 = async (blobURL) => {
  const response = await fetch(blobURL);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
const PersonalInfoThree = () => {
  const { updateUser } = useUser();

  const fileInputRefOne = useRef(null);
  const fileInputRefTwo = useRef(null);
  const [profileImageOne, setProfileImageOne] = useState(null);
  const [profileImageTwo, setProfileImageTwo] = useState(null);


  const handleSave = async () => {
    // User input Validatin to be done.
    const base64ImageOne = await convertBlobToBase64(profileImageOne);

    // Convert profileImageTwo to base64
    const base64ImageTwo = await convertBlobToBase64(profileImageTwo);
    const userData = {
      profileImageOne: base64ImageOne,
      profileImageTwo: base64ImageTwo,
    };

    updateUser(userData);

    console.log(userData);
  };

  const handleCaptureOne = (e) => {
    const selectedFile = e.target.files[0];

    // Display the selected image in the profileImageTwo area
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImageOne(imageUrl);
    }
  };

  const handleCaptureTwo = (e) => {
    const selectedFile = e.target.files[0];
    // Display the selected image in the profileImageTwo area
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImageTwo(imageUrl);
    }
  };

  // To input picture inside the alotted space.

  const handleDivClickOne = () => {
    fileInputRefOne.current.click();
  };

  const handleDivClickTwo = () => {
    fileInputRefTwo.current.click();
  };

  const isButtonDisabled = !profileImageOne || !profileImageTwo;

  return (
    <section className="bg-black h-screen overflow-auto relative">
      {/* Gradient Images for background. */}
      <div className="fixed inset-0 z-0">
        <img
          src={cameragradient}
          alt="camera gradient"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col absolute inset-x-0 m-8 gap-9">
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-[32px] leading-10 font-normal font-['Lufga']">
            Add a real-time picture of yourself.
          </h3>
          <p className="opacity-70 text-white text-base font-normal font-['Lufga']">
            Be your real self
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center overflow-hidden h-[257px] relative rounded-[34px] border border-indigo-700 bg-custom-gradient2 "
          onClick={handleDivClickOne}
        >
          <form action="/upload-image" method="post">
            <input
              onChange={handleCaptureOne}
              ref={fileInputRefOne}
              type="file"
              accept="image/*"
              capture="user"
              style={{ display: "none" }}
            />
            {profileImageOne ? (
              <img
                src={profileImageOne}
                alt="selected profile"
                className=" w-full h-full object-cover rounded-[34px]"
              />
            ) : (
              <img src={AddButton} alt="add button" />
            )}
          </form>
        </div>

        <div
          className="flex flex-col justify-center items-center overflow-hidden h-[257px] relative rounded-[34px] border border-indigo-700 bg-custom-gradient2 "
          onClick={handleDivClickTwo}
        >
          <form action="/upload-image" method="post">
            <input
              onChange={handleCaptureTwo}
              ref={fileInputRefTwo}
              type="file"
              accept="image/*"
              capture="user"
              style={{ display: "none" }}
            />
            {profileImageTwo ? (
              <img
                src={profileImageTwo}
                alt="selected profile"
                className=" w-full h-full object-cover rounded-[34px]"
              />
            ) : (
              <img src={AddButton} alt="add button" />
            )}
          </form>
        </div>
        <div>
          <Link to={isButtonDisabled ? "#" : "/info-4"}>
            <SwipeButton
              Steps="Step 3 out of 3"
              handleSave={handleSave}
              disabled={isButtonDisabled}
            />
          </Link>
          <div className="text-center my-2 mb-16">
            <p className="text-white text-xs font-medium font-['Lufga']">
              This will be shown on your profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoThree;
