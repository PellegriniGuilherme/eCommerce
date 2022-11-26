<?php

namespace App\Http\Controllers;

use App\Models\AddressUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function edit(Request $request)
    {
        $user = User::where('id', auth()->user()->id)->with('address')->first();
        return Inertia::render('Profile/Edit', [
            'user' => $user,
            'status' => session('status')
        ]);
    }

    public function order(Request $request)
    {
        $user = User::where('id', auth()->user()->id)->with('address')->first();
        return Inertia::render('Profile/Order', [
            'user' => $user,
            'status' => session('status')
        ]);
    }

    public function like(Request $request)
    {
        $user = User::where('id', auth()->user()->id)->with('address')->first();
        return Inertia::render('Profile/Like', [
            'user' => $user,
            'status' => session('status')
        ]);
    }

    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\ProfileUpdateRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        $user = User::find($request->user()->id);

        $request->validate([
            'email' => ['email', 'max:255', Rule::unique(User::class, 'email')->ignore($user->id)],
            'password_old' => ['nullable', 'required_with:password_new', 'current_password'],
            'password_new' => ['nullable', 'required_with:password_old', 'confirmed', Password::defaults()]
        ]);

        $user->email = $request->email ? $request->email : $user->email;
        $user->password = $request->password_new ? Hash::make($request->password_new) : $user->password;

        if($user->isDirty('email')) {
            $user->email_verified_at = null;
        }
        $user->save();

        return redirect()->route('profile.edit')->with('status', 'Usuario atualizado com sucesso.');
    }

    public function update_address(Request $request, AddressUser $address_user)
    {
        $request->validate([
            'cep' => ['nullable', 'size:8'],
            'endereco' => ['nullable', 'string'],
            'bairro' => ['nullable', 'string'],
            'cidade' => ['nullable', 'string'],
            'numero' => ['nullable', 'string'],
            'complemento' => ['nullable', 'string'],
            'estado' => ['nullable', 'string'],
            'referencia' => ['nullable', 'string'],
            'pais' => ['nullable']
        ]);

        $address_user->cep = $request->cep ? $request->cep : $address_user->cep;
        $address_user->endereco = $request->endereco ? $request->endereco : $address_user->endereco;
        $address_user->bairro = $request->bairro ? $request->bairro : $address_user->bairro;
        $address_user->cidade = $request->cidade ? $request->cidade : $address_user->cidade;
        $address_user->numero = $request->numero ? $request->numero : $address_user->numero;
        $address_user->complemento = $request->complemento ? $request->complemento : $address_user->complemento;
        $address_user->estado = $request->estado ? $request->estado : $address_user->estado;
        $address_user->referencia = $request->referencia ? $request->referencia : $address_user->referencia;
        $address_user->pais = $request->pais ? $request->pais : $address_user->pais;

        $address_user->save();

        return redirect()->route('profile.edit')->with('status', 'Endereço atualizado com sucesso.');
    }

    public function update_personal(Request $request)
    {
        $user = User::find($request->user()->id);

        $request->validate([
            'cpf' => ['nullable', 'cpf', Rule::unique(User::class, 'cpf')->ignore($user->id)],
            'gender' => ['nullable', Rule::in(['M',"F","NB", "O"])],
            'birth_date' => ['nullable', 'date'],
            'cell' => ['nullable', 'min:10', 'max:11']
        ]);

        $user->cpf = $request->cpf ? $request->cpf : $user->cpf;
        $user->gender = $request->gender ? $request->gender : $user->gender;
        $user->birth_date = $request->birth_date ? $request->birth_date : $user->birth_date;
        $user->cell = $request->cell ? $request->cell : $user->cell;
        $user->save();

        return redirect()->route('profile.edit')->with('status', 'Usuario atualizado com sucesso.');
    }

}
