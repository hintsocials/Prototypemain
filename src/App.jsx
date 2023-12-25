import "./App.css";
import Entry from "./pages/Entry";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import PersonalInfoOne from "./pages/PersonalInfoOne";
import PersonalInfoTwo from "./pages/PersonalInfoTwo";
import PersonalInfoThree from "./pages/PersonalInfoThree";
import PersonalInfoFour from "./pages/PersonalInfoFour";
import HintPremium from "./pages/HintPremium"
import Hint from "./pages/Hint";
import Profile from "./pages/Profile"
import Buffet from "./pages/Buffet";
// import Maps from "./pages/Maps";
import Premium from "./pages/Premium";
import Settings from "./pages/Settings";
import RetakeProfileImage from "./pages/RetakeProfileImage";
import ChatList from "./pages/Chats/ChatList";
import ChatPage from "./pages/Chats/ChatPage";
import Listing from "./pages/Listing";
import HintUserDetails from "./pages/HintUserDetails";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/info-1" element={<PersonalInfoOne />} />
          <Route path="/info-2" element={<PersonalInfoTwo />} />
          <Route path="/info-3" element={<PersonalInfoThree />} />
          <Route path="/info-4" element={<PersonalInfoFour />} />
          <Route path="/hint-premium" element={<HintPremium />} />
          <Route path="/hint" element={<Hint />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/buffet" element={<Buffet/>}/>
          {/* <Route path="/maps" element={<Maps/>}/> */}
          <Route path="/premium" element={<Premium/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/retake" element={<RetakeProfileImage/>}/>
          <Route path="/chat" element={<ChatList/>}/>
          <Route path="/chat/:chatId" element={<ChatPage/>}/>
          <Route path="/hintUSerDetails/:userId" element={<HintUserDetails/>}/>
          <Route path="/card-list" element={<Listing/>}/>
          <Route path="/restaurant-details" element={<RestaurantDetails/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
