<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaiSan extends Model
{
    use HasFactory;

    // Chỉ định tên bảng
    protected $table = 'TaiSan';

    // Chỉ định khóa chính
    protected $primaryKey = 'ma_ts';

    // Khóa chính không tự động tăng
    public $incrementing = false;

    // Khóa chính là string
    protected $keyType = 'string';

    // Không sử dụng timestamps
    public $timestamps = false;

    // Các trường có thể gán dữ liệu
    protected $fillable = [
        'ma_ts',
        'ten_ts',
        'ma_loai',
        'mo_ta'
    ];

    // Định nghĩa mối quan hệ với LoaiTaiSan
    public function loaiTaiSan()
    {
        return $this->belongsTo(LoaiTaiSan::class, 'ma_loai', 'ma_loai');
    }

    // Định nghĩa mối quan hệ với TaiSanNhapChiTiet
    public function chiTietNhap()
    {
        return $this->hasMany(TaiSanNhapChiTiet::class, 'ma_ts', 'ma_ts');
    }

    // Định nghĩa mối quan hệ với CapThietBi
    public function capPhat()
    {
        return $this->hasMany(CapThietBi::class, 'ma_ts', 'ma_ts');
    }
}
