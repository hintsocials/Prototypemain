
import { useUser } from '../context/UserContext';

const Interest = () => {
  const interests = [
    "Romance", "Whiskey", "Sci-fi", "Horror", "Photography","Pets",
    "Education", "Philosophy", "Cars","Humour",  "Movies", "Bollywood",
    "Gaming", "Burger", "Long Drives", "Karaoke", "Party", "Entertainment",
    "Pizza", "Beer", "Fitness", "Stand-ups", "Thrillers", "Make-up", "Painting",
    "Biriyani", "Shopping", "Sports", "Cooking","Cafe hopping"
  ];

  const { userData, updateUser } = useUser();

  const handleClickInterest = (interest) => {
    const updatedInterests = userData.interests.includes(interest)
      ? userData.interests.filter((selectedInterest) => selectedInterest !== interest)
      : [...userData.interests, interest];

    updateUser({ interests: updatedInterests });
  }
  return (
    <div className=" flex flex-wrap justify-items-center justify-center  gap-2">
      {interests.map((interest, index) => (
        <button
          key={index}
          className={`bg-black border-gradient-rounded text-center text-base font-normal font-['Lufga'] rounded-full border outline-none px-3 h-fit py-[7px] text-white ${
            userData.interests.includes(interest)
              ? "text-white bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] border-none"
              : ""
          }`}
          onClick={() => handleClickInterest(interest)}
        >
          {interest}
        </button>
      ))}
    </div>
  );
};

export default Interest;
