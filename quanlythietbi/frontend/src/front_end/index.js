import React from 'react';
import Header from "./partial/header";
import { Outlet } from 'react-router-dom';
import Sidenav from "./partial/sidenav";




function Index() {
    return (
        <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
            <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>

            {/* Sidenav */}
                <Sidenav />
            {/* Main Content */}
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                <Header />
                <Outlet /> {/* Chỉ giữ lại Outlet ở đây */}
            </main>
        </div>
    );
}

export default Index;
