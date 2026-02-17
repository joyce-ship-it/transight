import React from "react";
import TruckInfo from "./TruckInfo";
import MapInfo from "./MapInfo";

export default function Infograph() {
  return (
    <div className="flex px-2 pt-2">
      <TruckInfo />
      <MapInfo />
    </div>
  );
}
