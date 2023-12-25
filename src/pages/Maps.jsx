import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import hotelImg from "../assets/images/hotelImg.png";
import Bombai from "../assets/images/Bombai.png";
import cafe16 from "../assets/images/cafe16.png";
import Embassy from "../assets/images/Embassy.png";
import Havana from "../assets/images/Havana.png";
import Kegs from "../assets/images/Kegs.png";
import oopre from "../assets/images/oopre.png";
import Sundowner from "../assets/images/sundowner.png";
import TopNotch from "../assets/images/TopNotch.png";
import BottomNav from "../components/BottomNav";
import animation from "../assets/icons/circle-arrow-down-solid.svg";
import { useNavigate } from "react-router-dom";


const Maps = () => {
  const [selectedButton, setSelectedButton] = useState("ongoing");
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    // handle the upcoming and ongoing events here.

    setSelectedButton(button);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // handle the restaurant features.
  const handleClickRestaurant = () => {
    window.location.href = "https://www.hintsocials.com";
  };

  const isOngoingSelected = selectedButton === "upcoming";

  // for toggling between map fullscreen.
  const toggleFullscreenMap = () => {
    setIsMapFullscreen((prev) => !prev);
  };
  const locations = [
    { name: "Marker 122", coordinates: [51.505, -0.09] },
    // Add more locations as needed
  ];
  return (
    <div className=" h-screen overflow-hidden">
      {/* Have to implement the Map here. */}
      <section
        className={`map-section ${
          isMapFullscreen ? "h-full" : "h-1/4"
        } bg-white transition-all duration-300 ease-in-out`}
        onClick={toggleFullscreenMap}
      >
        <div className="absolute inset-0 ">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3985.0415390886537!2d85.80566029925815!3d20.359039144899175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d14a36a173%3A0xfab2660cad358a97!2sHill%20View%20Cafe%20and%20Restro!5e1!3m2!1sen!2sin!4v1703182435799!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Center the map in full screen */}
        {/* <div className={`absolute inset-0 flex items-center justify-center ${isMapFullscreen ? "hidden" : ""}`}>
          <div className="text-[#845CFC] text-4xl font-bold">Map</div>
        </div> */}
      </section>

      {/* The list of Events */}
      <section
        className={`bg-black sticky h-screen overflow-auto rounded-t-[40px] ${
          isMapFullscreen ? "transform-translate-down" : ""
        }`}
      >
        
        <div className=" mt-5 mx-6">
          <div className="flex justify-center item-center mb-5">

          <button  className ="taps" onClick={toggleFullscreenMap} >
            <img src={animation} alt="map button" className="w-8 h-8" />
          </button>
          </div>
          <h3 className=" text-[#845CFC] text-2xl font-medium font-['Lufga']">
            The Listing
          </h3>
          
          <span className=" text-white text-base font-normal font-['Lufga'">
            Discover all the ongoing and upcoming events in your town.
          </span>
        </div>

        {/* Drop Down for Restaurant */}

        <div className=" flex justify-center items-center  m-6 gap-1">
          {/* <div>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleSelectChange}
              className="px-2 py-1 rounded-md  bg-black text-white text-xl outline-none text-opacity-95 border-none "
            >
              <option
                value=""
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Restaurant
              </option>
              <option
                value="option1"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Bar
              </option>
              <option
                value="option2"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 2
              </option>
              <option
                value="option3"
                className="  text-zinc-300 text-base font-normal font-['Lufga']"
              >
                Option 3
              </option>
            </select>

            {selectedOption && (
              <p className="mt-2">You selected: {selectedOption}</p>
            )}
          </div> */}
          <div className={`bg-white h-[38px]  flex rounded-[19px]  `}>
            <button
              className={`pl-5 button-transition-maps rounded-[19px] outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "ongoing"
                  ? "bg-[#845CFC] text-white   pr-7"
                  : "bg-transparent text-[#845CFC]  pr-7"
              }`}
              onClick={() => handleButtonClick("ongoing")}
            >
              Ongoing
            </button>
            <button
              className={`pr-5 button-transition-maps rounded-[19px]  outline-none text-center text-xs font-medium overflow-hidden ${
                selectedButton === "upcoming"
                  ? "bg-[#845CFC] text-white  pl-5"
                  : "bg-transparent text-[#845CFC] pl-5"
              }`}
              onClick={() => handleButtonClick("upcoming")}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Upcoming Event List */}
        {isOngoingSelected ? (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={cafe16}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Cafe 16
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  16, Satya Nagar,   <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={oopre}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  OOPRE Kitchen and Bar
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  G 51, Chandrasekharpur,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={Kegs}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Kegs and Barrels Brewing Co
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  KGB, Plot No. 435, Prakriti Tower,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={Embassy}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  EMBASSY CLUB & SKY LOUNGE
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  District Center, Chandrasekharpur,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={TopNotch}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  TopNotch
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                   Bajrang Vihar, Patia,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={Sundowner}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Cafe Sundowner
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  Prangan by Mango Hotels, Puri - Cuttack Rd,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={Bombai}
                  alt="Event image"
                  className=" rounded-2xl  w-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  The BOMBAI
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  Samanta Vihar, Chandrasekharpur,  <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={Havana}
                  alt="Event image"
                  className=" rounded-2xl  w-full h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  HAVANA CLUB & SKY LOUNGE
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  316, District Center, Chandrasekharpur,   <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>
            
            <div className=" mt-48 w-full h-20"></div>
            {/* <div className=" mt-28"></div> */}
          </section>
        ) : (
          <section className=" grid gap-5 m-6 overflow-y-auto ">
            {/* Events should map through here */}
            <div
              onClick={handleClickRestaurant}
              className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex "
            >
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  h-full"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Hillview cafe and restaurant
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  Patharagadia Rd, Patia, <br /> Bhubaneswar, Odisha
                </span>
              </div>
            </div>

            

            {/* <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div>

            <div className=" w-full h-32 maps-card-border-gradient overflow-hidden rounded-2xl flex ">
              <div className=" h-32 w-32 relative overflow-hidden rounded-2xl">
                <img
                  src={hotelImg}
                  alt="Event image"
                  className=" rounded-2xl  max-w-full max-h-fit"
                />
              </div>
              <div className=" mt-2 ml-6">
                <h3 className=" text-zinc-300 text-base font-normal font-['Lufga']">
                  Demon Slay Club
                </h3>
                <span className=" text-[#D9D9D9] text-xs leading-tight font-light font-['Lufga'] ">
                  FC ROAD, PUNE <br /> 179 ACTIVE USERS
                </span>
              </div>
            </div> */}
            <div className=" mt-48 w-full h-20"></div>
          </section>
        )}
      </section>

      {/* Bottom Navigation */}
      <div className="  w-full bg-black fixed bottom-0 backdrop-blur-6xl bg-transparent bg-gradient-to-t from-[#4B0E83] ">
        <div className=" mx-6 my-2">
          <BottomNav  toggleFullscreenMap={toggleFullscreenMap} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default Maps;
