<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChiTietHoaDonNhap extends Model
{
    protected $table = 'ChiTietHoaDonNhap';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;

    protected $fillable = ['ma_hd', 'ma_ts', 'so_luong', 'don_gia'];

    public function hoaDonNhap()
    {
        return $this->belongsTo(HoaDonNhap::class, 'ma_hd', 'ma_hd');
    }

    public function taiSan()
    {
        return $this->belongsTo(TaiSan::class, 'ma_ts', 'ma_ts');
    }
}
