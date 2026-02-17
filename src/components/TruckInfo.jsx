import React from "react";
import truckImg from "../assets/truckImg.png";
import data1 from "../assets/data-1.png";
import data2 from "../assets/data-2.png";
import data3 from "../assets/data-3.png";

export default function TruckInfo() {
  return (
    <div className="flex border-2 border-[#E0E7FD]">
      <div className="flex flex-col">
        <div>
          <img src={truckImg} alt="truck" />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <img src={data1} />
        </div>
        <div>
          <img src={data2} />
        </div>
        <div>
          <img src={data3} />
        </div>
      </div>
    </div>
  );
}
