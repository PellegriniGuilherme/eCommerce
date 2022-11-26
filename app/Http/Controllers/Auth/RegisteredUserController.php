<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\AddressUser;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','string','email','max:255','unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'cpf' => ['required', 'cpf', 'unique:users,cpf'],
            'gender' => ['nullable', Rule::in(['M',"F","NB", "O"])],
            'birth_date' => ['nullable', 'date'],
            'cell' => ['required', 'min:10', 'max:11'],
            'cep' => ['required', 'size:8'],
            'endereco' => ['required', 'string'],
            'bairro' => ['required', 'string'],
            'cidade' => ['required', 'string'],
            'numero' => ['required', 'string'],
            'complemento' => ['nullable', 'string'],
            'estado' => ['required', 'string'],
            'referencia' => ['nullable', 'string'],
            'pais' => ['required']
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'cpf' => $request->cpf,
            'gender' => $request->gender,
            'birth_date' => $request->birth_date,
            'cell' => $request->cell
        ]);

        AddressUser::create([
            'user_id' => $user->id,
            'cep' => $request->cep,
            'endereco' => $request->endereco,
            'bairro' => $request->bairro,
            'cidade' => $request->cidade,
            'numero' => $request->numero,
            'complemento' => $request->complemento,
            'estado' => $request->estado,
            'referencia' => $request->referencia,
            'pais' => $request->pais,
            'default' => true
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('home'));
    }
}
