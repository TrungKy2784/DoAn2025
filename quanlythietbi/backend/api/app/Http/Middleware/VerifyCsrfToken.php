<?php
namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Các URL không cần kiểm tra CSRF token.
     *
     * @var array
     */
    protected $except = [
        'api/*', // Bỏ qua CSRF cho các route API
    ];
}

