import Button from '@/Components/Forms/Button';
import Input from '@/Components/Forms/Input';
import useTogglePasswordVisibility from '@/Hooks/useTogglePasswordVisibility';
import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import { MdAccountCircle, MdVisibility, MdVisibilityOff } from 'react-icons/md'

function AccessData({ user }) {

    const { data, setData, patch, processing, errors, reset } = useForm({
        email: user.email,
        password_old: '',
        password_new: '',
        password_new_confirmation: '',
    });

    const { securityPassword, eye, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { securityPassword: securityPasswordNew, eye: eyeNew, handlePasswordVisibility: handlePasswordVisibilityNew } = useTogglePasswordVisibility();
    const { securityPassword: securityPasswordConfirm, eye: eyeConfirm, handlePasswordVisibility: handlePasswordVisibilityConfirm } = useTogglePasswordVisibility();

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            onSuccess: () => {
                reset('password_old', 'password_new', 'password_new_confirmation');
            }
        });
    };

    useEffect(() => {
        return reset('password_old', 'password_new', 'password_new_confirmation');
    }, []);

    return (
        <div className="w-full p-2 md:p-8 md:py-4 flex flex-col rounded-md bg-zinc-50 border-t-2 border-zinc-600">
            <div className="flex flex-row items-center mb-5">
                <MdAccountCircle className="flex text-2xl font-bold text-zinc-800 mr-3" size={24}/>
                <h1 className="text-xl font-bold text-zinc-800 mr-5">
                    Dados para acesso
                </h1>
            </div>
            <form onSubmit={submit} className="grid grid-cols-1 gap-y-4 gap-x-10">
                <Input
                    type="email"
                    label="E-mail"
                    name="email"
                    value={data.email}
                    handleChange={onHandleChange}
                    error={errors.email}
                />
                <Input
                    type={securityPassword}
                    label="Senha Antiga"
                    name="password_old"
                    autocomplete="off"
                    value={data.password_old}
                    handleChange={onHandleChange}
                    error={errors.password_old}
                    iconRight={
                        eye ?
                            <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibility}/>
                        :
                            <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibility}/>
                    }
                />
                <Input
                    type={securityPasswordNew}
                    label="Nova Senha"
                    name="password_new"
                    autocomplete="off"
                    value={data.password_new}
                    handleChange={onHandleChange}
                    error={errors.password_new}
                    iconRight={
                        eyeNew ?
                            <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityNew}/>
                        :
                            <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityNew}/>
                    }
                />
                <Input
                    type={securityPasswordConfirm}
                    label="Confirma Nova Senha"
                    name="password_new_confirmation"
                    autocomplete="off"
                    value={data.password_new_confirmation}
                    handleChange={onHandleChange}
                    error={errors.password_new_confirmation}
                    iconRight={
                        eyeConfirm ?
                            <MdVisibility className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                        :
                            <MdVisibilityOff className="text-zinc-800 cursor-pointer" size={20} onClick={handlePasswordVisibilityConfirm}/>
                    }
                />
                <Button className="ml-auto w-full md:w-1/2" processing={processing}>
                    Salvar
                </Button>
            </form>
        </div>
    )
}

export default AccessData
