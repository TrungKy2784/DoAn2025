import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const devices = [
    { id: 1, name: 'Laptop Dell', type: 'Laptop', status: 'inactive', importDate: '2023-05-10' },
    { id: 2, name: 'Máy in Canon', type: 'Máy in', status: 'active', importDate: '2022-12-01' },
    { id: 3, name: 'Bàn phím Logitech', type: 'Phụ kiện', status: 'inactive', importDate: '2023-07-21' },
    { id: 4, name: 'Tai nghe Sony', type: 'Phụ kiện', status: 'active', importDate: '2024-01-15' },
    { id: 5, name: 'Máy chiếu Epson', type: 'Máy chiếu', status: 'inactive', importDate: '2023-03-08' },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'active':
            return { color: 'text-green-600', bg: 'bg-green-100', Icon: CheckCircle, label: 'Đang hoạt động' };
        case 'inactive':
            return { color: 'text-gray-500', bg: 'bg-gray-100', Icon: XCircle, label: 'Chưa sử dụng' };
        default:
            return { color: 'text-gray-500', bg: 'bg-gray-100', Icon: CheckCircle, label: 'Không rõ' };
    }
};

const DeviceNotUsed = () => {
    const notUsedDevices = devices.filter(device => device.status === 'inactive');

    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Thống kê thiết bị chưa được sử dụng</h2>
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
                    {notUsedDevices.map(device => {
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
    );
};

export default DeviceNotUsed;
