<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CapThietBi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CapThietBiController extends Controller
{
    /**
     * Lấy danh sách các lần cấp thiết bị
     */
    public function index()
    {
        $capThietBi = CapThietBi::with(['taiSan', 'nhanVien'])->get();
        return response()->json([
            'success' => true,
            'data' => $capThietBi
        ]);
    }

    /**
     * Cấp thiết bị mới
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_ctb' => 'required|string|max:10|unique:CapThietBi,ma_ctb',
            'ma_ts' => 'required|string|exists:TaiSan,ma_ts',
            'ma_nv' => 'required|string|exists:NhanVien,ma_nv',
            'ngay_cap' => 'required|date',
            'ghi_chu' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $capThietBi = CapThietBi::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $capThietBi
        ], 201);
    }

    /**
     * Hiển thị thông tin cấp thiết bị cụ thể
     */
    public function show($id)
    {
        $capThietBi = CapThietBi::with(['taiSan', 'nhanVien'])->find($id);

        if (!$capThietBi) {
            return response()->json([
                'success' => false,
                'message' => 'Cấp thiết bị không tồn tại'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $capThietBi
        ]);
    }

    /**
     * Cập nhật thông tin cấp thiết bị
     */
    public function update(Request $request, $id)
    {
        $capThietBi = CapThietBi::find($id);

        if (!$capThietBi) {
            return response()->json([
                'success' => false,
                'message' => 'Cấp thiết bị không tồn tại'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'ma_ts' => 'sometimes|required|string|exists:TaiSan,ma_ts',
            'ma_nv' => 'sometimes|required|string|exists:NhanVien,ma_nv',
            'ngay_cap' => 'sometimes|required|date',
            'ghi_chu' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $capThietBi->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $capThietBi
        ]);
    }

    /**
     * Xóa cấp thiết bị
     */
    public function destroy($id)
    {
        $capThietBi = CapThietBi::find($id);

        if (!$capThietBi) {
            return response()->json([
                'success' => false,
                'message' => 'Cấp thiết bị không tồn tại'
            ], 404);
        }

        $capThietBi->delete();

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa cấp thiết bị'
        ]);
    }
}
