<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\NhanVien;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NhanVienController extends Controller
{
    /**
     * Lấy danh sách nhân viên
     */
    public function index()
    {
        $nhanVien = NhanVien::with(['boPhan', 'taiKhoan'])->get();
        return response()->json([
            'success' => true,
            'data' => $nhanVien
        ]);
    }

    /**
     * Tạo nhân viên mới
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_nv' => 'required|string|max:10|unique:NhanVien,ma_nv',
            'ten_nv' => 'required|string|max:100',
            'email' => 'required|email|unique:NhanVien,email',
            'so_dt' => 'nullable|string|max:15',
            'ma_bp' => 'required|string|exists:BoPhan,ma_bp'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $nhanVien = NhanVien::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $nhanVien
        ], 201);
    }

    /**
     * Hiển thị thông tin nhân viên cụ thể
     */
    public function show($id)
    {
        $nhanVien = NhanVien::with(['boPhan', 'taiKhoan'])->find($id);

        if (!$nhanVien) {
            return response()->json([
                'success' => false,
                'message' => 'Nhân viên không tồn tại'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $nhanVien
        ]);
    }

    /**
     * Cập nhật thông tin nhân viên
     */
    public function update(Request $request, $id)
    {
        $nhanVien = NhanVien::find($id);

        if (!$nhanVien) {
            return response()->json([
                'success' => false,
                'message' => 'Nhân viên không tồn tại'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'ten_nv' => 'sometimes|required|string|max:100',
            'email' => 'sometimes|required|email|unique:NhanVien,email,' . $id,
            'so_dt' => 'nullable|string|max:15',
            'ma_bp' => 'sometimes|required|string|exists:BoPhan,ma_bp'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $nhanVien->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $nhanVien
        ]);
    }

    /**
     * Xóa nhân viên
     */
    public function destroy($id)
    {
        $nhanVien = NhanVien::find($id);

        if (!$nhanVien) {
            return response()->json([
                'success' => false,
                'message' => 'Nhân viên không tồn tại'
            ], 404);
        }

        $nhanVien->delete();

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa nhân viên'
        ]);
    }
}
