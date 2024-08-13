<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    public function index(){
        return inertia('Profile');
    }
    public function menu(){
        return inertia('Menu');
    }
    public function vision(){
        return inertia('Vision');
    }
    public function kegiatan(){
        $posts = Image::latest()->get();
        return inertia('Kegiatan', compact('posts'));
    }
}
