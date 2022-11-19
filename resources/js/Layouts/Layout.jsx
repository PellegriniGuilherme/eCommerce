import React from 'react'
import Toast from '@/Components/Toast';
import NavBar from '@/Components/NavBar';
import { Head } from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';

function Layout({ children, title }) {


    return (
        <div className="min-h-screen min-w-full flex flex-col">
            <Head title={title}/>
            <NavBar/>
            <main>
                {children}
            </main>
            <Footer/>
            <Toast/>
        </div>
    )
}

export default Layout
