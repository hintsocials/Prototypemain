import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import logingradient1 from "../assets/images/logingradient_1.png";
import logingradient2 from "../assets/images/logingradient_2.png";
import FacebookSvg from "../assets/icons/facebook.svg";
import GoogleSvg from "../assets/icons/google.svg";
import AppleSvg from "../assets/icons/apple.svg";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleOtp = async () => {
    try {
      // Example Axios request with credentials
      const response = await axios.post("http://localhost:3001/api/generate-otp", { phone }, { withCredentials: true });

      console.log(response.data);
      navigate("/otp");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = () => {
    // Login with google.

  }
  const loginWithApple = () => {
    // Login with Apple Id.

  }
  const loginWithFacebook = () => {
    // Login with Facebook.
    
  }

  return (
    <section className="bg-black h-screen overflow-hidden relative">
      {/* Gradient Images for background. */}
      <div className="absolute inset-0 z-0 -translate-y-16">
        <img
          src={logingradient1}
          alt="logingradient1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 translate-y-64">
        <img
          src={logingradient2}
          alt="logingradient2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col absolute inset-x-0 bottom-10 ">
        <div className=" items-center flex justify-center mb-[48px] ">
          <h1 className=" text-white text-[32px] font-normal font-['Lufga']">
            Login
          </h1>
        </div>

        {/* Login using phone number */}
        <div className="text-[#A09F99]  mx-[40px] mb-[40px]">
          <label className=" font-bold" htmlFor="phone">
            Phone number
          </label>

          <div>
            <input
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              placeholder=" Enter your number"
              className=" border-gradient-rounded py-3 px-3 mb-[25px] mt-2 text-white placeholder-gray-500 bg-black text-base font-normal font-['Lufga'] w-full rounded-xl border outline-none bg-transparent"
            />
          </div>
          <div>
            <button
              onClick={handleOtp}
              className=" bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 text-white text-base font-medium font-['Lufga'] "
            >
              Send OTP
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center mx-[40px] gap-3 mb-[30px]">
            <div className="flex-1 border-t border-gray-400"></div>
            <h3 className=" text-center text-zinc-200 text-base font-normal font-['Lufga'] opacity-70">
              Or login with
            </h3>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
        </div>

        {/* Login with Social media */}
        <div className=" flex justify-around items-center gap-7 mb-5 mx-10">
          <div className=" flex justify-center items-center">
            <button onClick={loginWithGoogle} className=" flex justify-center items-center w-[70px] h-[70px] left-0 top-0  bg-violet-500 bg-opacity-20 rounded-full shadow-black shadow-2xl">
              <img
                src={GoogleSvg}
                alt="Google logo"
                className=" w-[20px] h-[20px]"
              />
            </button>
          </div>
          <div className=" flex justify-center items-center">
            <button onClick={loginWithApple} className=" flex justify-center items-center w-[70px] h-[70px] left-0 top-0  bg-violet-500 bg-opacity-20 rounded-full shadow-black shadow-2xl">
              <img
                src={AppleSvg}
                alt="Apple logo"
                className=" w-[22px] h-[22px]"
              />
            </button>
          </div>
          <div className=" flex justify-center items-center">
            <button onClick={loginWithFacebook} className=" flex justify-center items-center w-[70px] h-[70px] left-0 top-0  bg-violet-500 bg-opacity-20 rounded-full shadow-black shadow-2xl">
              <img
                src={FacebookSvg}
                alt="Facebook logo"
                className=" w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <p className=" text-zinc-300 text-base font-normal font-['Lufga'] text-center mx-[40px]">
          I have read and I accept to the{" "}
          <Link to="/terms">
            <span className=" text-violet-500 text-base font-bold font-['Lufga']">
              Terms and conditions{" "}
            </span>{" "}
          </Link>
          and the{" "}
          <Link to="/policy">
            <span className=" text-violet-500 text-base font-bold  font-['Lufga']">
              privacy policy.
            </span>{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
