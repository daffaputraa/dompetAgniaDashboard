import React from "react";

const DonorList = () => {
  return (
    <div className="bg-white p-6 rounded-xl mt-5 lg:w-2/5 space-y-5">
      <div className="card-header py-3">
        <h2 className="card-title text-lg leading-6 font-medium text-gray-900">
          Sedekah baru-baru ini
        </h2>
        <p className="card-description text-sm text-gray-500">
          Berikut adalah daftar sedekah yang baru saja masuk:
        </p>
      </div>

      <div className="flex flex-col divide-y max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {Array.from({ length: 34 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-between p-3 items-center hover:bg-gray-50 transition-colors duration-150"
          >
            {/* Informasi Detail */}
            <div className="flex flex-col gap-1 w-2/3">
              <h3 className="text-gray-800 font-medium truncate">
                Firdan Umar
              </h3>
              <h4 className="text-gray-500 text-xs">09-01-2025</h4>
            </div>

            {/* Informasi Nilai */}
            <p className="font-semibold text-gray-900 text-sm">+Rp.25.000</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorList;
