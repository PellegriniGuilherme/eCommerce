import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/Forms/Input';
import Button from '@/Components/Forms/Button';
import { ReactComponent as Art } from '../../../images/reset_art.svg';
import useTogglePasswordVisibility from '@/Hooks/useTogglePasswordVisibility';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function ResetPassword({ token, email }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const { securityPassword, eye, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { securityPassword: securityPasswordConfirm, eye: eyeConfirm, handlePasswordVisibility: handlePasswordVisibilityConfirm } = useTogglePasswordVisibility();

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <Layout>
            <Head title="Redefinir Senha" />
            <section className="p-4 md:p-8 flex flex-row h-3/4">
                <div className="w-full md:w-1/2 my-auto">
                    <h1 className="font-bold text-xl text-center text-zinc-800 mb-10">Redefinir Senha</h1>
                    <form onSubmit={submit} className="flex flex-col gap-6">
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
                            label="Nova Senha"
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
                        <Input
                            type={securityPasswordConfirm}
                            label="Confirma Senha"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            handleChange={onHandleChange}
                            error={errors.password_confirmation}
                            iconRight={
                                eyeConfirm ?
                                    <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                                :
                                    <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                            }
                        />
                        <Button processing={processing}>
                            Alterar Senha
                        </Button>
                        <Link href={route('login')} className="ml-auto text-zinc-800 font-bold">Lembrei minha senha</Link>
                    </form>
                </div>
                <div className="hidden md:flex w-1/2">
                    <Art className="h-96 m-auto"/>
                </div>
            </section>
        </Layout>
    );
}
