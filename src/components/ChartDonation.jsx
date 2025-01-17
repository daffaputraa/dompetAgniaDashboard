import React from "react";
import { CartesianGrid, XAxis, YAxis, Line, LineChart, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border">
        <p className="text-sm font-semibold mb-2">{label}</p>
        <div className="space-y-2">
          <p className="text-sm">
            Total Donasi: <span className="font-semibold">{data.formattedDonasi}</span>
          </p>
          <p className="text-sm">
            Jumlah Transaksi: <span className="font-semibold">{data.totalTransaksi} transaksi</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const ChartDonation = ({ data, periode, rentangWaktu, dateRange }) => {
  // Hitung total
  const totalSemuaDonasi = data.reduce((sum, item) => sum + item.totalDonasi, 0);
  const totalSemuaTransaksi = data.reduce((sum, item) => sum + item.totalTransaksi, 0);
  const rataRataDonasi = totalSemuaDonasi / data.length;

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Generate summary text based on periode
  const getSummaryText = () => {
    const timeUnit = periode.toLowerCase();
    return `Rata-rata ${formatCurrency(rataRataDonasi)} per ${timeUnit}`;
  };

  return (
    <div className="card bg-white rounded-xl p-6 flex flex-col gap-2 shadow">
      <div className="card-header py-3 flex flex-col gap-1">
        <h2 className="card-title text-lg leading-6 font-medium text-gray-900">
          Statistik Sedekah
        </h2>
        <p className="card-description text-sm text-gray-500">
          {dateRange?.formattedRange && `Periode ${dateRange.formattedRange}`}
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  left: 12,
                  right: 30,
                  top: 20,
                  bottom: 20
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  stroke="#888"
                  fontSize={12}
                />
                <YAxis
                  tickFormatter={(value) => `Rp ${(value / 1000000).toFixed(0)}M`}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  stroke="#888"
                  fontSize={12}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: '#888', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Line
                  dataKey="totalDonasi"
                  name="Total Donasi"
                  type="monotone"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{
                    fill: "#2563eb",
                    r: 4,
                    strokeWidth: 2
                  }}
                  activeDot={{
                    r: 6,
                    stroke: "#2563eb",
                    strokeWidth: 2,
                    fill: "#fff"
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
       
      </Card>
    </div>
  );
};

export default ChartDonation;