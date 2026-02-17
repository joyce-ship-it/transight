import React from "react";
import { Truck, Clock } from "lucide-react";
function getIcon(icon) {
  switch (icon) {
    case "vehicle":
      return <Truck />;
    default:
      return <Clock />;
  }
}
export default function HeaderButton({
  bgColor,
  color,
  itemType,
  value,
  icon,
}) {
  return (
    <div
      style={{ backgroundColor: bgColor, color }}
      className="flex flex-1 items-center justify-between gap-2 rounded-[8px] p-2"
    >
      <div className="flex flex-col">
        <span className="">{itemType}</span>
        <span className="">{value}</span>
      </div>
      <div>{getIcon(icon)}</div>
    </div>
  );
}
