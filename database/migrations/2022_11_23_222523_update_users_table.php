<?php

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
        Schema::table('users', function(Blueprint $table)
        {
            $table->string('cpf')->after('password');
            $table->enum('gender', ['M', 'F', 'NB', 'O'])->nullable()->default(null)->after('cpf');
            $table->date('birth_date')->nullable()->default(null)->after('gender');
            $table->string('cell')->after('birthDate');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function(Blueprint $table)
        {
            $table->dropColumn('cpf');
            $table->dropColumn('gender');
            $table->dropColumn('birth_date');
            $table->dropColumn('cell');
        });
    }
};
