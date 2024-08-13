<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $table = 'images';
    protected $fillable = [
        'title', 'description', 'name'
    ];
    protected function name()
    {
        return Attribute::make(
            get: fn ($value) => url('upload/' . $value),
        );
    }
}
