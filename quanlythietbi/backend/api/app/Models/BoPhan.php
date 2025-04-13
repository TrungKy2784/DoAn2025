<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoPhan extends Model
{
    use HasFactory;

    protected $table = 'BoPhan';
    protected $primaryKey = 'ma_bp';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_bp', 'ten_bp', 'ma_cs'];

    public function coSo()
    {
        return $this->belongsTo(CoSo::class, 'ma_cs', 'ma_cs');
    }

    public function nhanVien()
    {
        return $this->hasMany(NhanVien::class, 'ma_bp', 'ma_bp');
    }
}
