import React from "react";
import Option from "./Option";

export default function Options() {
  return (
    <div className="px-1">
      <div className="scrollbar-hide my-4 flex gap-[10px] overflow-x-auto rounded-xl border-2 border-[#E0E7FD] py-[6px]">
        <Option value={"Vehicle Status"} />
        <Option value={"Add Vehicle"} />
        <Option value={"Locate Vehicle"} />
        <Option value={"Vehicle Route"} />
        <Option value={"Vehicle History"} />
        <Option value={"Vehicle Certificate"} />
        <Option value={"Vehicle Logs"} />
        <Option value={"Vehicle Transfer"} />
      </div>
    </div>
  );
}
