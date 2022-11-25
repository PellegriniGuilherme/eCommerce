import React from 'react'
import DropDown from './DropDown';
import DropDownLink from './DropDownLink';
import { MdDashboard, MdHome, MdLogout, MdOutlineFavorite, MdPerson, MdShoppingBasket } from 'react-icons/md';

function DropDownNav({ admin, dropDownUser, logout, ...props }) {

    return (
        <DropDown open={dropDownUser} {...props}>
            {
                admin ?
                    <div className={`flex flex-col w-full gap-y-1 rounded-md ring-1 ring-black ring-opacity-5 py-1 text-zinc-800`}>
                        <DropDownLink title="Dashboard" icon={<MdDashboard size={20} />} href={route('dashboard')} />
                        <DropDownLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                    </div>
                :
                    <div className={`flex flex-col w-full gap-y-1 rounded-md ring-1 ring-black ring-opacity-5 py-1 text-zinc-800`}>
                        <DropDownLink title="Pagina Inicial" icon={<MdHome size={20} />} href={route('home')} />
                        <DropDownLink title="Minha Conta" icon={<MdPerson size={20} />} href={route('profile.edit')} />
                        <DropDownLink title="Pedidos" icon={<MdShoppingBasket size={20} />} href={route('profile.edit')} />
                        <DropDownLink title="Curtidos" icon={<MdOutlineFavorite size={20} />} href={route('profile.edit')} />
                        <DropDownLink title="Sair" icon={<MdLogout size={20} />} onClick={logout} link={false}/>
                    </div>
            }
        </DropDown>
    )

}

export default DropDownNav
