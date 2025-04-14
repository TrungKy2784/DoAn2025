<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Cookie as SymfonyCookie;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Chỉ thêm đoạn này nếu thực sự cần crossSite cookie
        Cookie::macro('crossSite', function ($name, $value, $minutes) {
            return new SymfonyCookie(
                $name,
                $value,
                now()->addMinutes($minutes),
                '/',
                'localhost', // đổi thành 127.0.0.1 nếu bạn dùng domain đó
                false,
                true,
                false,
                'None'
            );
        });
    }
}
