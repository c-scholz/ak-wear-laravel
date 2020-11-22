<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Motif;
use App\Models\Product;

class MotifController extends Controller
{
    public function show(Request $request, $id) {
        $motifs = Motif::all();
        $motif = $motifs->find(1);
        $motif->colors = Color::find($motif->colors);
        return Inertia::render('Motif', ['motif' => $motif]);
    }
}
?>