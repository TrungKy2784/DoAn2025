<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HoaDonNhap extends Model
{
    protected $table = 'HoaDonNhap';
    protected $primaryKey = 'ma_hd';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_hd', 'ma_ncc', 'ma_nk', 'ngay_lap'];

    public function nhaCungCap()
    {
        return $this->belongsTo(NhaCungCap::class, 'ma_ncc', 'ma_ncc');
    }

    public function nhapKho()
    {
        return $this->belongsTo(NhapKho::class, 'ma_nk', 'ma_nk');
    }

    public function chiTiets()
    {
        return $this->hasMany(ChiTietHoaDonNhap::class, 'ma_hd', 'ma_hd');
    }
}
