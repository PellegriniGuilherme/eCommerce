<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['name' => 'product.create']);
        Permission::create(['name' => 'product.edit']);
        Permission::create(['name' => 'product.delete']);
        Permission::create(['name' => 'rating.show']);
        Permission::create(['name' => 'rating.publish']);
        Permission::create(['name' => 'sale.show']);
        Permission::create(['name' => 'client.show']);
        Permission::create(['name' => 'payment.show']);
        Permission::create(['name' => 'payment.integration.create']);
        Permission::create(['name' => 'payment.integration.edit']);
        Permission::create(['name' => 'payment.integration.delete']);
        Permission::create(['name' => 'shipping.show']);
        Permission::create(['name' => 'shipping.integration.create']);
        Permission::create(['name' => 'shipping.integration.edit']);
        Permission::create(['name' => 'shipping.integration.delete']);

        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(Permission::all());

    }
}
