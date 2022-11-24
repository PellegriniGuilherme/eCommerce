import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/inertia-react';
import BreadCrumbs from '@/Components/BreadCrumbs';
import { MdOutlineFavorite, MdPerson, MdShoppingBasket } from 'react-icons/md';
import Address from './Partials/Address';
import PersonalData from './Partials/PersonalData';
import AccessData from './Partials/AccessData';
import Status from '@/Components/Status';

export default function Edit({ user, status }) {

    return (
        <Layout>
            <Head title="Minha Conta"/>
            <div className="p-4 md:p-8 flex flex-col gap-y-5">
                <BreadCrumbs way={[
                    {name: 'Pagina Principal', route: 'home', active: false},
                    {name: 'Minha Conta', route: 'profile.edit', active: false},
                    {name: 'Pedidos', route: 'profile.orders', active: true}
                ]}/>
                <div className='flex flex-row bg-zinc-50 rounded-md border-t-2 border-b-2 border-zinc-600 justify-start items-center gap-x-5 px-5 py-2'>
                    <Link href={route('profile.edit')} className={`flex flex-row gap-x-2 ${route().current('profile.edit') ? 'border-b-2 border-zinc-700' : null}`}>
                        <MdPerson size={20} /> Minha Conta
                    </Link>
                    <Link href={route('profile.orders')} className={`flex flex-row gap-x-2 ${route().current('profile.orders') ? 'border-b-2 border-zinc-700' : null}`}>
                        <MdShoppingBasket size={20} /> Pedidos
                    </Link>
                    <Link href={route('profile.likes')} className={`flex flex-row gap-x-2 ${route().current('profile.likes') ? 'border-b-2 border-zinc-700' : null}`}>
                        <MdOutlineFavorite size={20} /> Curtidos
                    </Link>

                </div>
                <Status status={status}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <AccessData user={user} />
                    <PersonalData user={user} />
                    <Address user={user} />
                </div>
            </div>
        </Layout>
    );
}
