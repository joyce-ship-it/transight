import React from "react";
import TruckInfo from "./TruckInfo";
import MapInfo from "./MapInfo";

export default function Infograph() {
  return (
    <div className="pt-[30px] pb-4">
      <div className="flex flex-col gap-[30px] px-2 pt-2 md:flex-row">
        <TruckInfo />
        <MapInfo />
      </div>
    </div>
  );
}
