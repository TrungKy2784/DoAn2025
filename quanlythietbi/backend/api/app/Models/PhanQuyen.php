<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhanQuyen extends Model
{
    protected $table = 'PhanQuyen';
    protected $primaryKey = 'ma_pq';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_pq', 'ten_quyen'];

    public function taiKhoans()
    {
        return $this->hasMany(TaiKhoan::class, 'ma_pq', 'ma_pq');
    }
}
