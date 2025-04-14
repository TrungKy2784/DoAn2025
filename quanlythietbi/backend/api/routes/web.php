<?php

use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

Route::get('/', function () {
    return view('welcome');
});
Route::prefix('api')
     ->middleware('api')
     ->group(base_path('routes/api.php'));

Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

