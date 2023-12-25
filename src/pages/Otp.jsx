import React, { useRef, useState } from "react";
import logingradient1 from "../assets/images/logingradient_1.png";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';


const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otpValue, setOtpValue] = useState("");



// To handle the input.
  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
      setOtpValue((prevOtpValue) => prevOtpValue + value);
    }
  };

// To handle the backspace when user wants to clear the otp.
  const handleBackspace = (index, e) => {
    const value = e.target.value;
    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };



// Handle Otp verfication.
  const handleOtpValidation = async() => {
      // Otp validation to be done here.
      try {
        console.log('Entered OTP:', otpValue); // Add this line
        console.log('User ID from query parameter:', userId);
        const response = await axios.post("https://weak-teal-donkey-ring.cyclic.app/api/validate-otp", 
          //userId: '-Nm9f38jfNe1yVaU6t15', // Replace with the actual user ID from your application state or context
          { enteredOtp: otpValue, userId },
          { withCredentials: true }
        );
        
        console.log('Response from server:', response.data);
        // navigate('/info-1')
        if (response.data.success) {
          navigate(`/info-1?userId=${userId}`);
        } else {
          // Handle invalid OTP.
          alert("Failed to generate OTP. Please try again.");
          navigate('/otp');
          console.log('Invalid OTP:', response.data.error);
          window.location.reload();
        }
      } catch (error) {
        console.error('Error during OTP validation:', error);
      }
    };

  return (
    <section className="bg-black h-screen overflow-hidden relative flex justify-center items-center">
      {/* Gradient Images for background. */}
      <div className="absolute inset-0 z-0 -translate-y-16">
        <img
          src={logingradient1}
          alt="logingradient1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col absolute inset-x-0 mx-[40px] mt-36">
        <div className=" mb-3">
          <h1 className=" text-white text-[32px] font-normal font-['Lufga']">
            OTP Sent!
          </h1>
        </div>
        <p className=" text-stone-400 text-base font-normal font-['Lufga'] ">
          A four digit OTP has been sent to you at or{" "}
          <span className=" text-violet-500 text-base font-bold font-['Lufga']">
            <Link to="/login">Did you not enter the correct number?</Link>
          </span>
        </p>

        {/* OTP input field.*/}

        <div className="text-[#A09F99] my-5">
          <div className=" w-full flex justify-around gap-2 items-center">
            {inputRefs.map((inputRef, index) => (
              <input
                name="otp"
                key={index}
                ref={inputRef}
                type="text"
                maxLength="1"
                onFocus={(e) => e.target.select}
                autoFocus={index === 0}
                className="border-gradient-rounded w-[60px] h-[60px] bg-opacity-20 mb-[25px] mt-2 text-center placeholder-gray-500 text-white  bg-black text-2xl font-normal font-['Lufga'] rounded-xl border outline-none "
                onInput={(e) => handleInput(index, e)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    handleBackspace(index, e);
                  }
                }}
              />
            ))}
          </div>
          <div>
            <button
              onClick={handleOtpValidation}
              className=" bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] w-full rounded-full py-3.5 mb-5 text-white text-base font-medium font-['Lufga'] "
            >
              Enter
            </button>
          </div>
          <p className=" text-zinc-300 text-base font-normal font-['Lufga'] ">
            I did not receive the code.{" "}
            <span className=" text-violet-500 text-base font-bold font-['Lufga']">
              Resend the OTP.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Otp;
