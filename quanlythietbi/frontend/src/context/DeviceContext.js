// src/context/DeviceContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { TaiSanService } from '../services/taiSanService';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDevices = async () => {
        try {
            setLoading(true);
            const response = await TaiSanService.getAll();

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

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <DeviceContext.Provider value={{ devices, loading, error, fetchDevices }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevices = () => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error('useDevices must be used within a DeviceProvider');
    }
    return context;
};
