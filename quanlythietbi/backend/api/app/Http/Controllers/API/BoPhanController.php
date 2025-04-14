<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BoPhan;
use App\Models\CoSo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BoPhanController extends Controller
{
    // Lấy danh sách tất cả bộ phận
    public function index()
    {
        // Lấy tất cả các bộ phận kèm theo thông tin cơ sở
        $boPhan = BoPhan::with('coSo')->get();
        return response()->json($boPhan);
    }

    // Tạo mới bộ phận
    public function store(Request $request)
    {
        // Xác thực dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'ma_bp' => 'required|string|max:10|unique:BoPhan,ma_bp',
            'ten_bp' => 'required|string|max:100',
            'ma_cs' => 'required|string|exists:CoSo,ma_cs',
        ]);

        // Nếu có lỗi, trả về thông báo lỗi
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Tạo mới bộ phận
        $boPhan = BoPhan::create([
            'ma_bp' => $request->ma_bp,
            'ten_bp' => $request->ten_bp,
            'ma_cs' => $request->ma_cs,
        ]);

        // Trả về dữ liệu bộ phận vừa tạo
        return response()->json($boPhan, 201);
    }

    // Lấy thông tin bộ phận theo ID
    public function show($id)
    {
        // Lấy bộ phận theo ID, kèm theo thông tin cơ sở
        $boPhan = BoPhan::with('coSo')->find($id);

        // Nếu không tìm thấy bộ phận, trả về lỗi 404
        if (!$boPhan) {
            return response()->json(['message' => 'Bo Phan not found'], 404);
        }

        // Trả về thông tin bộ phận
        return response()->json($boPhan);
    }

    // Cập nhật bộ phận
    public function update(Request $request, $id)
    {
        // Lấy bộ phận cần cập nhật
        $boPhan = BoPhan::find($id);

        // Nếu không tìm thấy bộ phận, trả về lỗi 404
        if (!$boPhan) {
            return response()->json(['message' => 'Bo Phan not found'], 404);
        }

        // Xác thực dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'ten_bp' => 'sometimes|required|string|max:100',
            'ma_cs' => 'sometimes|required|string|exists:CoSo,ma_cs',
        ]);

        // Nếu có lỗi, trả về thông báo lỗi
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Cập nhật bộ phận
        $boPhan->update([
            'ten_bp' => $request->ten_bp ?? $boPhan->ten_bp,
            'ma_cs' => $request->ma_cs ?? $boPhan->ma_cs,
        ]);

        // Trả về dữ liệu bộ phận đã cập nhật
        return response()->json($boPhan);
    }

    // Xóa bộ phận
    public function destroy($id)
    {
        // Lấy bộ phận cần xóa
        $boPhan = BoPhan::find($id);

        // Nếu không tìm thấy bộ phận, trả về lỗi 404
        if (!$boPhan) {
            return response()->json(['message' => 'Bo Phan not found'], 404);
        }

        // Xóa bộ phận
        $boPhan->delete();

        // Trả về thông báo thành công
        return response()->json(['message' => 'Bo Phan deleted successfully']);
    }

    // Lấy bộ phận theo mã cơ sở
    public function getByCoSo($ma_cs)
    {
        // Lấy bộ phận theo mã cơ sở
        $boPhan = BoPhan::where('ma_cs', $ma_cs)->get();

        // Nếu không tìm thấy bộ phận, trả về lỗi 404
        if ($boPhan->isEmpty()) {
            return response()->json(['message' => 'No Bo Phan found for this CoSo'], 404);
        }

        // Trả về danh sách bộ phận theo cơ sở
        return response()->json($boPhan);
    }
}
