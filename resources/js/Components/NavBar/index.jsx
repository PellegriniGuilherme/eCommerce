import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { ReactComponent as Logo } from '../../../images/logo.svg';
import NavUser from './Partials/NavUser';

function NavBar() {

    return (
        <section>
            <nav className="w-full bg-gray-50 h-20 flex flex-row items-center px-5 gap-x-10">
                <Link href={route('home')} className="hidden sm:flex"><Logo/></Link>
                <NavUser className="ml-auto" />
            </nav>
        </section>
    );
}

export default NavBar