import React from "react";
import Input from "./Input";
import SearchButton from "./SearchButton";

export default function VehicleInputContainer() {
  return (
    <div className="px-2">
      <div className="flex gap-[20px] rounded-[10px] border-2 border-[#E0E7FD] px-[20px] py-[14px]">
        <Input />
        <SearchButton />
      </div>
    </div>
  );
}
