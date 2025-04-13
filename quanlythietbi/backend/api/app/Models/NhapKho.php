<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhapKho extends Model
{
    protected $table = 'NhapKho';
    protected $primaryKey = 'ma_nk';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_nk', 'ngay_nhap'];

    public function hoaDonNhaps()
    {
        return $this->hasMany(HoaDonNhap::class, 'ma_nk', 'ma_nk');
    }
}
