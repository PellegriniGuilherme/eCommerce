<?php

use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use App\Models\Style;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grids', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Product::class)->references('id')->on('products');
            $table->foreignIdFor(Color::class)->references('id')->on('colors');
            $table->foreignIdFor(Size::class)->references('id')->on('sizes');
            $table->foreignIdFor(Style::class)->references('id')->on('styles');
            $table->string('barcode');
            $table->integer('stock');
            $table->decimal('price', 10, 2);
            $table->decimal('cost_price', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grids');
    }
};
