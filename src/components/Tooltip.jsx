import React, { memo } from "react";

const Tooltip = memo(({payload}) => {
  return (
    <div className="tooltip-content bg-gray-800 text-white rounded-lg px-4 py-2 shadow-md">
      <p className="text-sm font-normal w-full ">
        Tanggal:{" "}
        <span className="font-semibold">{payload[0].payload.date}</span>
      </p>
      <p className="text-sm font-normal w-full">
        Total Donasi:{" "}
        <span className="font-semibold">{payload[0].value} donasi</span>
      </p>
    </div>
  );
});

export default Tooltip;
