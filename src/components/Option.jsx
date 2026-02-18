import React from "react";

export default function Option({ value }) {
  return (
    <span className="border-[rgba(87, 85, 186, 1)] flex h-[32px] w-[180px] shrink-0 cursor-pointer items-center justify-center border-r text-[16px] text-[#5755BA] hover:font-semibold">
      {value}
    </span>
  );
}
