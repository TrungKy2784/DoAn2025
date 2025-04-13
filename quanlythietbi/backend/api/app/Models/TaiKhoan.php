<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class TaiKhoan extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'TaiKhoan';
    protected $primaryKey = 'ma_tk';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'ma_tk',
        'ten_dang_nhap',
        'mat_khau',
        'ma_nv',
        'quyen'
    ];

    protected $hidden = [
        'mat_khau'
    ];

    // Đổi tên cột password trong authentication
    public function getAuthPassword()
    {
        return $this->mat_khau;
    }

    // Quan hệ với nhân viên
    public function nhanVien()
    {
        return $this->belongsTo(NhanVien::class, 'ma_nv', 'ma_nv');
    }
}
