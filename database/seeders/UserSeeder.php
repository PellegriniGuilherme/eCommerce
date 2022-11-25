<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@guilhermepellegrini.com.br',
            'password' => Hash::make('admin2022@@'),
            'cpf' => '99999999999',
            'cell' => '99999999999'
        ]);

        $user->assignRole('admin');
    }
}
