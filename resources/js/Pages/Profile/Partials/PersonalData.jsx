import React from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { MdPerson } from 'react-icons/md'
import Input from '@/Components/Forms/Input';
import InputSelect from '@/Components/Forms/InputSelect';
import MaskInput from '@/Components/Forms/MaskInput';
import Button from '@/Components/Forms/Button';

function PersonalData({ user }) {

    const { data, setData, patch, processing, errors, reset, setError, clearErrors } = useForm({
        name: user.name,
        cpf: user.cpf,
        gender: user.gender ? user.gender : '',
        birth_date: user.birth_date ? user.birth_date : '',
        cell: user.cell,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onHandleChangeMask = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value.replace(/[^0-9]/g, ''));
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.personal.update'));
    };

    return (
        <div className="w-full p-2 md:p-8 md:py-4 flex flex-col rounded-md bg-zinc-50 border-t-2 border-zinc-600">
            <div className="flex flex-row items-center mb-5">
                <MdPerson className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                <h1 className="text-xl font-bold text-zinc-800 mr-5">
                    Dados Pessoais
                </h1>
            </div>
            <form onSubmit={submit} className="grid grid-cols-1 gap-y-4 gap-x-10">
                <Input
                    type="text"
                    label="Nome"
                    name="name"
                    value={data.name}
                    autoComplete="name"
                    handleChange={onHandleChange}
                    error={errors.name}
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
                    name="birth_date"
                    value={data.birth_date}
                    autoComplete="birth_date"
                    handleChange={onHandleChange}
                    error={errors.birth_date}
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
                />
                <Button className="ml-auto w-full md:w-1/2" processing={processing}>
                    Salvar
                </Button>
            </form>
        </div>
    )
}

export default PersonalData
