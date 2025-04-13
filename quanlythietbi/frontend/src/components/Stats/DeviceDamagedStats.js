import React from 'react';
import { AlertTriangle } from 'lucide-react';

const devices = [
    { id: 1, name: 'Laptop Dell', type: 'Laptop', status: 'inactive', importDate: '2023-05-10' },
    { id: 2, name: 'Máy in Canon', type: 'Máy in', status: 'damaged', importDate: '2022-12-01' },
    { id: 3, name: 'Bàn phím Logitech', type: 'Phụ kiện', status: 'lost', importDate: '2023-07-21' },
    { id: 4, name: 'Tai nghe Sony', type: 'Phụ kiện', status: 'active', importDate: '2024-01-15' },
    { id: 5, name: 'Máy chiếu Epson', type: 'Máy chiếu', status: 'damaged', importDate: '2023-03-08' },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'damaged':
            return {
                color: 'text-yellow-700',
                bg: 'bg-yellow-100 dark:bg-yellow-800/30',
                Icon: AlertTriangle,
                label: 'Hư hỏng'
            };
        default:
            return {
                color: 'text-gray-500',
                bg: 'bg-gray-100 dark:bg-gray-700',
                Icon: AlertTriangle,
                label: 'Không rõ'
            };
    }
};

const DeviceDamagedStats = () => {
    const damagedDevices = devices.filter(device => device.status === 'damaged');

    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Thống kê thiết bị hư hỏng
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Tên thiết bị
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Loại
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Trạng thái
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Ngày nhập
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {damagedDevices.map(device => {
                        const { color, bg, Icon, label } = getStatusStyle(device.status);
                        return (
                            <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">
                                    {device.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                                    {device.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full ${color} ${bg}`}>
                                            <Icon className="w-4 h-4" />
                                            {label}
                                        </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">
                                    {device.importDate}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeviceDamagedStats;
