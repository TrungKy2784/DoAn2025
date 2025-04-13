import React from 'react';
import { XCircle } from 'lucide-react';

const lostDevices = [
    { id: 1, name: 'Máy ảnh Sony', type: 'Thiết bị ghi hình', lostDate: '2023-11-02' },
    { id: 2, name: 'Điện thoại Samsung', type: 'Di động', lostDate: '2024-01-10' },
    { id: 3, name: 'Laptop Acer', type: 'Laptop', lostDate: '2024-03-15' },
];

const LostDevices = () => {
    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Thiết bị bị mất
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Tên thiết bị</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Loại</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Ngày bị mất</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {lostDevices.map(device => (
                        <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{device.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{device.lostDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LostDevices;
