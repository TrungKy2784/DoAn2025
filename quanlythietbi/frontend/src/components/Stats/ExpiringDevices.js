import React from 'react';
import { AlertTriangle } from 'lucide-react';
import dayjs from 'dayjs';

const expiringDevices = [
    { id: 1, name: 'Máy chiếu Epson', type: 'Máy chiếu', expireDate: '2025-04-20' },
    { id: 2, name: 'Máy in HP', type: 'Máy in', expireDate: '2025-05-01' },
    { id: 3, name: 'Switch TP-Link', type: 'Mạng', expireDate: '2025-05-05' },
];

// Giả định thiết bị sắp hết hạn nếu còn dưới 30 ngày
const soonThreshold = 30;

const isExpiringSoon = (date) => {
    const today = dayjs();
    const target = dayjs(date);
    return target.diff(today, 'day') <= soonThreshold;
};

const ExpiringDevices = () => {
    const filtered = expiringDevices.filter(device => isExpiringSoon(device.expireDate));

    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Thiết bị sắp hết hạn
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Tên thiết bị</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Loại</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Hạn sử dụng</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filtered.length > 0 ? (
                        filtered.map(device => (
                            <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{device.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{device.expireDate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                                Không có thiết bị nào sắp hết hạn.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpiringDevices;
