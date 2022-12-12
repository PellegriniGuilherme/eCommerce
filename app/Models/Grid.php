<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grid extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'color_id',
        'size_id',
        'style_id',
        'barcode',
        'stock',
        'price',
        'cost_price'
    ];

    public function color()
    {
        return $this->hasOne('colors', 'id', 'color_id');
    }

    public function size()
    {
        return $this->hasOne('sizes', 'id', 'size_id');
    }

    public function style()
    {
        return $this->hasOne('styles', 'id', 'style_id');
    }

}
