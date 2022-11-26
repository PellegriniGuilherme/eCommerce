import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { MdAccountCircle, MdClose, MdExpandMore, MdLogout, MdNotifications, MdOutlineMenu } from 'react-icons/md';
import { Inertia } from '@inertiajs/inertia';
import DropDown from '../Components/NavBar/Partials/DropDown';
import DropDownLink from '../Components/NavBar/Partials/DropDownLink';
import SideModal from '@/Components/SideModal';
import NavLinkDashboard from '@/Components/NavLinkDashboard';

function AdminLayout({ children, title }) {

    const { auth } = usePage().props;
    const [dropDownUser, setDropDownUser] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const logout = () => {
        Inertia.post(route('logout'));
    }

    return (
        <div className="min-h-screen min-w-full flex flex-row bg-neutral-100">
            <Head title={title}/>
            <nav className="hidden md:flex h-screen w-1/5 bg-zinc-200 flex-col sticky top-0 border-r">
                <Link href={route('home')} className="h-14 flex justify-center items-center mb-5">
                    <Logo className="w-3/4"/>
                </Link>
                <NavLinkDashboard mobile={false} />
            </nav>
            <div className="w-full h-full flex flex-col">
                <nav className="h-14 w-full flex flex-row justify-start items-center bg-zinc-50 sticky top-0 px-5 border-b z-50">
                    <div className="flex md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
                        <MdOutlineMenu size={30} />
                    </div>
                    <Link className="ml-auto">
                        <MdNotifications size={24} className="text-zinc-800 hover:text-zinc-500 transition-colors mr-5" />
                    </Link>
                    <div
                        className='flex flex-row relative items-center cursor-default md:cursor-pointer'
                        onMouseEnter={() => setDropDownUser(true)}
                        onMouseLeave={() => setDropDownUser(false)}
                    >
                        <MdAccountCircle size={34} className="text-orange-500 hover:text-orange-400 transition-colors" />
                        <span className="text-left text-xs mx-2 w-20">
                            Olá<br/>
                            {auth.user.name.split(" ")[0]}
                        </span>
                        <DropDown open={dropDownUser} className="hidden md:flex">
                            <div className={`flex flex-col w-full gap-y-1 rounded-md ring-1 ring-black ring-opacity-5 py-1 text-zinc-800`}>
                                <DropDownLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                            </div>
                        </DropDown>
                        <MdExpandMore size={24} className={`hidden md:flex transform transition-all duration-300 ${dropDownUser ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </nav>
                <main className="p-5">
                    <h1 className="font-bold text-2xl text-zinc-800 mb-5">{title}</h1>
                    <div className="w-full h-full rounded-md shadow-md bg-zinc-50 p-5">
                        {children}
                    </div>
                </main>
            </div>
            <SideModal closeable={false} show={menuOpen}>
                <div className="w-screen h-screen bg-zinc-50 flex flex-col gap-y-2">
                    <div className="h-14 w-full flex flex-row justify-start items-center bg-zinc-50 px-5">
                        <div className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                            <MdClose size={30} />
                        </div>
                        <Link href={route('home')} className="h-14 flex justify-center items-center ml-auto">
                            <Logo className="w-3/4 ml-auto"/>
                        </Link>
                    </div>
                    <NavLinkDashboard mobile={true} />
                </div>
            </SideModal>
        </div>
    )
}

export default AdminLayout
