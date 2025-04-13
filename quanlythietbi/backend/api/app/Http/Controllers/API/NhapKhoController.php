<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\NhapKho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NhapKhoController extends Controller
{
    /**
     * Lấy danh sách phiếu nhập kho
     */
    public function index()
    {
        $nhapKho = NhapKho::with(['nhaCungCap', 'nhanVien', 'chiTietNhap'])->get();
        return response()->json([
            'success' => true,
            'data' => $nhapKho
        ]);
    }

    /**
     * Tạo phiếu nhập kho mới
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_nhap' => 'required|string|max:10|unique:NhapKho,ma_nhap',
            'ma_ncc' => 'required|string|exists:NhaCungCap,ma_ncc',
            'ma_nv' => 'required|string|exists:NhanVien,ma_nv',
            'ngay_nhap' => 'required|date',
            'ghi_chu' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $nhapKho = NhapKho::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $nhapKho
        ], 201);
    }

    /**
     * Hiển thị thông tin phiếu nhập cụ thể
     */
    public function show($id)
    {
        $nhapKho = NhapKho::with(['nhaCungCap', 'nhanVien', 'chiTietNhap'])->find($id);

        if (!$nhapKho) {
            return response()->json([
                'success' => false,
                'message' => 'Phiếu nhập không tồn tại'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $nhapKho
        ]);
    }

    /**
     * Cập nhật phiếu nhập kho
     */
    public function update(Request $request, $id)
    {
        $nhapKho = NhapKho::find($id);

        if (!$nhapKho) {
            return response()->json([
                'success' => false,
                'message' => 'Phiếu nhập không tồn tại'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'ma_ncc' => 'sometimes|required|string|exists:NhaCungCap,ma_ncc',
            'ma_nv' => 'sometimes|required|string|exists:NhanVien,ma_nv',
            'ngay_nhap' => 'sometimes|required|date',
            'ghi_chu' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $nhapKho->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $nhapKho
        ]);
    }

    /**
     * Xóa phiếu nhập kho
     */
    public function destroy($id)
    {
        $nhapKho = NhapKho::find($id);

        if (!$nhapKho) {
            return response()->json([
                'success' => false,
                'message' => 'Phiếu nhập không tồn tại'
            ], 404);
        }

        $nhapKho->delete();

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa phiếu nhập'
        ]);
    }
}
