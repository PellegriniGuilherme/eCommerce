import React from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import Status from '@/Components/Status';
import Input from '@/Components/Forms/Input';
import Button from '@/Components/Forms/Button';
import { ReactComponent as Art } from '../../../images/email_art.svg';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Layout>
            <Head title="Esqueci a Senha" />
            <section className="p-4 md:p-8 flex flex-row h-3/4">
                <div className="w-full md:w-1/2 my-auto">
                    <h1 className="font-bold text-xl text-center text-zinc-800 mb-10">Esqueci minha Senha</h1>
                    <div className="mb-4 text-sm text-zinc-800">
                        Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos um e-mail com um link de redefinição de senha que permitirá que você redefina sua senha.
                    </div>

                    <Status status={status}/>

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
                        <Button processing={processing}>
                            Enviar e-mail
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
