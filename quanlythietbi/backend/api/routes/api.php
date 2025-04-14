<?php
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::middleware(['web'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register']);

Route::get('sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);
