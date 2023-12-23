import React, { useState, useEffect } from "react";
import homegradient from "../assets/Images/homegradient.png";
import BottomNav from "../components/BottomNav";
import ChatButton from "../assets/icons/Hint.svg";
import CardList from "../assets/icons/CardList.svg";
import Verify from "../assets/icons/Verify.svg";
import Like from "../assets/icons/Like.svg";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import apiUrl from '../apiConfig';

const HintPremium = () => {
  const { userData } = useUser();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [like, setLike] = useState(5);
  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = async () => {
    try {
      const response = await fetch('${apiUrl}/api/users');
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setUserProfiles(data.users);
      } else {
        console.error('Error fetching user profiles:', data.error);
      }
    } catch (error) {
      console.error('Error fetching user profiles:', error.message);
    }
  };

  useEffect(() => {
    // Fetch user profiles when the component mounts
    fetchUserProfiles();
  }, []);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleSlideChange = (swiper) => {
    setCurrentProfileIndex(swiper.activeIndex);
  };

  const handleSendHint = () => {
    // Add logic for sending hints
  };

  return (
    <div className="bg-black w-full overflow-hidden h-screen fixed">
      <div className="m-6 fixed p-3 h-fit py-[13px] bg-[#634880] bg-opacity-60 rounded-full justify-center items-center bg inset-y-0 z-20">
        <Link to="/card-list">
          <img src={CardList} alt="Love button for card list" className="translate-y-[2px]" />
        </Link>
      </div>
      
      <Swiper
        className="h-full w-full"
        direction={"vertical"}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {userProfiles.map((profile, index) => {
        console.log(profile.profileImageOne); // Log the profile image URL
        return (
          <SwiperSlide
            className="w-full h-full items-center flex justify-center object-center"
            key={index}
          >
            <img src={profile.profileImageOne} alt="homestyle" className="w-fit h-full object-cover" />
          </SwiperSlide>
        );
      })}
      </Swiper>

      <div className="fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#4B0E83]">
        <section className="relative z-20 bottom-[95px] pl-2 inline-flex inset-x-0 mx-6 py-2 pointer-events-auto">
          <div className="fixed z-10">
            <div className="flex gap-3">
              <div className="w-fit h-[27px] px-5 bg-violet-500 rounded-[34px]">
                <span className="text-white text-xs font-normal drop-shadow-lg">
                  {userData.statuses[0]}
                </span>
              </div>
              <div className="flex gap-1">
                <img src={Like} alt="Like button" className="drop-shadow-lg" />
                <span className="text-white text-lg font-bold font-['Lufga'] drop-shadow-lg translate-y-1">
                  {like}
                </span>
              </div>
            </div>
            <div className="mt-1 mx-2 flex gap-2">
              <Link to={`/hintUserDetails/${userProfiles[currentProfileIndex]?.userId}`}>
                <span className="text-white text-2xl font-bold drop-shadow-lg">
                  {userProfiles[currentProfileIndex]?.name[0]}, {userProfiles[currentProfileIndex]?.age}
                </span>
              </Link>
              <img src={Verify} alt="Verify button" />
            </div>
            <div className="mx-2 mt-1">
              <span className="text-stone-300 text-lg font-normal drop-shadow-lg">
                {userProfiles[currentProfileIndex]?.qualification},{" "}
              </span>
              <span className="text-stone-300 text-lg font-normal drop-shadow-lg">
                {userProfiles[currentProfileIndex]?.gender === "Women" ? "Female" : ""}
                {userProfiles[currentProfileIndex]?.gender === "Men" ? "Male" : ""}
                {userProfiles[currentProfileIndex]?.gender === "Others" ? "Others" : ""}
              </span>
            </div>
          </div>
        </section>
        <div className="mb-2 mx-6">
          <div className="flex gap-2 mb-4 mx-1">
            <button
              onClick={handleSendHint}
              className="w-full bg-violet-500 rounded-[34px] backdrop-blur-[10px] text-white text-lg font-medium font-['Lufga']"
            >
              Send a hint!
            </button>
            <button
              onClick={handleLike}
              className="custom-send-a-hint-height bg-[#5B3E79] rounded-full justify-center items-center"
            >
              <img src={ChatButton} alt="Hint svg" className="w-12" />
            </button>
          </div>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default HintPremium;
