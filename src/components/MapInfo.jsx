import React from "react";
import mapImg from "../assets/mapImg.png";
export default function MapInfo() {
  return (
    <div className="flex flex-1 flex-col gap-[24px] rounded-[10px] border border-[#E0E7FD]">
      <div className="flex-[1.3]">
        <img src={mapImg} alt="dummy map image" className="h-full w-full" />
      </div>
      {/* map info */}
      <div className="flex flex-1 justify-between px-[15px]">
        <div className="flex flex-col gap-[14px]">
          <span>Body Type : abc</span>
          <span>Color : abc</span>
          <span>Registration : abc</span>
          <span>Insurance : abc</span>
        </div>
        <div className="flex flex-col gap-[14px]">
          <span>Vehicle Model : abc</span>
          <span>Fuel Type : abc</span>
          <span>Expiry : abc</span>
          <span>Expiry : : abc</span>
        </div>
      </div>
    </div>
  );
}
