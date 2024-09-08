<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
class AdminController extends Controller
{
    public function index()
    {
        $activities = Activity::latest()->get();
        return inertia('Dashboard', compact('activities'));
    }
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'description' => ['required', 'max:500'],
            'image' => ['required']
        ])->validate();
        $image_name = time() . '.' . $request->image->extension();
        $request->file('image')->move(public_path('/upload'), $image_name);

        Activity::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'image' => $image_name
        ]);
        return redirect()->route('dashboard');
    }
    public function edit($id)
    {
        $activity = Activity::where('id', $id)->first();
        return Inertia::render('Edit', compact('activity'));
    }
    public function update(Request $request, $id)
    {

        Validator::make($request->all(), [
            'title' => ['required'],
            'description' => ['required'],
            'image' => ['nullable', 'image'] // Gambar bisa kosong, karena tidak selalu diupdate
        ])->validate();

        $activity = Activity::findOrFail($id);
        // Jika user mengupload gambar baru
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if (file_exists(public_path('/upload' . $activity->image))) {
                unlink(public_path('/upload' . $activity->image));
            }

            // Proses upload gambar baru
            $image_name = time() . '.' . $request->image->extension();
            $request->file('image')->move(public_path('/upload'), $image_name);



            // Perbarui data lainnya
            $activity->title = $request->title;
            $activity->description = $request->description;

            // Simpan nama gambar yang baru
            $activity->image = $image_name;

            // Simpan perubahan ke database
            $activity->save();

            // Redirect setelah berhasil update
            return to_route('dashboard');
        }
    }

    public function destroy($id)
    {
        Activity::find($id)->delete();
        return  to_route('dashboard');
    }
}
