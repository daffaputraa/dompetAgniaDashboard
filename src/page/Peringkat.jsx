import { useEffect, useState } from "react";
import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import Dropdown from "../components/application-ui/elements/dropdowns/simple"
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Table from "../components/application-ui/lists/tables/with_avatars_and_multi_line_content"
import { calculateDateRange } from "../utils/DateRange";

const Peringkat = () => {

  const [periode, setPeriode] = useState("Harian");
  const [rentangWaktu, setRentangWaktu] = useState("7 Hari Terakhir");
  const [dateRange, setDateRange] = useState(null);

    // useEffect(() => {
    //   const newDateRange = calculateDateRange(periode, rentangWaktu);
    //   setDateRange(newDateRange);
  
    //   fetchData(newDateRange.startDate, newDateRange.endDate);
    // }, [periode, rentangWaktu]);



  useEffect(() => {

    const newDateRange = calculateDateRange(periode, rentangWaktu);
    setDateRange(newDateRange);

    fetchData(newDateRange.startDate, newDateRange.endDate);
  }, [periode, rentangWaktu]);

  const fetchData = async (startDate, endDate) => {
    try {
      // Contoh logging date range
      console.log(`Fetching data from ${startDate} to ${endDate}`);
      // Implementasi fetch data dari API
      // const response = await fetch(`/api/donations?start=${startDate}&end=${endDate}`);
      // const data = await response.json();
      // setDonationData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

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
    <>
        <Container>
        <div className="flex gap-4">
          {/* Dropdown Periode */}
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

          <div className="flex flex-col gap-1">
            <span className="font-bold text-gray-700 text-xs">RENTANG WAKTU</span>
            <div className="flex items-center gap-1 px-2  min-w-[140px] justify-between gap-x-1.5 rounded-md  py-2 text-sm font-semibold  ">
              <CalendarDaysIcon className="w-4 text-gray-600" />
              <h1 className="font-bold text-sm text-gray-900">{dateRange?.formattedRange}</h1>
              {/* <Badge>
              1 Oktober
            </Badge> */}
            </div>
          </div>
        </div>
            <Table/>
        </Container>
    </>
  )
}

export default Peringkat