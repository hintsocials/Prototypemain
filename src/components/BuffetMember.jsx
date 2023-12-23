import React from "react";
import Like from "../assets/icons/Like.svg";
import hotelImage from "../assets/images/hotelImg.png";

const BuffetMember = ({ user }) => {
  const isPremium = true;
  return (
    <div className=" relative">
      <div className=" h-fit bg-neutral-800 rounded-[10px] relative overflow-hidden">
        {/* If the user is premium view the full image else view only the image inside the below circle */}

        {isPremium ? (
          <div>
            <img src={user.profileImageOne} alt="hotel image" className="object-cover w-full h-full" />
          </div>
        ) : (
          <div className="h-52 w-full">
            <div className="absolute inset-0 flex justify-center items-center ">
              <div className="w-[62px] h-[62px] bg-slate-900 mt-14 mb-5 rounded-full overflow-hidden items-center -translate-y-3">
                <img src={user.profileImageOne} alt="User profile photo" />
              </div>
            </div>
          </div>
        )}

<div className="absolute flex top-0 left-0 pl-3 pt-3 items-center">
          {/* Modify as needed based on user data */}
          <img src={Like} alt="like icon" className="w-3 h-3" />
          <span className="text-white text-xs font-bold font-['Lufga']">5</span>
        </div>
      </div>
      <div className="mx-4 mt-2">
        <h3>
          <span className="text-zinc-300 text-xl font-semibold">{user.name},</span>{" "}
          <span className="text-zinc-300 text-xl font-semibold">{user.age}</span>
        </h3>
        <h3 className="pb-2" style={{ lineHeight: "1" }}>
          <span className="text-center text-white text-sm font-normal font-['Lufga']">
            {user.qualification},
          </span>{" "}
          <span className="text-center text-white text-sm font-normal font-['Lufga']">
            {user.gender}
          </span>
        </h3>
      </div>
    </div>
  );
};



export default BuffetMember;
