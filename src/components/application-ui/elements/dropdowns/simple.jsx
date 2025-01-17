import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example({ data, periode, setPeriode, type = "periode" }) {
  // State untuk menyimpan pilihan yang dipilih
  const [selected, setSelected] = useState(type === "periode" ? "Harian" : getDefaultValue(periode));

  // Update selected value ketika periode berubah
  useEffect(() => {
    if (type === "rentang") {
      setSelected(getDefaultValue(periode));
    }
  }, [periode, type]);

  
  function getDefaultValue(currentPeriode) {
    switch (currentPeriode.toLowerCase()) {
      case "harian":
        return "7 Hari Terakhir";
      case "mingguan":
        return "4 Minggu Terakhir";
      case "bulanan":
        return "3 Bulan Terakhir";
      default:
        return "7 Hari Terakhir";
    }
  }

  // Helper function untuk mendapatkan opsi berdasarkan periode
  function getOptions() {
    if (type === "periode") {
      return data;
    }

    // Jika tipe rentang waktu, filter berdasarkan periode yang dipilih
    return data.map(item => ({
      id: item.id,
      option: periode.toLowerCase() === "harian" ? item.option_harian :
        periode.toLowerCase() === "mingguan" ? item.option_minggu :
          item.option_bulanan
    })).filter(item => item.option); // Filter out empty options
  }

  const handleSelection = (selection) => {
    setPeriode(selection);
    setSelected(selection);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex min-w-[140px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {selected}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 h-5 w-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems className="absolute right-0 lg:left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {getOptions().map((item, index) => (
            <MenuItem key={item.id}>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleSelection(item.option)}
                  className={`block px-4 py-2 text-sm capitalize ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                >
                  {item.option}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}