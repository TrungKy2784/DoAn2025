<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CoSo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoSoController extends Controller
{
    public function index()
    {
        return response()->json(['success' => true, 'data' => CoSo::all()]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ma_cs' => 'required|string|max:10|unique:CoSo,ma_cs',
            'ten_cs' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $coSo = CoSo::create($request->all());
        return response()->json(['success' => true, 'data' => $coSo], 201);
    }

    public function show($id)
    {
        $coSo = CoSo::find($id);
        if (!$coSo) return response()->json(['success' => false, 'message' => 'Không tìm thấy'], 404);
        return response()->json(['success' => true, 'data' => $coSo]);
    }

    public function update(Request $request, $id)
    {
        $coSo = CoSo::find($id);
        if (!$coSo) return response()->json(['success' => false, 'message' => 'Không tìm thấy'], 404);

        $validator = Validator::make($request->all(), [
            'ten_cs' => 'sometimes|required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $coSo->update($request->all());
        return response()->json(['success' => true, 'data' => $coSo]);
    }

    public function destroy($id)
    {
        $coSo = CoSo::find($id);
        if (!$coSo) return response()->json(['success' => false, 'message' => 'Không tìm thấy'], 404);

        $coSo->delete();
        return response()->json(['success' => true, 'message' => 'Đã xóa thành công']);
    }
}
