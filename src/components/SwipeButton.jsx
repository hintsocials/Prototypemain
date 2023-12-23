import React from "react";
import CircleArrow from "../assets/icons/circlearrow.svg"

const SwipeButton = ({ Steps,handleSave,disabled }) => {
  return (
    <div>
      <div  className={`flex justify-between items-center h-[68px] w-full rounded-full text-white text-base font-medium font-['Lufga'] ${
          disabled ? "bg-gradient-to-r from-[#525255] to-[#1C1B1D]" : "bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B]"
        }`}>
        <p className=" mx-8">{Steps}</p>
        <button className=" mr-3" onClick={handleSave} disabled={disabled}>
          <img
            src={CircleArrow}
            alt="Back Arrow"
            className=" w-11 h-11"
          />
        </button>
      </div>
    </div>
  );
};

export default SwipeButton;
