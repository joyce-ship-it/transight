import React from "react";
import truckImg from "../assets/truckImg.png";
import { RadialChartText } from "./RadialChartText";

export default function TruckInfo() {
  const chart2Data = {
    current: 350,
    max: 360,
    label: "Range",
    unit: "KM",
    color: null,
    startAngle: 90,
    maxDeg: 360,
    color1: "rgba(24, 144, 255, 1)",
    color2: "rgba(82, 196, 26, 1)",
  };
  const chart3Data = {
    current: 120,
    max: 150,
    label: "Speed",
    unit: "km/h",
    color: "rgba(24, 144, 255, 1)",
    startAngle: 210,
    maxDeg: 240,
    color1: null,
    color2: null,
  };
  return (
    <div className="flex border-2 border-[#E0E7FD] p-[30px] md:flex-[1.5]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="max-h-[445] max-w-[793]">
            <img src={truckImg} alt="truck" className="h-full w-full" />
          </div>
          <div className="flex gap-[66px]">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">150km</span>
              <div className="flex">
                <span></span>
                <span className="text-[16px]">Daily Distance</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">150420km</span>
                <div className="flex">
                  <span></span>
                  <span className="text-[16px]">Vehicle Odometer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[52px] md:flex-col">
          <RadialChartText />
          <RadialChartText {...chart2Data} />
          <RadialChartText {...chart3Data} />
        </div>
      </div>
    </div>
  );
}
