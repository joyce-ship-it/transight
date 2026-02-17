import React from "react";

export default function Option({ value }) {
  return (
    <span className="flex-1 cursor-pointer border-r-2 border-blue-400 px-2 text-center text-[#5755BA] hover:font-bold">
      {value}
    </span>
  );
}
