<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SchoolController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SchoolController::class, 'menu'])->name("menu")->middleware('guest');

Route::get('/about', [SchoolController::class, 'index'])->name("about")->middleware('guest');
Route::get('/vision', [SchoolController::class, 'vision'])->name("vision")->middleware('guest');
Route::get('/kegiatan', [SchoolController::class, 'kegiatan'])->name('kegiatan')->middleware('guest');


Route::get('/dashboard', [AdminController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/kegiatan-baru', [AdminController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.create.store');
Route::delete('/kegiatan-hapus/{id}', [AdminController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.delete');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
