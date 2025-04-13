<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhanVien extends Model
{
    protected $table = 'NhanVien';
    protected $primaryKey = 'ma_nv';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_nv', 'ten_nv', 'ma_bp', 'so_dien_thoai', 'email'];

    public function boPhan()
    {
        return $this->belongsTo(BoPhan::class, 'ma_bp', 'ma_bp');
    }

    public function taiKhoan()
    {
        return $this->hasOne(TaiKhoan::class, 'ma_nv', 'ma_nv');
    }

    public function deXuats()
    {
        return $this->hasMany(DeXuat::class, 'ma_nv', 'ma_nv');
    }

    public function capPhats()
    {
        return $this->hasMany(CapThietBi::class, 'ma_nv', 'ma_nv');
    }
}
