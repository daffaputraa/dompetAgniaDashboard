import { useEffect } from "react";
import Dropdown from "../components/application-ui/elements/dropdowns/simple"
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const FilterDropdown = ({
  periode,
  setPeriode,
  rentangWaktu,
  setRentangWaktu,
  dateRange
}) => {
  const dataOptionPeriode = [
    {
      id: 1,
      option: "Harian"
    },
    {
      id: 2,
      option: "Mingguan"
    },
    {
      id: 3,
      option: "Bulanan"
    }
  ];

  const dataOptionRentang = [
    {
      id: 1,
      option_harian: "7 Hari Terakhir",
      option_minggu: "4 Minggu Terakhir",
      option_bulanan: "3 Bulan Terakhir"
    },
    {
      id: 2,
      option_harian: "14 Hari Terakhir",
      option_minggu: "8 Minggu Terakhir",
      option_bulanan: "6 Bulan Terakhir"
    },
    {
      id: 3,
      option_harian: "30 Hari Terakhir",
      option_minggu: "12 Minggu Terakhir",
      option_bulanan: "12 Bulan Terakhir"
    }
  ];

  return (
    <header className="flex flex-col lg:flex-row gap-4">
      <div className="filter flex w-full gap-4">
        {/* Dropdown Rentang Periode */}
        <div className="flex flex-col gap-1">
          <span className="font-bold text-gray-700 text-xs">PERIODE</span>
          <Dropdown
            periode={periode}
            setPeriode={setPeriode}
            data={dataOptionPeriode}
            type="periode"
          />
        </div>
        {/* Dropdown Rentang Waktu */}
        <div className="flex flex-col gap-1">
          <span className="font-bold text-gray-700 text-xs">BATAS WAKTU</span>
          <Dropdown
            periode={periode}
            setPeriode={setRentangWaktu}
            data={dataOptionRentang}
            type="rentang"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 flex-shrink-0">
        <span className="font-bold text-gray-700 text-xs">RENTANG WAKTU</span>
        <div className="flex items-center gap-1 min-w-[180px] w-full gap-x-1.5 rounded-md py-2 text-sm font-semibold">
          <CalendarDaysIcon className="w-4 text-gray-600" />
          <h1 className="font-bold text-sm text-gray-900">{dateRange?.formattedRange}</h1>
        </div>
      </div>
    </header>
  );
};

export default FilterDropdown;