<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BoPhanController;
use App\Http\Controllers\API\CapThietBiController;
use App\Http\Controllers\API\CoSoController;
use App\Http\Controllers\API\NhanVienController;
use App\Http\Controllers\API\NhapKhoController;
use App\Http\Controllers\API\TaiSanController;
use Illuminate\Support\Facades\Route;

// Route công khai
Route::post('login', [AuthController::class, 'login']);

// Routes yêu cầu xác thực
Route::middleware('auth:sanctum')->group(function () {
    // Route lấy thông tin người dùng hiện tại
    Route::get('user', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);

    // Routes quản lý cơ sở
    Route::apiResource('co-so', CoSoController::class);

    // Routes quản lý bộ phận
    Route::apiResource('bo-phan', BoPhanController::class);
    Route::get('bo-phan/co-so/{ma_cs}', [BoPhanController::class, 'getByCoSo']);

    // Routes quản lý nhân viên
    Route::apiResource('nhan-vien', NhanVienController::class);
    Route::get('nhan-vien/bo-phan/{ma_bp}', [NhanVienController::class, 'getByBoPhan']);

    // Routes quản lý tài sản
    Route::apiResource('tai-san', TaiSanController::class);
    Route::get('tai-san/loai/{ma_loai}', [TaiSanController::class, 'getByLoai']);

    // Routes quản lý nhập kho
    Route::apiResource('nhap-kho', NhapKhoController::class);

    // Routes quản lý cấp thiết bị
    Route::apiResource('cap-thiet-bi', CapThietBiController::class);
    Route::get('cap-thiet-bi/nhan-vien/{ma_nv}', [CapThietBiController::class, 'getByNhanVien']);
});
