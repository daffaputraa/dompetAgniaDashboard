import React from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

const ChartDonation = () => {
  // Data diubah menjadi tanggal dari 1 hingga 31
  const chartData = Array.from({ length: 31 }, (_, index) => ({
    date: `${index + 1}`, // Tanggal dari 1 hingga 31
    desktop: Math.floor(Math.random() * 300) + 50, // Data acak antara 50-350
  }));

  return (
    <div className="card bg-white rounded-xl p-6 flex flex-col gap-2">
      <div className="card-header py-3">
        <h2 className="card-title text-lg leading-6 font-medium text-gray-900">
          Statisik Sedekah
        </h2>
        <p className="card-description text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
          consectetur.
        </p>
      </div>

      <div className="chart-container overflow-x-auto py-4">
        <BarChart width={800} height={300} data={chartData}>
          <CartesianGrid vertical={false} stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="tooltip-content bg-gray-800 text-white rounded-lg px-4 py-2 shadow-md">
                    <p className="text-sm font-normal w-full ">
                      Tanggal:{" "}
                      <span className="font-semibold">
                        {payload[0].payload.date}
                      </span>
                    </p>
                    <p className="text-sm font-normal w-full">
                      Total Donasi:{" "}
                      <span className="font-semibold">
                        {payload[0].value} donasi
                      </span>
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="desktop" fill="#22c55e" radius={[2, 2, 2, 2]} />
        </BarChart>
      </div>
    </div>
  );
};

export default ChartDonation;
