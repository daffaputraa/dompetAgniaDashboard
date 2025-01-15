// date-utils.js
export const calculateDateRange = (periode, rentangWaktu) => {
    const endDate = new Date(); // Tanggal hari ini
    let startDate = new Date(); // Akan dimodifikasi berdasarkan periode dan rentang

    // Helper function untuk format tanggal
    const formatDate = (date) => {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`; // Format: DD Bulan YYYY (contoh: 15 Januari 2024)
    };

    // Untuk periode Harian
    if (periode.toLowerCase() === 'harian') {
        switch (rentangWaktu) {
            case '7 Hari Terakhir':
                startDate.setDate(endDate.getDate() - 7);
                break;
            case '14 Hari Terakhir':
                startDate.setDate(endDate.getDate() - 14);
                break;
            case '30 Hari Terakhir':
                startDate.setDate(endDate.getDate() - 30);
                break;
            default:
                startDate.setDate(endDate.getDate() - 7);
        }
    }

    // Untuk periode Mingguan
    else if (periode.toLowerCase() === 'mingguan') {
        switch (rentangWaktu) {
            case '4 Minggu Terakhir':
                startDate.setDate(endDate.getDate() - (4 * 7));
                break;
            case '8 Minggu Terakhir':
                startDate.setDate(endDate.getDate() - (8 * 7));
                break;
            case '12 Minggu Terakhir':
                startDate.setDate(endDate.getDate() - (12 * 7));
                break;
            default:
                startDate.setDate(endDate.getDate() - (4 * 7));
        }
    }

    // Untuk periode Bulanan
    else if (periode.toLowerCase() === 'bulanan') {
        switch (rentangWaktu) {
            case '3 Bulan Terakhir':
                startDate.setMonth(endDate.getMonth() - 3);
                break;
            case '6 Bulan Terakhir':
                startDate.setMonth(endDate.getMonth() - 6);
                break;
            case '12 Bulan Terakhir':
                startDate.setMonth(endDate.getMonth() - 12);
                break;
            default:
                startDate.setMonth(endDate.getMonth() - 3);
        }
    }

    return {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        // Tambahan informasi yang berguna
        totalDays: Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)),
        formattedRange: `${formatDate(startDate)} - ${formatDate(endDate)}`
    };
};