<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddressUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cep',
        'endereco',
        'bairro',
        'cidade',
        'numero',
        'complemento',
        'estado',
        'referencia',
        'pais',
        'default'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
