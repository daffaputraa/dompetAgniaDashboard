import { ChartDonation, DonorList, FilterDropdown } from "../components";
import Container from "../components/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import DataDisplay from "../components/application-ui/data-display/stats/with_shared_borders";
import { useState, useEffect } from "react";
import { calculateDateRange } from "../utils/DateRange";

const Dashboard = () => {
  const [periode, setPeriode] = useState("Harian");
  const [rentangWaktu, setRentangWaktu] = useState("7 Hari Terakhir");
  const [dateRange, setDateRange] = useState(null);
  const [chartData, setChartData] = useState([]);

  const handlePeriodeChange = (newPeriode) => {
    setPeriode(newPeriode);
    // Reset rentang waktu sesuai periode
    switch (newPeriode) {
      case "Harian":
        setRentangWaktu("7 Hari Terakhir");
        break;
      case "Mingguan":
        setRentangWaktu("4 Minggu Terakhir");
        break;
      case "Bulanan":
        setRentangWaktu("3 Bulan Terakhir");
        break;
    }
  };

  const handleRentangWaktuChange = (newRentang) => {
    setRentangWaktu(newRentang);
  };

  const formatDate = (date, format = "harian") => {
    const options = {
      harian: { day: 'numeric', month: 'short' },
      mingguan: { day: 'numeric', month: 'short' },
      bulanan: { month: 'long', year: 'numeric' }
    };

    const formatter = new Intl.DateTimeFormat('id-ID', options[format]);
    return formatter.format(date);
  };

  useEffect(() => {
    const now = new Date();
    let startDate = new Date();
    let interval = 1;
    let format = "harian";

    // Set range dan interval berdasarkan filter
    switch (periode) {
      case "Harian":
        switch (rentangWaktu) {
          case "7 Hari Terakhir":
            startDate.setDate(now.getDate() - 6);
            break;
          case "14 Hari Terakhir":
            startDate.setDate(now.getDate() - 13);
            break;
          case "30 Hari Terakhir":
            startDate.setDate(now.getDate() - 29);
            break;
        }
        interval = 1;
        format = "harian";
        break;
      case "Mingguan":
        switch (rentangWaktu) {
          case "4 Minggu Terakhir":
            startDate.setDate(now.getDate() - (4 * 7 - 1));
            break;
          case "8 Minggu Terakhir":
            startDate.setDate(now.getDate() - (8 * 7 - 1));
            break;
          case "12 Minggu Terakhir":
            startDate.setDate(now.getDate() - (12 * 7 - 1));
            break;
        }
        interval = 7;
        format = "mingguan";
        break;
      case "Bulanan":
        switch (rentangWaktu) {
          case "3 Bulan Terakhir":
            startDate.setMonth(now.getMonth() - 2);
            break;
          case "6 Bulan Terakhir":
            startDate.setMonth(now.getMonth() - 5);
            break;
          case "12 Bulan Terakhir":
            startDate.setMonth(now.getMonth() - 11);
            break;
        }
        interval = 'month';
        format = "bulanan";
        break;
    }

    // Reset waktu ke awal hari
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(now);
    endDate.setHours(23, 59, 59, 999);

    const data = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const dateLabel = formatDate(currentDate, format);

      // Generate random donation data based on period
      let totalDonasi, totalTransaksi;
      if (periode === "Harian") {
        totalDonasi = Math.floor(Math.random() * 4000000) + 1000000;
        totalTransaksi = Math.floor(Math.random() * 150) + 50;
      } else if (periode === "Mingguan") {
        totalDonasi = Math.floor(Math.random() * 10000000) + 5000000;
        totalTransaksi = Math.floor(Math.random() * 300) + 200;
      } else {
        totalDonasi = Math.floor(Math.random() * 30000000) + 20000000;
        totalTransaksi = Math.floor(Math.random() * 700) + 800;
      }

      data.push({
        date: dateLabel,
        totalDonasi,
        totalTransaksi,
        formattedDonasi: new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(totalDonasi)
      });

      // Increment date based on interval
      if (interval === 'month') {
        currentDate.setMonth(currentDate.getMonth() + 1);
      } else {
        currentDate.setDate(currentDate.getDate() + interval);
      }
    }

    setChartData(data);
    setDateRange({
      startDate,
      endDate,
      formattedRange: `${formatDate(startDate, format)} - ${formatDate(endDate, format)}`
    });

  }, [periode, rentangWaktu]);

  return (
    <Container>
      <div className="flex gap-4">
        <FilterDropdown
          periode={periode}
          setPeriode={handlePeriodeChange}
          rentangWaktu={rentangWaktu}
          setRentangWaktu={handleRentangWaktuChange}
          dateRange={dateRange}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/5 flex flex-col gap-6">
          <DataDisplay dateRange={dateRange} />
          <ChartDonation
            data={chartData}
            periode={periode}
            rentangWaktu={rentangWaktu}
            dateRange={dateRange}
          />
        </div>
        <DonorList dateRange={dateRange} />
      </div>
    </Container>
  );
};

export default Dashboard;