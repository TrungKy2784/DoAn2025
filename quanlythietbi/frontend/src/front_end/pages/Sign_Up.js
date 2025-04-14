import React, { useState } from "react";
import axios from "../../services/api"; // file đã cấu hình baseURL

function SignUp() {
    const [formData, setFormData] = useState({
        ten_dang_nhap: '',
        mat_khau: '',
        quyen: 'user',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleRegister = async () => {
        try {
            // BƯỚC QUAN TRỌNG: gọi CSRF token từ Laravel Sanctum
            await axios.get('/sanctum/csrf-cookie', {
                withCredentials: true
            });

            // Sau đó mới gọi API đăng ký
            await axios.post('/register', formData, {
                withCredentials: true
            });

            alert('Đăng ký thành công!');
            window.location.href = '/sign-in';
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
            alert("Đăng ký thất bại!");
        }
    };


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Đăng ký tài khoản</h2>
            <input
                type="text"
                name="ten_dang_nhap"
                placeholder="Tên đăng nhập"
                value={formData.ten_dang_nhap}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded"
            />
            <input
                type="password"
                name="mat_khau"
                placeholder="Mật khẩu"
                value={formData.mat_khau}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded"
            />
           <select name="quyen" value={formData.quyen} onChange={handleChange} className="w-full mb-3 px-4 py-2 border rounded">
                <option value="user">Người dùng</option>
                <option value="admin">Quản trị</option>
            </select>

            <button
                onClick={handleRegister}
                className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
            >
                Đăng ký
            </button>
        </div>
    );
}

export default SignUp;
