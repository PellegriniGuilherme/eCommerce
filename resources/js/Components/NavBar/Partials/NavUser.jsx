import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { MdLogout, MdNotificationsNone, MdOutlineShoppingCart, MdPerson, MdPersonPin, MdShoppingBasket } from 'react-icons/md';
import Login from './Login';
import DropDown from './DropDown';
import { Inertia } from '@inertiajs/inertia';
import DropDownLink from './DropDownLink';

function NavUser({ className }) {

    const { cart, auth, flash } = usePage().props;
    const [showLogin, setShowLogin] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);

    useEffect(() => {
        if(flash.action === 'login'){
            setShowLogin(true);
        }
    }, [flash.action]);

    const logout = () => {
        Inertia.post(route('logout'));
    }

    return (
        <>
            <div className={`flex flex-row gap-x-5 items-center ${className}`}>
                <Link>
                    <MdNotificationsNone size={24} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                </Link>
                <Link className="relative">
                    <span className={`absolute -top-2 -right-2 rounded-full text-xs flex justify-center items-center w-4 h-4 ${cart.count > 0 ? 'bg-orange-500 text-zinc-50' : 'bg-zinc-400 text-zinc-800'}`}>{cart.count}</span>
                    <MdOutlineShoppingCart size={24} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                </Link>
                {
                    auth.user ?
                        <div
                            className='flex flex-row relative items-center cursor-pointer'
                            onMouseEnter={() => setDropDownUser(true)}
                            onMouseLeave={() => setDropDownUser(false)}
                        >
                            <MdPersonPin size={34} className="text-orange-500 hover:text-orange-400 transition-colors" />
                            <span className="text-left text-xs mx-2 w-20">
                                Olá<br/>
                                {auth.user.name}
                            </span>
                            <DropDown open={dropDownUser} close={() => setDropDownUser(false)}>
                                <DropDownLink title="Minha Conta" icon={<MdPerson size={20} />} href={route('profile.edit')} />
                                <DropDownLink title="Pedidos" icon={<MdShoppingBasket size={20} />} href={route('profile.edit')} />
                                <DropDownLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                            </DropDown>
                        </div>
                    :
                        <Link href={route('login')}>
                            <MdPersonPin size={34} className="text-zinc-800 hover:text-zinc-500 transition-colors" />
                        </Link>
                }
            </div>
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
