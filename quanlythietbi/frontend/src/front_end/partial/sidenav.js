import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
    return (
        <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white dark:bg-slate-850 border-0 shadow-xl dark:shadow-none max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
               aria-expanded="false">
            <div className="h-19">
                <i className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
                   data-sidenav-close></i>
                <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
                   href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
                   target="_blank" rel="noopener noreferrer">
                    <img src='img/logo-ct-dark.png'
                         className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
                         alt="main_logo" />
                    <img src='img/logo-ct.png'
                         className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
                         alt="main_logo" />
                    <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Argon Dashboard 2</span>
                </a>
            </div>

            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>

            <div className="items-center block w-auto max-h-screen overflow-auto  grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-0.5 w-full">
                        <Link to="/dashboard"
                            className="flex items-center py-2.5 px-4 bg-blue-500/13 dark:text-white text-sm font-semibold text-slate-700 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-500/20"
                        >
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-blue-500">
                                <i className="relative top-0 text-sm leading-normal ni ni-tv-2"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none"> Dashboard </span>
                        </Link>
                    </li>

                    <li className="mt-0.5 w-full">
                        <Link to="/devices"
                            className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           >
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-orange-500 fas fa-tags"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Device Stats</span>
                        </Link>
                    </li>

                    <li className="mt-0.5 w-full">
                        <Link to="/deviceNotUsed"
                            className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           >
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-emerald-500 fas fa-truck"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Device Not Used</span>
                        </Link>
                    </li>


                    <li className="mt-0.5 w-full">
                        <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           href="./pages/virtual-reality.html">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-cyan-500 fas fa-arrow-down"></i>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease">Stock IN</span>
                        </a>
                    </li>

                    <li className="mt-0.5 w-full">
                        <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           href="./pages/rtl.html">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-arrow-up"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Stock Out</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           href="./pages/rtl.html">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-boxes"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Stock On Hand</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           href="./pages/rtl.html">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-chart-bar"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Statistical Report</span>
                        </a>
                    </li>

                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account
                            pages</h6>
                    </li>

                    <li className="mt-0.5 w-full">
                        <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                           href="./pages/profile.html">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Profile</span>
                        </a>
                    </li>

                    <li className="mt-0.5 w-full">
                        <Link
                            to="/signin"
                            className="dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
                        </Link>
                    </li>

                    <li className="mt-0.5 w-full">
                        <Link className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                              to="/signup">
                            <div
                                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </aside>
    );
}
export default SideNav;