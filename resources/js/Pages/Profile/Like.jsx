import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';
import BreadCrumbs from '@/Components/BreadCrumbs';
import Address from './Partials/Address';
import PersonalData from './Partials/PersonalData';
import AccessData from './Partials/AccessData';
import Status from '@/Components/Status';
import ProfileNav from '@/Components/ProfileNav';

export default function Edit({ user, status }) {

    return (
        <Layout>
            <Head title="Minha Conta"/>
            <div className="p-4 md:p-8 flex flex-col gap-y-5">
                <BreadCrumbs way={[
                    {name: 'Pagina Principal', route: 'home', active: false},
                    {name: 'Minha Conta', route: 'profile.edit', active: false},
                    {name: 'Curtidos', route: 'profile.likes', active: true}
                ]}/>
                <ProfileNav />
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
