import React from "react";
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <body
            className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
        {/*// <!-- Navbar -->*/}
        <nav
            className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
            <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
                <a className="py-1.75 ml-4 mr-4 font-bold text-white text-sm whitespace-nowrap lg:ml-0"
                   href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
                   target="_blank"> Argon Dashboard 2 </a>
                <button navbar-trigger
                        className="px-3 py-1 ml-2 leading-none transition-all ease-in-out bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg lg:hidden"
                        type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
            <span bar1
                  className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
            <span bar2
                  className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
            <span bar3
                  className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
          </span>
                </button>
                <div navbar-menu
                     className="items-center flex-grow transition-all ease duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-2xl lg:flex lg:basis-auto">
                    <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg-max:py-2 lg:flex-row xl:ml-auto">
                        <li>
                            <Link className="flex items-center px-4 py-2 mr-2 font-normal text-white transition-all ease-in-out duration-250 lg-max:opacity-0 lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75"
                               aria-current="page" to="/dashboard">
                                <i className="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a className="block px-4 py-2 mr-2 font-normal text-white transition-all ease-in-out duration-250 lg-max:opacity-0 lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75"
                               href="../pages/profile.html">
                                <i className="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60"></i>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 mr-2 font-normal text-white transition-all ease-in-out duration-250 lg-max:opacity-0 lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75"
                               href="../pages/sign-up.html">
                                <i className="mr-1 text-white lg-max:text-slate-700 fas fa-user-circle opacity-60"></i>
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 mr-2 font-normal text-white transition-all ease-in-out duration-250 lg-max:opacity-0 lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75"
                               href="../pages/sign-in.html">
                                <i className="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                                Sign In
                            </a>
                        </li>
                    </ul>

                    <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                        <li>
                            <a href="https://www.creative-tim.com/product/argon-dashboard-tailwind" target="_blank"
                               className="inline-block px-8 py-2 mb-0 mr-1 font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 text-xs tracking-tight-rem bg-gradient-to-tl from-gray-400 to-gray-100 text-slate-800">Free
                                Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main className="mt-0 transition-all duration-200 ease-in-out">
            <section className="min-h-screen">
                <div
                    className="bg-top relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-cover min-h-50-screen rounded-xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg')]">
                    <span
                        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 opacity-60"></span>
                    <div className="container z-10">
                        <div className="flex flex-wrap justify-center -mx-3">
                            <div
                                className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                <h1 className="mt-12 mb-2 text-white">Welcome!</h1>
                                <p className="text-white">Use these awesome forms to login or create new account in your
                                    project for free.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                        <div
                            className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                            <div
                                className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
                                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                    <h5>Register</h5>
                                </div>

                                <div className="flex-auto p-6">
                                    <form role="form text-left">
                                        <div className="mb-4">
                                            <input type="text"
                                                   className="placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="Name" aria-label="Name" aria-describedby="email-addon"/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="email"
                                                   className="placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="Email" aria-label="Email"
                                                   aria-describedby="email-addon"/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="password"
                                                   className="placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="Password" aria-label="Password"
                                                   aria-describedby="password-addon"/>
                                        </div>
                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                            <input
                                                className="w-4.8 h-4.8 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                type="checkbox" value="" checked/>
                                            <label
                                                className="mb-2 ml-1 font-normal cursor-pointer text-sm text-slate-700"
                                                htmlFor="flexCheckDefault"> I agree the <a href="javascript:;"
                                                                                           className="font-bold text-slate-700">Terms
                                                and Conditions</a> </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button"
                                                    className="inline-block w-full px-5 py-2.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign
                                                up
                                            </button>
                                        </div>
                                        <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <a
                                            href="../pages/sign-in.html" className="font-bold text-slate-700">Sign
                                            in</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Company </a>
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> About Us </a>
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Team </a>
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Products </a>
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Blog </a>
                            <a href="javascript:;" target="_blank"
                               className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Pricing </a>
                        </div>
                        <div
                            className="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
                            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg fab fa-dribbble"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg fab fa-twitter"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg fab fa-instagram"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg fab fa-pinterest"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg fab fa-github"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                            <p className="mb-0 text-slate-400">
                                Copyright ©
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                Argon Dashboard 2 by Creative Tim.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
        </body>

    );
}

export default SignUp;