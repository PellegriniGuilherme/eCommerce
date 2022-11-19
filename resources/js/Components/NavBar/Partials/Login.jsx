import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import Modal from '@/Components/Modal';
import { MdClose, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Input from '@/Components/Forms/Input';
import useTogglePasswordVisibility from '@/Hooks/useTogglePasswordVisibility';
import Button from '@/Components/Forms/Button';

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
            <div className="w-full sm:w-2/4 md:w-2/6 h-full sm:h-4/6 bg-zinc-100 flex flex-col justify-start items-center p-5 rounded-sm relative">
                <span className="absolute top-2 right-2">
                    <MdClose className="text-zinc-800 cursor-pointer" size={20} onClick={close}/>
                </span>
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
                    <Button processing={processing} className="mt-6">Logar</Button>
                </form>
            </div>
        </Modal>
    )
}

export default Login
