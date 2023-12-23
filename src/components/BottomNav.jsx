import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Iconone from "../assets/icons/Iconone.svg";
import Icontwo from "../assets/icons/Icontwo.svg";
import Iconthree from "../assets/icons/Iconthree.svg";
import Iconfour from "../assets/icons/Iconfour.svg";
import Iconfive from "../assets/icons/Iconfive.svg";

import IcononeActive from "../assets/icons/IcononeActive.svg";
import IcontwoActive from "../assets/icons/IcontwoActive.svg";
import IconthreeActive from "../assets/icons/IconthreeActive.svg";
import IconfourActive from "../assets/icons/IconfourActive.svg";
import IconfiveActive from "../assets/icons/IconfiveActive.svg";

const BottomNav = () => {
  const Menu = [Iconone, Icontwo, Iconthree, Iconfour, Iconfive];
  const ActiveMenu = [
    IcononeActive,
    IcontwoActive,
    IconthreeActive,
    IconfourActive,
    IconfiveActive,
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    switch (index) {
      case 0:
        navigate("/maps", { state: { iconIndex: index } });
        break;
      case 1:
        navigate("/profile", { state: { iconIndex: index } });
        break;
      case 2:
        navigate("/hint-premium", { state: { iconIndex: index } });
        break;
      case 3:
        navigate("/buffet", { state: { iconIndex: index } });
        break;
      case 4:
        navigate("/chat", { state: { iconIndex: index } });
        break;
    }
    setActiveButton(index);
  };

// Have to replace the Premium user is true or not .
  const isPremiumUser = true; 

  const getPaths = (premium) => {
    return premium
      ? ["/maps", "/profile", "/hint-premium", "/buffet", "/chat"]
      : ["/maps", "/profile", "/hint", "/buffet", "/chat"];
  };

  const paths = getPaths(isPremiumUser);

  // Update the active button based on the current location pathname
  useEffect(() => {
    const currentIndex = paths.findIndex((path) => location.pathname.includes(path));
    setActiveButton(currentIndex);
  }, [location.pathname, paths]);



  return (
    <div className=" text-white w-full flex justify-around items-center bg-black rounded-full">
      {Menu.map((icon, index) => (
        <button
          key={index}
          // onClick={() => handleButtonClick(index)}
          onClick={() => {
            navigate(paths[index]);
            setActiveButton(index);
          }}
          className={`custom-bottom-navigation-height bg-black rounded-[29.50px]`}
        >
          <img
            src={activeButton === index ? ActiveMenu[index] : icon}
            alt={`Icon ${index}`}
            className={`px-3 custom-bottom-navigation-height-icon `}
          />
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
