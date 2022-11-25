import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { MdAccountCircle, MdExpandMore, MdNotificationsNone, MdOutlineShoppingCart } from 'react-icons/md';
import Login from './Login';
import { Inertia } from '@inertiajs/inertia';
import DropDownNav from './DropDownNav';

import MobileNav from './MobileNav';

function NavUser({ className, menuOpen, closeMenu }) {

    const { cart, auth, modal } = usePage().props;
    const [showLogin, setShowLogin] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);

    useEffect(() => {
        if(modal.action === 'login'){
            setShowLogin(true);
        }
    }, [modal.action]);

    const logout = () => {
        Inertia.post(route('logout'), {}, {
            onSuccess: () => { closeMenu() }
        });
    }

    return (
        <>
            <div className={`flex flex-row gap-x-5 items-center ${className}`}>
                <Link>
                    <MdNotificationsNone size={24} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                </Link>
                <Link className="relative">
                    {
                        cart.count > 0 ?
                            <span className={`absolute -top-2 -right-2 rounded-full text-xs flex justify-center items-center w-4 h-4 ${cart.count > 0 ? 'bg-orange-500 text-zinc-50' : 'bg-zinc-400 text-zinc-800'}`}>{cart.count}</span>
                        : null
                    }
                    <MdOutlineShoppingCart size={24} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                </Link>
                {
                    auth.user ?
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
                            <DropDownNav dropDownUser={dropDownUser} admin={auth.user?.admin} logout={logout} className="hidden md:flex"/>
                            <MdExpandMore size={24} className={`hidden md:flex transform transition-all duration-300 ${dropDownUser ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                    :
                        <>
                            <Link href={route('login')} className="flex flex-row">
                                <MdAccountCircle size={34} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                                <span className="text-left text-xs mx-2 w-20">
                                    Olá visitante,<br/>
                                    <b>Logue</b> aqui!
                                </span>
                            </Link>
                        </>
                }
            </div>
            <MobileNav auth={auth} admin={auth.user?.admin} menuOpen={menuOpen} logout={logout} closeMenu={closeMenu}/>
            {
                auth.user ?
                    null
                :
                    <Login showLogin={showLogin} close={() => setShowLogin(false)}/>
            }
        </>
    )
}

export default NavUser
