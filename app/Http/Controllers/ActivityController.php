<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ActivityController extends Controller
{
    public function index()
    {
        $activity = Activity::latest()->get();
        return inertia('Dashboard', compact('activity'));
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

        Activity::create([
            'title' => $title = $request->title,
            'slug' => str($title . ' ' . str()->random(3))->slug(),
            'description' => $request->description,
            'image' => $image_name
        ]);
        return redirect()->route('dashboard');
    }
    public function destroy($id)
    {
        Activity::find($id)->delete();
        return  to_route('dashboard');
    }
}
