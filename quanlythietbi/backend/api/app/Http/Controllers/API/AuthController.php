<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\TaiKhoan;

class AuthController extends Controller
{
    // Đăng ký
    public function register(Request $request)
    {
        $request->validate([
            'ten_dang_nhap' => 'required|string|max:50|unique:TaiKhoan,ten_dang_nhap',
            'mat_khau' => 'required|string|min:6',
            'quyen' => 'required|string|max:20',
        ]);

        $taiKhoan = TaiKhoan::create([
            'ma_tk' => Str::uuid()->toString(), // hoặc tự sinh mã khác nếu bạn muốn
            'ten_dang_nhap' => $request->ten_dang_nhap,
            'mat_khau' => Hash::make($request->mat_khau),
            'ma_nv' => null, // bạn có thể sửa lại logic nếu có nhân viên gắn với tài khoản
            'quyen' => $request->quyen,
        ]);

        return response()->json(['message' => 'Đăng ký thành công!'], 201);
    }

    // Đăng nhập
    public function login(Request $request)
        {
            $credentials = $request->only('ten_dang_nhap', 'mat_khau');

            if (!Auth::attempt(['ten_dang_nhap' => $credentials['ten_dang_nhap'], 'password' => $credentials['mat_khau']])) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            return response()->json(['message' => 'Login successful']);
        }

    // Lấy thông tin người dùng hiện tại
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    // Đăng xuất
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Đăng xuất thành công']);
    }
}
