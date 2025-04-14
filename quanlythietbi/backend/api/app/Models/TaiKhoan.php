<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class TaiKhoan extends Authenticatable
{
    protected $table = 'TaiKhoan';

    protected $primaryKey = 'ma_tk';

    public $incrementing = false;

    protected $fillable = [
        'ma_tk',
        'ten_dang_nhap',
        'mat_khau',
        'ma_nv',
        'quyen',
    ];

    protected $hidden = [
        'mat_khau',
    ];

    public function getAuthPassword()
    {
        return $this->mat_khau;
    }
}
