<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BoPhan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BoPhanController extends Controller
{
    /**
     * Lấy danh sách bộ phận
     */
    public function index()
    {
        $boPhan = BoPhan::with('coSo')->get();
        return response()->json([
            'success' => true,
            'data' => $boPhan
        ]);
    }

    /**
     * Tạo bộ phận mới
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_bp' => 'required|string|max:10|unique:BoPhan,ma_bp',
            'ten_bp' => 'required|string|max:100',
            'ma_cs'  => 'required|string|exists:CoSo,ma_cs'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $boPhan = BoPhan::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $boPhan
        ], 201);
    }

    /**
     * Hiển thị thông tin bộ phận cụ thể
     */
    public function show($id)
    {
        $boPhan = BoPhan::with('coSo')->find($id);

        if (!$boPhan) {
            return response()->json([
                'success' => false,
                'message' => 'Bộ phận không tồn tại'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $boPhan
        ]);
    }

    /**
     * Cập nhật bộ phận
     */
    public function update(Request $request, $id)
    {
        $boPhan = BoPhan::find($id);

        if (!$boPhan) {
            return response()->json([
                'success' => false,
                'message' => 'Bộ phận không tồn tại'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'ten_bp' => 'sometimes|required|string|max:100',
            'ma_cs'  => 'sometimes|required|string|exists:CoSo,ma_cs'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $boPhan->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $boPhan
        ]);
    }

    /**
     * Xóa bộ phận
     */
    public function destroy($id)
    {
        $boPhan = BoPhan::find($id);

        if (!$boPhan) {
            return response()->json([
                'success' => false,
                'message' => 'Bộ phận không tồn tại'
            ], 404);
        }

        $boPhan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa bộ phận'
        ]);
    }
}
