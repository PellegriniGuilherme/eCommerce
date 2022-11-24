import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/Layouts/Layout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Forms/Input';
import axios from 'axios';
import { MdAccountCircle, MdLocalShipping, MdPerson, MdScreenSearchDesktop, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '@/Components/Forms/Button';
import MaskInput from '@/Components/Forms/MaskInput';
import InputSelect from '@/Components/Forms/InputSelect';
import useTogglePasswordVisibility from '@/Hooks/useTogglePasswordVisibility';

export default function Register() {

    const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
        name: '',
        cpf: '',
        gender: '',
        birthDate: '',
        cell: '',
        cep: '',
        endereco: '',
        bairro: '',
        cidade: '',
        numero: '',
        complemento:  '',
        estado: '',
        referencia: '',
        pais: ''
    });

    const { securityPassword, eye, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { securityPassword: securityPasswordConfirm, eye: eyeConfirm, handlePasswordVisibility: handlePasswordVisibilityConfirm } = useTogglePasswordVisibility();

    const [disabled, setDisabled] = useState();
    const refNumero = useRef(null);

    const getCep = async (cep) => {
        await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            if(response.data.erro){
                setError('cep', "Não foi possível localizar o seu CEP");
            }else{
                setData(data => (
                    {
                        ...data,
                        bairro: response.data.bairro,
                        endereco: response.data.logradouro,
                        estado: response.data.uf,
                        cidade: response.data.localidade,
                        pais: 'Brasil'
                    }
                ));
                setDisabled(true);
            }
        })
        .catch((e) => {
            setError('cep', "Não foi possível localizar o seu CEP");
        });
    }

    useEffect(() => {
        if(data.cep.length === 8){
            getCep(data.cep);
        }else{
            setDisabled(false);
            clearErrors("cep");
        }
    }, [data.cep]);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onHandleChangeMask = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value.replace(/[^0-9]/g, ''));
    };


    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <Layout>
            <Head title="Registre-se" />
            <form onSubmit={submit} className="p-5 flex flex-col">
                <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                    <h1 className="text-2xl font-bold text-zinc-800">Registre-se</h1>
                </div>
                <div className="p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3">
                    <MdAccountCircle className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                    <h1 className="text-xl font-bold text-zinc-800 mr-5">
                        Dados para acesso
                    </h1>
                </div>
                <section className="p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50">
                    <Input
                        type="email"
                        label="E-mail"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        handleChange={onHandleChange}
                        error={errors.email}
                        required
                    />
                    <Input
                        type={securityPassword}
                        label="Senha"
                        name="password"
                        value={data.password}
                        autoComplete="password"
                        handleChange={onHandleChange}
                        error={errors.password}
                        required
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
                        autoComplete="password_confirmation"
                        handleChange={onHandleChange}
                        error={errors.password_confirmation}
                        required
                        iconRight={
                            eyeConfirm ?
                                <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                            :
                                <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                        }
                    />
                </section>
                <div className="p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3">
                    <MdPerson className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                    <h1 className="text-xl font-bold text-zinc-800 mr-5">
                        Dados Pessoais
                    </h1>
                </div>
                <section className="p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50">
                    <Input
                        type="text"
                        label="Nome"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        handleChange={onHandleChange}
                        error={errors.name}
                        required
                    />
                    <MaskInput
                        type="text"
                        label="CPF"
                        name="cpf"
                        mask="999.999.999-99"
                        value={data.cpf}
                        autoComplete="cpf"
                        handleChange={onHandleChangeMask}
                        error={errors.cpf}
                        required
                    />
                    <InputSelect
                        label="Gênero"
                        name="gender"
                        value={data.gender}
                        handleChange={onHandleChange}
                        error={errors.gender}
                    >
                        <option value=''>- Selecione -</option>
                        <option value='M'>Masculino</option>
                        <option value='F'>Feminino</option>
                        <option value='NB'>Não Binário</option>
                        <option value='O'>Outros</option>
                    </InputSelect>
                    <Input
                        type="date"
                        label="Data de nascimento"
                        name="birthDate"
                        value={data.birthDate}
                        autoComplete="birthDate"
                        handleChange={onHandleChange}
                        error={errors.birthDate}
                    />
                    <MaskInput
                        type="text"
                        label="Celular/Telefone"
                        mask="(99)9999-99999"
                        name="cell"
                        value={data.cell}
                        autoComplete="cell"
                        handleChange={onHandleChangeMask}
                        error={errors.cell}
                        required
                    />
                </section>
                <div className="p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3">
                    <MdLocalShipping className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                    <h1 className="text-xl font-bold text-zinc-800 mr-5">
                        Endereço
                    </h1>
                </div>
                <section className="p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50">
                    <MaskInput
                        type="text"
                        label="CEP"
                        name="cep"
                        mask="99999-999"
                        value={data.cep}
                        autoComplete="cep"
                        handleChange={onHandleChangeMask}
                        error={errors.cep}
                        iconRight={
                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target='_blank' alt="Não sei meu CEP">
                                <MdScreenSearchDesktop size={24} className="text-zinc-800"/>
                            </a>
                        }
                        required
                    />
                    <Input
                        type="text"
                        label="Endereço"
                        name="endereco"
                        mask=''
                        value={data.endereco}
                        autoComplete="endereco"
                        handleChange={onHandleChange}
                        error={errors.endereco}
                        disabled={disabled}
                        required
                    />
                    <Input
                        ref={refNumero}
                        type="text"
                        label="Número"
                        name="numero"
                        mask=''
                        value={data.numero}
                        autoComplete="estado"
                        handleChange={onHandleChange}
                        error={errors.numero}
                        required
                    />
                    <Input
                        type="text"
                        label="Complemento"
                        name="complemento"
                        mask=''
                        value={data.complemento}
                        autoComplete="complemento"
                        handleChange={onHandleChange}
                        error={errors.complemento}
                    />
                    <Input
                        type="text"
                        label="Referência"
                        name="referencia"
                        mask=''
                        value={data.referencia}
                        autoComplete="referencia"
                        handleChange={onHandleChange}
                        error={errors.referencia}
                    />
                    <Input
                        type="text"
                        label="Bairro"
                        name="bairro"
                        mask=''
                        value={data.bairro}
                        autoComplete="bairro"
                        handleChange={onHandleChange}
                        error={errors.bairro}
                        disabled={disabled}
                        required
                    />
                    <Input
                        type="text"
                        label="Cidade"
                        name="cidade"
                        mask=''
                        value={data.cidade}
                        autoComplete="cidade"
                        handleChange={onHandleChange}
                        error={errors.cidade}
                        disabled={disabled}
                        required
                    />
                    <Input
                        type="text"
                        label="Estado"
                        name="estado"
                        mask=''
                        value={data.estado}
                        autoComplete="estado"
                        handleChange={onHandleChange}
                        error={errors.estado}
                        disabled={disabled}
                        required
                    />
                    <Input
                        type="text"
                        label="Pais"
                        name="pais"
                        mask=''
                        value={data.pais}
                        autoComplete="pais"
                        handleChange={onHandleChange}
                        error={errors.pais}
                        disabled={disabled}
                        required
                    />
                </section>
                <div className="p-2 md:p-8 md:py-4 flex flex-col md:flex-row items-center justify-end gap-2">
                    <Link
                        href={route('login')}
                        className="w-full md:w-1/4"
                    >
                        <Button type="button" className="w-full">
                            Já tenho uma conta
                        </Button>
                    </Link>
                    <Button className="w-full md:w-1/4">
                        Registrar
                    </Button>
                </div>
            </form>
        </Layout>
    );
}
