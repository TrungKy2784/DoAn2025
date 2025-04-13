import React from 'react';
import { Undo2 } from 'lucide-react';

const pendingReturnDevices = [
    { id: 1, name: 'Laptop Lenovo', type: 'Laptop', requestDate: '2025-04-02' },
    { id: 2, name: 'Màn hình Samsung', type: 'Màn hình', requestDate: '2025-04-07' },
];

const PendingReturnDevices = () => {
    return (
        <div className="px-6 py-8 w-full mb-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <Undo2 className="w-6 h-6" />
                Thiết bị chờ duyệt trả
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Tên thiết bị</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Loại</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Ngày yêu cầu trả</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {pendingReturnDevices.length > 0 ? (
                        pendingReturnDevices.map(device => (
                            <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{device.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">{device.requestDate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                                Không có thiết bị nào đang chờ duyệt trả.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingReturnDevices;
