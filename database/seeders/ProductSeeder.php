<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory()
            ->create([
                "name" => 'Shirt',
                "colors" => [1,2],
                "motifs" => [1,2,3,5],
                "sizes" => ["xs","s","m","l","xl","xxl","xxxl"],
                "prices" => ["16"],
                "default_image" => './images/shirts_paketbild.jpg'
            ]);
    }
}
