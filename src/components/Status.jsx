import React from "react";
import { useUser } from '../context/UserContext';

const Status = () => {
  const statuses = [
    "Serious",
    "Casuals",
    "Polyamory",
    "Married",
    "Friendship",
    "New to city",
    "Open relation",
    "Open to date",
    
  ];
  const { userData, updateUser } = useUser();

  const handleClickStatus = (status) => {
    const updatedStatuses = userData.statuses.includes(status)
      ? userData.statuses.filter((selectedStatus) => selectedStatus !== status)
      : [...userData.statuses, status];

    updateUser({ statuses: updatedStatuses });
  };

  return (
    <div className=" grid grid-flow-row grid-cols-2 gap-2 justify-center">
      {statuses.map((status, index) => (
        <button
          key={index}
          className={`bg-black border-gradient-rounded text-center text-base font-normal font-['Lufga'] rounded-full border outline-none justify-center items-center w-full py-2 text-white  ${
            userData.statuses.includes(status)
              ? "text-white bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] border-none"
              : ""
          }`}
          onClick={() => handleClickStatus(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default Status;
