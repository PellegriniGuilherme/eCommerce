<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard', [
            "sellerChart" => $this->chart_sellers(),
            "productChart" => $this->chart_products()
        ]);
    }

    public function chart_sellers()
    {
        $chart = [
            [
                "name" => "Jan",
                "vendas" => 6000
            ],
            [
                "name" => "Fev",
                "vendas" => 3000
            ],
            [
                "name" => "Mar",
                "vendas" => 2000
            ],
            [
                "name" => "Abr",
                "vendas" => 2780
            ],
            [
                "name" => "Mai",
                "vendas" => 1890
            ],
            [
                "name" => "Jun",
                "vendas" => 2390
            ],
            [
                "name" => "Jul",
                "vendas" => 3490
            ],
            [
                "name" => "Ago",
                "vendas" => 2490
            ],
            [
                "name" => "Set",
                "vendas" => 2000
            ],
            [
                "name" => "Out",
                "vendas" => 1390
            ],
            [
                "name" => "Nov",
                "vendas" => 1000
            ],
            [
                "name" => "Dez",
                "vendas" => 6800
            ],
        ];

        return $chart;
    }

    public function chart_products()
    {
        $chart = [
            [
                "name" => "Jojo 5168",
                "vendas" => 6000
            ],
            [
                "name" => "Naruto 845",
                "vendas" => 3000
            ],
            [
                "name" => "Sakura 9552",
                "vendas" => 2000
            ],
            [
                "name" => "GaGa 1563",
                "vendas" => 2780
            ],
            [
                "name" => "Sasuke 5987",
                "vendas" => 1890
            ]
        ];

        return $chart;
    }
}
