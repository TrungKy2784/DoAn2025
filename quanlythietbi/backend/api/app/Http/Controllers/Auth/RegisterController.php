<?php

namespace App\Http\Controllers\API;

use App\Models\TaiKhoan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'ten_dang_nhap' => 'required|string|unique:TaiKhoan,ten_dang_nhap',
            'mat_khau' => 'required|string|min:6',
            'ma_nv' => 'required|string|exists:NhanVien,ma_nv', // Đảm bảo ma_nv tồn tại trong bảng NhanVien
            'quyen' => 'required|string|in:Admin,User', // Xác nhận quyền hợp lệ
        ]);

        $taiKhoan = TaiKhoan::createAccount($request->all());

        return response()->json([
            'message' => 'User registered successfully',
            'data' => $taiKhoan
        ]);
    }
}
