<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeXuat extends Model
{
    protected $table = 'DeXuat';
    protected $primaryKey = 'ma_dx';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_dx', 'ma_nv', 'noi_dung', 'ngay_de_xuat'];

    public function nhanVien()
    {
        return $this->belongsTo(NhanVien::class, 'ma_nv', 'ma_nv');
    }
}
