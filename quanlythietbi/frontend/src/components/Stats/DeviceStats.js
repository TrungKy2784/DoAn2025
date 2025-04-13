import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const devices = [
    { id: 1, name: 'Laptop Dell', type: 'Laptop', status: 'active', importDate: '2023-05-10' },
    { id: 2, name: 'Máy in Canon', type: 'Máy in', status: 'damaged', importDate: '2022-12-01' },
    { id: 3, name: 'Bàn phím Logitech', type: 'Phụ kiện', status: 'lost', importDate: '2023-07-21' },
    { id: 4, name: 'Tai nghe Sony', type: 'Phụ kiện', status: 'active', importDate: '2024-01-15' },
    { id: 5, name: 'Máy chiếu Epson', type: 'Máy chiếu', status: 'damaged', importDate: '2023-03-08' },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'active':
            return { color: 'text-green-600', bg: 'bg-green-100', Icon: CheckCircle, label: 'Đang hoạt động' };
        case 'damaged':
            return { color: 'text-yellow-500', bg: 'bg-yellow-100', Icon: AlertTriangle, label: 'Hư hỏng' };
        case 'lost':
            return { color: 'text-red-500', bg: 'bg-red-100', Icon: XCircle, label: 'Bị mất' };
        default:
            return { color: 'text-gray-500', bg: 'bg-gray-100', Icon: CheckCircle, label: 'Không rõ' };
    }
};

const DeviceStats = () => {
    const statusCounts = devices.reduce((acc, d) => {
        acc[d.status] = (acc[d.status] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Thống kê thiết bị đang quản lý</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Table Section */}
                <div className="col-span-2">
                    <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Tên thiết bị</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Loại</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Trạng thái</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Ngày nhập</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {devices.map(device => {
                                const { color, Icon, label } = getStatusStyle(device.status);
                                return (
                                    <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{device.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                                            <Icon className={`w-5 h-5 ${color}`} />
                                            <span className={`capitalize ${color}`}>{label}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{device.importDate}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Stats Sidebar */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Tổng quan</h3>
                    <div className="flex gap-4 justify-between items-center">
                        {['active', 'damaged', 'lost'].map((status, index, arr) => {
                            const { color, bg, Icon, label } = getStatusStyle(status);
                            return (
                                <div
                                    key={status}
                                    className={`flex items-center flex-1 p-4 rounded-lg ${bg} dark:bg-opacity-10 
                    ${index < arr.length - 1 ? 'border-r border-gray-300 dark:border-gray-600' : ''}`}
                                >
                                    <div className={`p-2 rounded-full ${color} bg-opacity-20`}>
                                        <Icon className={`w-6 h-6 ${color}`} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</p>
                                        <p className={`text-xl font-bold ${color}`}>{statusCounts[status] || 0}</p>
                                    </div>
                                    {/* Divider (the point of interest) */}
                                    {index < arr.length - 1 && (
                                        <div className="hidden sm:block w-px h-full bg-gray-300 dark:bg-gray-600 mx-4"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeviceStats;
