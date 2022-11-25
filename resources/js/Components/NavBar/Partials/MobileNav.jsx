import React from 'react'
import { ReactComponent as Logo } from '../../../../images/logo.svg';
import SideModal from '@/Components/SideModal';
import MobileMenuLink from './MobileMenuLink';
import { MdClose, MdDashboard, MdHome, MdLogin, MdLogout, MdOutlineFavorite, MdPerson, MdShoppingBasket } from 'react-icons/md';

function MobileNav({ admin, logout, menuOpen, closeMenu, auth, ...props }) {


    return(
        <SideModal closeable={false} show={menuOpen}>
            <div className="w-screen h-screen bg-zinc-50 flex flex-col gap-y-1">
                <div className="w-full bg-zinc-50 h-20 flex flex-row items-center px-5 gap-x-10 mb-5">
                    <div className="cursor-pointer" onClick={closeMenu}>
                        <MdClose size={30} />
                    </div>
                    <div className="h-14 flex justify-center items-center ml-auto mb-2">
                        <Logo className="w-3/4 ml-auto"/>
                    </div>
                </div>
                    {   !auth.user ?
                            <div className='flex flex-col gap-y-1'>
                                <MobileMenuLink title="Login" icon={<MdLogin size={20} />} href={route('login')}/>
                            </div>
                        :
                            admin ?
                                <div className='flex flex-col gap-y-1'>
                                    <MobileMenuLink title="Dashboard" icon={<MdDashboard size={20} />} href={route('dashboard')} />
                                    <MobileMenuLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                                </div>
                            :
                                <div className='flex flex-col gap-y-1'>
                                    <MobileMenuLink title="Pagina Inicial" icon={<MdHome size={20} />} href={route('home')} />
                                    <MobileMenuLink title="Minha Conta" icon={<MdPerson size={20} />} href={route('profile.edit')} />
                                    <MobileMenuLink title="Pedidos" icon={<MdShoppingBasket size={20} />} href={route('profile.edit')} />
                                    <MobileMenuLink title="Curtidos" icon={<MdOutlineFavorite size={20} />} href={route('profile.edit')} />
                                    <MobileMenuLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                                </div>
                    }
            </div>
        </SideModal>
    )
}

export default MobileNav
