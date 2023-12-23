import React, { useState } from "react";

function GenderPreference({ prefered, onClick, selected }) {
  return (
    <button
      className={`bg-black border-gradient-rounded  text-center text-base font-normal font-['Lufga'] rounded-xl border outline-none  justify-center items-center bg-transparent h-12  w-full my-5 text-white text-opacity-50 ${
        selected
          ? "text-white bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] border-none text-opacity-95"
          : ""
      }`}
      onClick={() => onClick(prefered)}
    >
      {prefered}
    </button>
  );
}

function GenderPreferenceSelection({ setPreferedGender, preferedGender }) {
  const genders = ["Men", "Women", "Other"];
  const [selectAll, setSelectAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleToggleClick = () => {
    setSelectAll(!selectAll);
    setPreferedGender(selectAll ? [] : genders);
    setIsChecked(!selectAll);
  };

  const handleGenderClick = (prefered) => {
    // setPreferedGender(prefered);
    if (selectAll) {
      setSelectAll(false);
      setIsChecked(false);
    }
    setPreferedGender((prev) => {
      if (prev && prev.includes(prefered)) {
        return prev.filter((gender) => gender !== prefered);
      } else {
        return [...(prev || []), prefered];
      }
    });
  };
  

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex gap-2">
        {genders.map((prefered) => (
          <GenderPreference
            key={prefered}
            prefered={prefered}
            onClick={handleGenderClick}
            selected={preferedGender.includes(prefered)}
          />
        ))}
      </div>
      <div className=" flex items-center gap-5">
        <span className="text-center text-white text-base font-normal font-['Lufga']">
          Everyone
        </span>
        <label className=" relative w-[48px] h-[27px]">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} onClick={handleToggleClick} className=" hidden"/>
          <span className={`slider-toggle border-gradient-rounded ${selectAll ? 'selected' : ''}`}></span>
        </label>
      </div>
    </div>
  );
}

export default GenderPreferenceSelection;
