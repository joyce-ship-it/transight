import React from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <div className="scrollbar-hide mb-[23px] flex gap-[7px] overflow-x-auto px-2">
      <HeaderButton
        bgColor={"#5755BA"}
        itemType={"Total Vehicle"}
        value={"192542"}
        imgName="truck"
      />
      <HeaderButton
        bgColor={"rgba(101, 133, 246,.2)"}
        itemType={"Total Devices"}
        value={"244891"}
        imgName="upArrow"
      />
      <HeaderButton
        bgColor={"rgba(161, 85, 185,.2)"}
        itemType={"Total Customers"}
        value={"139395"}
        imgName="clock"
      />
      <HeaderButton
        bgColor={"rgba(247, 101, 163,.2)"}
        itemType={"Live Vehicles"}
        value={"90085"}
        imgName="warning"
      />
      <HeaderButton
        bgColor={"rgba(104, 0, 34,.2)"}
        itemType={"Data Disconnected "}
        value={"8760"}
        imgName="error"
      />
      <HeaderButton
        bgColor={"rgba(0, 0, 0,.2)"}
        itemType={"Power Disconnected "}
        value={"5847"}
        imgName="greenClock"
      />
      <HeaderButton
        bgColor={"rgba(87, 85, 186,.2)"}
        itemType={"Live Devices"}
        value={"2806"}
        imgName="error"
      />
    </div>
  );
}
