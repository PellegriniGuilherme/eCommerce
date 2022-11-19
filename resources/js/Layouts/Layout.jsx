import React from 'react'
import Toast from '@/Components/Toast';
import NavBar from '@/Components/NavBar';
import { Head } from '@inertiajs/inertia-react';

function Layout({ children, title }) {


    return (
        <div className="min-h-screen min-w-full">
            <Head title={title}/>
            <NavBar/>
            <main>
                {children}
            </main>
            <Toast/>
        </div>
    )
}

export default Layout
