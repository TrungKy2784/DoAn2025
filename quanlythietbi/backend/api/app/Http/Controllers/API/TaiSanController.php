<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TaiSan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaiSanController extends Controller
{
    /**
     * Lấy danh sách tài sản
     */
    public function index()
    {
        $taiSan = TaiSan::with('loaiTaiSan')->get();
        return response()->json([
            'success' => true,
            'data' => $taiSan
        ]);
    }

    /**
     * Lưu tài sản mới
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_ts' => 'required|string|max:10|unique:TaiSan,ma_ts',
            'ten_ts' => 'required|string|max:100',
            'ma_loai' => 'required|string|exists:LoaiTaiSan,ma_loai',
            'mo_ta' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $taiSan = TaiSan::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $taiSan
        ], 201);
    }

    /**
     * Hiển thị thông tin tài sản cụ thể
     */
    public function show($id)
    {
        $taiSan = TaiSan::with(['loaiTaiSan', 'chiTietNhap', 'capPhat'])->find($id);

        if (!$taiSan) {
            return response()->json([
                'success' => false,
                'message' => 'Tài sản không tồn tại'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $taiSan
        ]);
    }

    /**
     * Cập nhật thông tin tài sản
     */
    public function update(Request $request, $id)
    {
        $taiSan = TaiSan::find($id);

        if (!$taiSan) {
            return response()->json([
                'success' => false,
                'message' => 'Tài sản không tồn tại'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'ten_ts' => 'sometimes|required|string|max:100',
            'ma_loai' => 'sometimes|required|string|exists:LoaiTaiSan,ma_loai',
            'mo_ta' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $taiSan->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $taiSan
        ]);
    }

    /**
     * Xóa tài sản
     */
    public function destroy($id)
    {
        $taiSan = TaiSan::find($id);

        if (!$taiSan) {
            return response()->json([
                'success' => false,
                'message' => 'Tài sản không tồn tại'
            ], 404);
        }

        $taiSan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Tài sản đã được xóa'
        ]);
    }
}
