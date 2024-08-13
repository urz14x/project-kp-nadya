<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function index()
    {
        $images = Image::latest()->get();
        return inertia('Dashboard', compact('images'));
    }
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'description' => ['required'],
            'image' => ['required']
        ])->validate();
        $image_name = time() . '.' . $request->image->extension();
        $request->file('image')->move(public_path('upload'), $image_name);

        Image::create([
            'title' => $request->title,
            'description' => $request->description,
            'name' => $image_name
        ]);
        return redirect()->route('dashboard');
    }
    public function destroy($id)
    {
        Image::find($id)->delete();
        return  to_route('dashboard');
    }
}
