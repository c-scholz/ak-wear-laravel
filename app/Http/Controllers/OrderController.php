<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Motif;
use App\Models\Product;

class OrderController extends Controller
{
    public function show() {
        $products = Product::all();
        $products->each(function($product, $key) {
            $product->colors = Color::whereIn('id', $product->colors)->get();
        });
        return Inertia::render('Order', ['products' => $products]);
    }
}
?>