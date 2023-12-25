import React, { useState, useEffect } from "react";
import buffetgradientTop from "../assets/images/buffet-gradientTop.png";
import buffetgradientBottom from "../assets/images/buffet-gradientBottom.png";


import BottomNav from "../components/BottomNav";
import BuffetMember from "../components/BuffetMember";

import { Link } from "react-router-dom";

const Buffet = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://weak-teal-donkey-ring.cyclic.app/api/users");
        const data = await response.json();
        if (data.success) {
          setUsers(data.users);
        } else {
          console.error("Error fetching users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);
  const isPremium = true;

  return (
    <div className=" bg-black overflow-auto h-screen relative ">
      {/* Buffet-gradient */}
      <div className=" fixed inset-x-0">
        <img
          src={buffetgradientTop}
          alt="buffet-gradientone"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Buffet-bg-gradient */}
      <div className=" fixed inset-x-0 bottom-0 ">
        <img
          src={buffetgradientBottom}
          alt="buffet-gradienttwo"
          className=" w-full h-full object-cover"
        />
      </div>

      {/* Heading for Buffet List */}

      <section
        className={` m-10  mt-[84px] transition-transform transform text-center z-20

        `}
      >
        <div className=" mb-20">
          <span
            className=" font-playfair text-center text-white text-[32px] font-medium uppercase"
            style={{ lineHeight: "1.2" }}
          >
            One linear <br /> quotation of <br /> any <br /> meaningful <br />{" "}
            thoughts
          </span>
        </div>
        <span className=" text-violet-500 text-[32px] font-normal font-['Lufga']">
          Buffet List
        </span>
        <p className=" text-zinc-300 text-base font-light font-['Lufga'] mb-4">
          See all the members in one go and connect quickly ! All new profiles
          are updated on top.
        </p>
        {isPremium ? (
          ""
        ) : (
          <p className=" text-zinc-300 text-base font-normal font-['Lufga'] leading-relaxed tracking-tight">
            Unlock the full account.{" "}
            <Link to="/premium">
              <span className="text-violet-500 text-base font-bold font-['Lufga'] leading-relaxed tracking-tight">
                Click here
              </span>
            </Link>
          </p>
        )}

        {/* Buffet list component. */}
        <section className={`inset-x-0`}>
        <div className="grid grid-cols-2 mt-8 gap-[50px]">
          {users.map((user) => (
            <BuffetMember key={user.userId} user={user} />
          ))}
        </div>
      </section>
      {/* Bottom Navigation. */}
      {/* <section
        className={`fixed inset-x-0 bottom-0  bg-gradient-to-t from-[#411079] via-[#3B0C6E] `}
      >
        <div className="mx-6 mt-6 mb-2 bottom-0 inset-x-0 ">
          <div>
            <BottomNav />
          </div>
        </div>
      </section> */}
        <div className="mt-10">
          s
        </div>
      </section>

      {/* Bottom Navigation. */}
      <section
        className={` fixed inset-x-0 bottom-0  bg-gradient-to-t from-[#411079] via-[#3B0C6E] `}
      >
        <div className=" mx-6 mt-6 mb-2 bottom-0 inset-x-0 ">
          <div>
            <BottomNav />
          </div>
          {/* <div className=" justify-center text-center items-center flex mt-3">
            {isPremium ? (
              <p className=" text-zinc-300 text-base font-normal font-['Lufga'] leading-relaxed tracking-tight">
                Be a VIP Member.{" "}
                <Link to="/premium">
                  <span className="text-white text-base font-semibold font-['Lufga'] leading-relaxed tracking-tight">
                    Click here
                  </span>
                </Link>
              </p>
            ) : (
              <p className=" text-zinc-300 text-base font-normal font-['Lufga'] leading-relaxed tracking-tight">
                Unlock the full account.{" "}
                <Link to="/premium">
                  <span className="text-white text-base font-semibold font-['Lufga'] leading-relaxed tracking-tight">
                    Click here
                  </span>
                </Link>
              </p>
            )}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Buffet;

//  bg-gradient-to-t from-[#411079] via-[#3B0C6E]
