import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Đường dẫn tới file api.js

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Bước 1: Gọi csrf-cookie trước
            await api.get('/sanctum/csrf-cookie');

            // Bước 2: Gửi login sau khi có CSRF cookie
            const response = await api.post('/api/login', {
                email: username,
                password,
            });

            alert('Đăng nhập thành công!');
            localStorage.setItem('token', response.token); // Hoặc lưu như bạn muốn
            navigate('/dashboard');
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
            alert('Sai thông tin đăng nhập hoặc lỗi kết nối.');
        }
    };


    return (
        <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
            {/* Navbar */}
            <div className="container sticky top-0 z-sticky">
                <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 m-6 mb-0 shadow-sm rounded-xl bg-white/80 backdrop-blur-2xl backdrop-saturate-200">
                    <div className="flex items-center justify-between w-full p-0 px-6 mx-auto flex-wrap-inherit">
                        <a className="py-1.75 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700" href="#">Argon Dashboard 2</a>
                        <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                            <li>
                                <Link className="flex items-center px-4 py-2 mr-2 font-normal text-sm text-slate-700" to="/dashboard">
                                    <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 mr-2 font-normal text-sm text-slate-700" to="/signup">
                                    <i className="mr-1 fas fa-user-circle opacity-60"></i>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Main content */}
            <main className="mt-0 transition-all duration-200 ease-in-out">
                <section>
                    <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
                        <div className="container z-1">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:w-7/12 lg:w-5/12 xl:w-4/12">
                                    <div className="relative flex flex-col min-w-0 bg-white border-0 shadow-md rounded-2xl p-6">
                                        <h4 className="font-bold">Sign In</h4>
                                        <p className="mb-4">Enter your username and password to sign in</p>

                                        <form>
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="text-sm block w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="text-sm block w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="button"
                                                    onClick={handleLogin}
                                                    className="w-full px-6 py-3 mt-4 font-bold text-white bg-blue-500 rounded-lg shadow-md hover:-translate-y-px transition-all"
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>

                                        <div className="mt-6 text-center">
                                            <p className="text-sm">
                                                Don't have an account?
                                                <Link to="/signup" className="ml-1 font-semibold text-blue-600">
                                                    Sign up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Image side */}
                                <div className="hidden lg:flex w-6/12 h-full pr-0">
                                    <div className="relative flex flex-col justify-center h-full bg-cover px-24 m-4 rounded-xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')]">
                                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
                                        <h4 className="z-10 mt-12 font-bold text-white relative">"Attention is the new currency"</h4>
                                        <p className="z-10 text-white relative">
                                            The more effortless the writing looks, the more effort the writer actually put into the process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SignIn;
