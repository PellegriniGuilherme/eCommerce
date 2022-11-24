import React, { useEffect } from 'react'
import { Link, useForm } from '@inertiajs/inertia-react';
import Modal from '@/Components/Modal';
import { MdClose, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Input from '@/Components/Forms/Input';
import useTogglePasswordVisibility from '@/Hooks/useTogglePasswordVisibility';
import Button from '@/Components/Forms/Button';
import { ReactComponent as Fashion } from '../../../../images/login_art.svg';

function Login({showLogin, close}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const { securityPassword, eye, handlePasswordVisibility } = useTogglePasswordVisibility();

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <Modal show={showLogin} onClose={close}>
            <div className="w-full sm:w-2/4 md:w-3/4 h-full sm:h-5/6 bg-zinc-100 flex flex-row justify-start items-center rounded-sm relative">
                <span className="absolute top-2 left-2">
                    <MdClose className="text-zinc-800 cursor-pointer" size={26} onClick={close}/>
                </span>
                <div className="w-full md:w-1/2 p-6 md:px-12 h-full flex flex-col justify-start items-center">
                    <h1 className="text-lg text-zinc-800 font-bold">Login</h1>
                    <form onSubmit={submit} className="flex flex-col my-auto w-full gap-y-5">
                        <Input
                            type="text"
                            label="E-mail"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            handleChange={onHandleChange}
                            error={errors.email}
                        />
                        <Input
                            type={securityPassword}
                            label="Senha"
                            name="password"
                            value={data.password}
                            handleChange={onHandleChange}
                            error={errors.password}
                            iconRight={
                                eye ?
                                    <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibility}/>
                                :
                                    <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibility}/>
                            }
                        />
                        <div className="flex flex-row justify-between mt-3">
                            <Link href={route('register')} className="text-zinc-800 text-sm font-bold">
                                Registre-se
                            </Link>
                            <Link href={route('password.request')} className="text-zinc-800 text-sm font-bold">
                                Esqueci minha senha
                            </Link>
                        </div>
                        <Button processing={processing} className="mt-1">Logar</Button>
                    </form>
                </div>
                <div className="hidden md:flex w-1/2 h-full bg-orange-400">
                    <Fashion className="w-full h-auto" />
                </div>
            </div>
        </Modal>
    )
}

export default Login
