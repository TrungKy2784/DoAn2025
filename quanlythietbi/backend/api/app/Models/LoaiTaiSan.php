<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoaiTaiSan extends Model
{
    protected $table = 'LoaiTaiSan';
    protected $primaryKey = 'ma_loai';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_loai', 'ten_loai'];

    public function taiSans()
    {
        return $this->hasMany(TaiSan::class, 'ma_loai', 'ma_loai');
    }
}
