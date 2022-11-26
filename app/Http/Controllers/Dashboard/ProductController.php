<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function index(Request $request)
    {

        $products = Product::when($request, function ($query, $request){
            if($request->name){
                $query->where('name', 'like', "%".$request->name."%");
            }
            if($request->barCode){
                $query->where('barcode', $request->barCode);
            }
        })->paginate(20)->withQueryString();

        return Inertia::render('Dashboard/Pages/Product/Index',[
            'products' => $products
        ]);
    }

}
