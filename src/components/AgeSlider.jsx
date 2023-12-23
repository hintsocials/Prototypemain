import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const AgeSlider = ({age,handleAgeChange}) => {
  // const [age, setAge] = useState([27, 45]);

  // const handleAgeChange = (value) => {
  //   setAge(value);
  // };

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-white text-[32px] font-normal font-['Lufga'] ">
        Age
      </h3>
      <Slider
        min={18}
        max={80}
        step={1}
        range
        value={age}
        onChange={handleAgeChange}
        styles={{
          track: { backgroundColor: "#9C7BFF", height: "2px" },
          handle: {
            borderColor: "#ffffff ",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 0 0 ",
            width: "18px",
            height: "18px",
            marginTop: '-8px',
          },
          rail: { backgroundColor: "#ffffff", height: "2px" },
        }}
      />
      <div className=" flex justify-between text-center text-white text-base font-normal font-['Lufga']">
        <label htmlFor="min-age">{age[0]}+</label>
        <label htmlFor="max-age">{age[1]}+</label>
      </div>
    </div>
  );
};

export default AgeSlider;
