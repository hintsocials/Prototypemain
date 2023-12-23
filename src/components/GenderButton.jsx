import React from "react";

function GenderButton({ gender, onClick, selected }) {
  return (
    <button
      className={`bg-black border-gradient-rounded  text-center text-base font-normal font-['Lufga'] rounded-xl border outline-none  justify-center items-center bg-transparent h-12  w-full text-white text-opacity-50 ${
        selected
          ? "text-white bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] border-none text-opacity-95"
          : ""
      }`}
      onClick={() => onClick(gender)}
    >
      {gender}
    </button>
  );
}

function GenderSelection({
  setSelectedGender,
  selectedGender,
}) {
  const genders = ["Men", "Women", "Other"];

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };


  return (
    <div>
      <div className="flex gap-2">
        {genders.map((gender) => (
          <GenderButton
            key={gender}
            gender={gender}
            onClick={handleGenderClick}
            selected={selectedGender === gender}
          />
        ))}
       
      </div> 
    </div>
  );
}

export default GenderSelection;
