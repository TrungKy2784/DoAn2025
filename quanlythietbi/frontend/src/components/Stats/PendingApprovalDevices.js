import React from 'react';
import { Clock } from 'lucide-react';

const pendingApprovalDevices = [
    { id: 1, name: 'Máy tính HP', type: 'Laptop', requestDate: '2025-04-01' },
    { id: 2, name: 'Máy in Canon', type: 'Máy in', requestDate: '2025-04-05' },
    { id: 3, name: 'Router Cisco', type: 'Mạng', requestDate: '2025-04-10' },
];

const PendingApprovalDevices = () => {
    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Thiết bị chờ duyệt cấp
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Tên thiết bị</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Loại</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Ngày yêu cầu</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {pendingApprovalDevices.length > 0 ? (
                        pendingApprovalDevices.map(device => (
                            <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{device.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{device.requestDate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                                Không có thiết bị nào đang chờ duyệt cấp.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingApprovalDevices;
