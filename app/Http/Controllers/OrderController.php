<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Motif;
use App\Models\Product;

class OrderController extends Controller
{
    public function show() {
        $products = Product::all();
        return Inertia::render('Order', ['products' => $products]);
    }

    public function getMotifs($product) {
        return $product->motifs();
    }
}
?>