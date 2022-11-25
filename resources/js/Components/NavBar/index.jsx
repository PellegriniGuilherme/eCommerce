import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import NavUser from './Partials/NavUser';
import { MdOutlineMenu } from 'react-icons/md';

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="sticky top-0 z-50">
            <nav className="w-full bg-zinc-50 h-20 flex flex-row items-center px-5 gap-x-10">
                <Link href={route('home')} className="hidden md:flex"><Logo/></Link>
                <div className="flex md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
                    <MdOutlineMenu size={30} />
                </div>
                <NavUser className="ml-auto" menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)}/>
            </nav>
        </section>
    );
}

export default NavBar
