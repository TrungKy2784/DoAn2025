import React from 'react';
import { Clock, CheckCircle, RotateCcw } from 'lucide-react';

const DashBoardLists = () => {
    const devicesExpiring = [
        { id: 1, name: 'Laptop Dell', expirationDate: '2025-04-25' },
        { id: 2, name: 'Máy chiếu Epson', expirationDate: '2025-04-30' },
        { id: 3, name: 'Smartphone iPhone', expirationDate: '2025-04-28' },
    ];

    const devicesAwaitingApproval = [
        { id: 1, name: 'Máy in Canon', requestDate: '2025-04-10' },
        { id: 2, name: 'Bàn phím Logitech', requestDate: '2025-04-12' },
    ];

    const devicesAwaitingReturn = [
        { id: 1, name: 'Tai nghe Bose', requestDate: '2025-04-05' },
        { id: 2, name: 'Máy tính xách tay HP', requestDate: '2025-04-08' },
    ];

    const renderDeviceList = (devices, title, dateKey, Icon, color) => (
        <div className="mb-8">
            <div className="flex items-center mb-4">
                <div className={`w-9 h-9 flex items-center justify-center rounded-full ${color}/20`}>
                    <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">{title}</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
                <ul>
                    {devices.map(device => (
                        <li
                            key={device.id}
                            className="flex justify-between items-center border-b last:border-none border-gray-200 dark:border-gray-700 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md px-2"
                        >
                            <span className="text-gray-800 dark:text-gray-100">{device.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-300">
                            {dateKey === 'expirationDate' ? 'Hết hạn' : 'Ngày yêu cầu'}:{' '}
                                <span className="font-medium">{device[dateKey]}</span>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );


    return (
        <div className="w-full px-6 py-6 mx-auto">
            {/* Cards row */}
            <div className="flex flex-wrap -mx-3 mb-8">
                {/* Card 1 */}
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Today's Money</p>
                                <h5 className="text-xl font-bold text-gray-800 dark:text-white">$53,000</h5>
                                <p className="text-sm text-emerald-500 font-bold">+55% <span className="text-gray-500 dark:text-gray-400 font-normal">since yesterday</span></p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
                                <i className="ni ni-money-coins text-white text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Today's Users</p>
                                <h5 className="text-xl font-bold text-gray-800 dark:text-white">2,300</h5>
                                <p className="text-sm text-emerald-500 font-bold">+3% <span className="text-gray-500 dark:text-gray-400 font-normal">since last week</span></p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-tl from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                                <i className="ni ni-world text-white text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">New Clients</p>
                                <h5 className="text-xl font-bold text-gray-800 dark:text-white">+3,462</h5>
                                <p className="text-sm text-red-600 font-bold">-2% <span className="text-gray-500 dark:text-gray-400 font-normal">since last quarter</span></p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-tl from-emerald-500 to-teal-400 rounded-full flex items-center justify-center">
                                <i className="ni ni-paper-diploma text-white text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Sales</p>
                                <h5 className="text-xl font-bold text-gray-800 dark:text-white">$103,430</h5>
                                <p className="text-sm text-emerald-500 font-bold">+5% <span className="text-gray-500 dark:text-gray-400 font-normal">than last month</span></p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-tl from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                <i className="ni ni-cart text-white text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Device Lists */}
            {renderDeviceList(devicesExpiring, 'Thiết bị sắp hết hạn', 'expirationDate', Clock, 'bg-orange-500')}
            {renderDeviceList(devicesAwaitingApproval, 'Thiết bị chờ phê duyệt', 'requestDate', CheckCircle, 'bg-blue-500')}
            {renderDeviceList(devicesAwaitingReturn, 'Thiết bị chờ thu hồi', 'requestDate', RotateCcw, 'bg-red-500')}
        </div>
    );
};

export default DashBoardLists;
