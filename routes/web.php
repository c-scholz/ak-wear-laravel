<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\OrderController;
use App\Http\Controllers\MotifController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/bestellen', [OrderController::class, 'show']);
Route::get('/agb', function () {
    return Inertia::render('Agb');
});
Route::get('/impressum', function () {
    return Inertia::render('Imprint');
});
Route::get('/datenschutz', function () {
    return Inertia::render('Privacy');
});
Route::get('/motiv/{motif}', [MotifController::class, 'show']);