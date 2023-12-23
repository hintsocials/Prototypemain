import { useState, useRef } from "react";
import infogradient from "../assets/images/info-gradient.png";
import SwipeButton from "../components/SwipeButton";
import GenderSelection from "../components/GenderButton";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import dobToAge from "dob-to-age";
import axios from "axios";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../assets/icons/calenderIcon.svg";

const PersonalInfoOne = () => {
  const [name, setName] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [dob, setDob] = useState(new Date());

  const [age, setAge] = useState("");

  const { updateUser } = useUser();

  const navigate = useNavigate();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const datePickerRef = useRef(null);

  // const handleDatePickerChange = (date) => {
  //   setDob(date);
  //   handleDateChange(date);
  // };

  const handleDateChange = (date) => {
    setDob(date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    const calculatedAge = dobToAge(formattedDate);
    setAge(calculatedAge);
  };

  const handleDatePickerChange = (date) => {
    // Update state variables and call the external handler
    setDay(date.getDate());
    setMonth(date.toLocaleString("en-US", { month: "long" }));
    setYear(date.getFullYear());

    setDob(date);
    handleDateChange(date);
  };

  // Open datepicker by clicking on the image.
  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleSave = async () => {
    // User input Validatin to be done.
    const dobsplit = dob.toISOString().split("T")[0];
    const userData = {
      name,
      dobsplit,
      gender: selectedGender,
      age,
    };

    updateUser(userData);
    try {
      const response = await axios.post(
        "https://prototypeserver.onrender.com/api/save-user-info",
        userData,
        { withCredentials: true }
      );
  
      console.log(userData);
  
      navigate("/info-2");
    } catch (error) {
      console.log(error);
    }
  };

  // To calculate the age and set the Date of Birth.
  // const handleDateChange = (date) => {
  //   setDob(date);
  //   const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
  //     .toString()
  //     .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  //   const calculatedAge = dobToAge(formattedDate);
  //   setAge(calculatedAge);
  // };

  return (
    <div className=" bg-black overflow-auto h-screen relative ">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0 ">
        <img
          src={infogradient}
          alt="homestyle"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="m-[32px] absolute inset-x-0">
        <h3 className=" text-white text-[32px] leading-10 font-normal font-['Lufga']">
          3 simple steps to launch your perfect profile!
        </h3>
        <p className="opacity-70 pt-4 text-white text-base font-normal font-['Lufga']">
          Be your real self!
        </p>
        {/*  Personal Informations */}
        <div className="flex flex-col gap-5 mt-11 ">
          <label
            htmlFor="name"
            className=" text-white text-2xl font-bold font-['Lufga'] "
          >
            Name
          </label>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=" Enter your name"
            className=" border-gradient-rounded  py-3 px-3 placeholder-gray-500 bg-black text-white text-base font-normal font-['Lufga'] w-full rounded-xl border outline-none bg-transparent"
          />
          <p className="text-white text-sm font-normal font-['Lufga']">
            You won't be able to change this later.
          </p>
        </div>
        {/* Date Of Birth */}
        <div className="flex flex-col gap-5 mt-11 ">
          <div className=" flex gap-3 items-center">
            <h2
              htmlFor="dob"
              className=" text-white text-2xl font-bold font-['Lufga'] "
            >
              DOB
            </h2>
            <div>
              <div className=" flex justify-center items-center">
                <DatePicker
                  selected={dob}
                  onChange={handleDatePickerChange}
                  ref={datePickerRef}
                  className=" hidden z-0"
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={100}
                  yearDropdownMinLength={100}
                  maxDate={new Date()}
                  monthFormat="MMMM"
                  
                />
                <div className=" h-7 w-7">
                  <img
                    src={CalenderIcon}
                    alt="calendar icon"
                    className="cursor-pointer"
                    onClick={openDatePicker}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full">
              <div className="flex justify-between gap-2 ">
                <div className=" flex flex-col gap-1 w-1/5">
                  <label
                    htmlFor="day"
                    className=" text-white text-xs pl-1 font-medium font-['Lufga'] "
                  >
                    Day
                  </label>
                  <input
                    required
                    name="day"
                    type="number"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="12"
                    pattern="[0-9]*"
                    min="1"
                    max="31"
                    readOnly
                    className=" border-gradient-rounded  text-center py-3 px-3 placeholder-gray-500 text-white bg-black text-base font-normal font-['Lufga'] rounded-xl border outline-none bg-transparent "
                  />
                </div>

                <div className=" flex flex-col gap-1 w-2/5">
                  <label
                    htmlFor="month"
                    className=" text-white text-xs pl-1 font-medium font-['Lufga'] "
                  >
                    Month
                  </label>
                  <input
                    required
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    type="text"
                    placeholder="November"
                    readOnly
                    className=" border-gradient-rounded  text-center text-white  py-3 px-3 placeholder-gray-500 bg-black text-base font-normal font-['Lufga'] rounded-xl border outline-none bg-transparent "
                  />
                </div>
                <div className=" flex flex-col gap-1 w-2/5">
                  <label
                    htmlFor="year"
                    className=" text-white text-xs pl-1 font-medium font-['Lufga'] "
                  >
                    Year
                  </label>
                  <input
                    required
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="number"
                    placeholder="1999"
                    readOnly
                    className=" border-gradient-rounded  text-center text-white py-3 px-3 placeholder-gray-500 bg-black text-base font-normal font-['Lufga'] rounded-xl border outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-white text-sm font-normal font-['Lufga']">
            You won't be able to change this later.
          </p>
        </div>

        {/* Gender Informations */}
        <div className="flex flex-col mt-11 ">
          <h3 className=" text-white text-2xl font-bold font-['Lufga'] mb-4 ">
            Gender
          </h3>
          <GenderSelection
            setSelectedGender={setSelectedGender}
            selectedGender={selectedGender}
          />
        </div>

        {/* Swipe Button (Not exactly Swipe.) */}
        <div className=" mt-11">
          <SwipeButton Steps="Step 1 out of 3" handleSave={handleSave} />
        </div>

        <div className=" text-center my-7 mb-16 ">
          <p className="text-white text-xs font-medium font-['Lufga']">
            This will be shown on your profile.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfoOne;
