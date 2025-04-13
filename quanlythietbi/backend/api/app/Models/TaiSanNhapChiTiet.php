<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaiSanNhapChiTiet extends Model
{
    protected $table = 'TaiSanNhapChiTiet';
    protected $primaryKey = 'ma_ctn';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_ctn', 'ma_ts', 'ma_tt', 'ghi_chu'];

    public function taiSan()
    {
        return $this->belongsTo(TaiSan::class, 'ma_ts', 'ma_ts');
    }

    public function trangThai()
    {
        return $this->belongsTo(TrangThai::class, 'ma_tt', 'ma_tt');
    }

    public function capThietBi()
    {
        return $this->hasOne(CapThietBi::class, 'ma_ctn', 'ma_ctn');
    }
}
