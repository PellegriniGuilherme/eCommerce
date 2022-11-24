import React, { useEffect, useRef, useState } from 'react';
import Input from '@/Components/Forms/Input';
import MaskInput from '@/Components/Forms/MaskInput';
import { MdLocalShipping, MdScreenSearchDesktop } from 'react-icons/md';
import axios from 'axios';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@/Components/Forms/Button';

function Address({ user }) {

    const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
        cep: user.address[0].cep,
        endereco: user.address[0].endereco,
        bairro: user.address[0].bairro,
        cidade: user.address[0].cidade,
        numero: user.address[0].numero,
        complemento:  user.address[0].complemento ? user.address[0].complemento : '',
        referencia: user.address[0].referencia ? user.address[0].referencia : '',
        estado: user.address[0].estado,
        pais: user.address[0].pais
    });

    const [disabled, setDisabled] = useState();
    const refNumero = useRef();

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

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onHandleChangeMask = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value.replace(/[^0-9]/g, ''));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.address.update', user.address[0].id));
    }

    return (
        <div className="w-full md:col-span-2 p-2 md:p-8 md:py-4 flex flex-col rounded-md bg-zinc-50 border-t-2 border-zinc-600">
            <div className="flex flex-row items-center mb-5">
                <MdLocalShipping className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                <h1 className="text-xl font-bold text-zinc-800 mr-5">
                    Endereço
                </h1>
            </div>
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-10">
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
                />
                <div className="flex flex-row md:col-span-3">
                    <Button className="ml-auto w-full md:w-1/2" processing={processing}>
                        Salvar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Address
