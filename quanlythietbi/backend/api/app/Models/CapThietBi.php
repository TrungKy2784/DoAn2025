<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CapThietBi extends Model
{
    protected $table = 'CapThietBi';
    protected $primaryKey = 'ma_cap';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_cap', 'ma_ctn', 'ma_nv', 'ngay_cap'];

    public function taiSanNhapChiTiet()
    {
        return $this->belongsTo(TaiSanNhapChiTiet::class, 'ma_ctn', 'ma_ctn');
    }

    public function nhanVien()
    {
        return $this->belongsTo(NhanVien::class, 'ma_nv', 'ma_nv');
    }
}
