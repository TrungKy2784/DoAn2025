import React, { useState, useEffect } from 'react';
import { TaiSanService } from '../../services/taiSanService';

const DeviceStats = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Gọi API khi component được tạo
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        try {
            setLoading(true);
            const response = await TaiSanService.getAll();

            // Kiểm tra response từ API
            if (response.success) {
                setDevices(response.data);
            } else {
                setError(response.message || 'Lỗi khi lấy dữ liệu thiết bị');
            }
        } catch (err) {
            setError('Không thể kết nối đến server');
            console.error('Error fetching devices:', err);
        } finally {
            setLoading(false);
        }
    };

    // Hiển thị trạng thái loading
    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    // Hiển thị lỗi nếu có
    if (error) {
        return <div className="error">{error}</div>;
    }

    // Hiển thị dữ liệu
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Thống kê thiết bị</h2>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Mã tài sản</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Tên tài sản</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Trạng thái</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Ngày nhập</th>
                </tr>
                </thead>
                <tbody>
                {devices.map(device => (
                    <tr key={device.id}>
                        <td className="px-6 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.ma_ts}</td>
                        <td className="px-6 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.ten_ts}</td>
                        <td className="px-6 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.trang_thai}</td>
                        <td className="px-6 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">{device.ngay_nhap}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceStats;
