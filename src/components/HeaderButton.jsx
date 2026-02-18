import React from "react";
import { Truck, Clock } from "lucide-react";
import smallTruck from "../assets/smallTruck.png";
import upArrow from "../assets/upArrow.png";
import error from "../assets/error.png";
import greenClock from "../assets/greenClock.png";
import clock from "../assets/clock.png";
import warning from "../assets/warning.png";
function getImg(imgName) {
  switch (imgName) {
    case "truck":
      return smallTruck;
    case "error":
      return error;
    case "warning":
      return warning;
    case "upArrow":
      return upArrow;
    case "clock":
      return clock;
    case "greenClock":
      return greenClock;
    default:
      return smallTruck;
  }
}
console.log(smallTruck);
export default function HeaderButton({ bgColor, itemType, value, imgName }) {
  const imgSrc = getImg(imgName);
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="text-[rgba(35, 41, 61, 1)] flex w-[244px] shrink-0 items-center justify-between rounded-[10px] border-[2px] border-none p-[20px]"
    >
      <div className="text-[] flex flex-col">
        <span className="text-[14px]">{itemType}</span>
        <span className="text-[26px]">{value}</span>
      </div>
      <div className="h-[40px] w-[40px]">
        <img src={imgSrc} alt="truck icon" className="h-full w-full" />
      </div>
    </div>
  );
}
