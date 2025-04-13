<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrangThai extends Model
{
    protected $table = 'TrangThai';
    protected $primaryKey = 'ma_tt';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_tt', 'ten_tt'];

    public function taiSanNhapChiTiets()
    {
        return $this->hasMany(TaiSanNhapChiTiet::class, 'ma_tt', 'ma_tt');
    }
}
