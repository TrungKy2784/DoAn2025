<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoSo extends Model
{
    use HasFactory;

    protected $table = 'CoSo';
    protected $primaryKey = 'ma_cs';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['ma_cs', 'ten_cs', 'dia_chi'];

    public function boPhan()
    {
        return $this->hasMany(BoPhan::class, 'ma_cs', 'ma_cs');
    }
}
