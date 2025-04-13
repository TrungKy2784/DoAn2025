<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhaCungCap extends Model
{
    protected $table = 'NhaCungCap';
    protected $primaryKey = 'ma_ncc';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_ncc', 'ten_ncc', 'dia_chi', 'so_dien_thoai'];

    public function hoaDonNhaps()
    {
        return $this->hasMany(HoaDonNhap::class, 'ma_ncc', 'ma_ncc');
    }
}
