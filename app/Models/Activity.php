<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Activity extends Model
{
    use HasFactory;
    protected $table = "activities";
    protected $guarded = [];

    protected function name()
    {
        return Attribute::make(
            get: fn ($value) => url('upload/' . $value),
        );
    }
}
