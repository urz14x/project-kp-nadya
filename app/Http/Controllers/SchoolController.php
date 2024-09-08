<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use App\Models\Image;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    public function index()
    {
        return inertia('Profile');
    }
    public function menu()
    {
        return inertia('Menu');
    }
    public function vision()
    {
        return inertia('Vision');
    }
    public function show($slug)
    {
        $activity = Activity::where('slug', $slug)->first();
        return inertia('Show', compact('activity'));
    }
    public function kegiatan()
    {
        $activities = ActivityResource::collection(Activity::latest()->get());

        return inertia('Kegiatan', compact('activities'));
    }
}
