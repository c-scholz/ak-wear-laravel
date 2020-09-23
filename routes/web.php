<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/bestellen', function () {
    return Inertia::render('Order');
});
Route::get('/agb', function () {
    return Inertia::render('Agb');
});
Route::get('/impressum', function () {
    return Inertia::render('Imprint');
});
Route::get('/datenschutz', function () {
    return Inertia::render('Privacy');
});
Route::get('/motiv/{motif}', function ($motif) {
    return Inertia::render('Motif', ['motif' => $motif]);
});