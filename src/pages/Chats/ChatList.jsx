import React from "react";
import chatlistgradient from "../../assets/images/chatlist-gradient.png";
import BottomNav from "../../components/BottomNav";
import { Link } from "react-router-dom";
import Like from "../../assets/icons/Like.svg";

const ChatList = () => {
  return (
    <div className=" h-screen bg-black overflow-auto relative">
      {/* ChatList-gradient */}
      <div className="fixed inset-0 z-0 ">
        {/* <img
          src={chatlistgradient}
          alt="chatlist-gradient"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <section className=" relative z-10">
        <div className=" fixed w-full bg-black bg-gradient-to-b from-[#4B0E83]">
          <div className=" ">
            <div className="  mx-6 h-24 flex justify-between items-center">
              <div>
                <h1 className=" text-white text-2xl font-medium font-['Lufga']">
                  Chats
                </h1>
              </div>
              <div className="">
                <button>
                  <img src={Like} alt=" Search Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* message list */}

      <section className=" relative mx-6 mt-[90px] overflow-auto">
        <Link to="/chat/:chatId" className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className="  w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs -translate-y-[10px] ">timestamp</h3>
            
          </div>
        </Link>

        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>

        <div className=" flex justify-between rounded-xl my-4 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>

        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>


        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>


        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>


        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs -translate-y-[10px] ">timestamp</h3>
          </div>
        </div>


        
        <div className=" flex justify-between rounded-xl my-8 items-center ">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>


        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>

        
        <div className=" flex justify-between rounded-xl my-8 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="#"
              alt="profile image"
              className=" w-16 h-16 bg-white rounded-full object-cover "
            />
            <div className=" text-start">
              <h3 className=" text-zinc-300 text-sm font-normal font-['Lufga']">
                Name
              </h3>
              <p className=" text-zinc-300 text-xs font-light font-['Lufga']">
                text
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-white text-xs  -translate-y-[10px]">timestamp</h3>
          </div>
        </div>
        <div className=" mt-32 w-full h-36 "></div>
      </section>

      <div className="  w-full  fixed bottom-0 bg-gradient-to-t from-[#4B0E83] via-[#4B0E83] ">
        <div className=" mx-6 mb-2 mt-3">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default ChatList;

// bg-gradient-to-t from-[#4B0E83]
// bg-gradient-to-t from-[#845CFC]