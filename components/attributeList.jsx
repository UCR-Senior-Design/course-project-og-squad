import { IoIosTimer } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";

export default function AttributeList({ attributes, time, cals }) {
  // Map attribute names to their respective icons
  const attributeIcons = {
    highProtein: (
      <GiChickenOven style={{ color: "orange", fontSize: "24px" }} />
    ),
    vegan: <LuVegan style={{ color: "green", fontSize: "24px" }} />,
    glutenFree: <GiWheat style={{ color: "brown", fontSize: "24px" }} />,
  };
  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-4">
          <IoIosTimer />
          <p className="font-sans text-xs text-gray-500">{time} mins </p>
        </div>
        <div className="flex flex-col items-center">
          <FaFireFlameCurved className="text-red-500" />
          <p className="font-sans text-xs text-gray-500">{cals} cals</p>
        </div>

        {attributes.map((attribute, index) => (
          <div key={index} className="flex items-center justify-center ml-4">
            {attributeIcons[attribute]}
          </div>
        ))}
      </div>
    </div>
  );
}
