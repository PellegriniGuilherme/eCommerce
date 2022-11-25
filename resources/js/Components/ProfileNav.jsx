import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { MdOutlineFavorite, MdPerson, MdShoppingBasket } from 'react-icons/md'

function ProfileNav() {

    return (
        <div className='hidden md:flex flex-row bg-zinc-50 rounded-md border-t-2 border-b-2 border-zinc-600 justify-start items-center gap-x-5 px-5 py-2'>
            <Link href={route('profile.edit')} className={`flex flex-row gap-x-2 ${route().current('profile.edit') ? 'border-b-2 border-zinc-700' : null}`}>
                <MdPerson size={20} /> Minha Conta
            </Link>
            <Link href={route('profile.orders')} className={`flex flex-row gap-x-2 ${route().current('profile.orders') ? 'border-b-2 border-zinc-700' : null}`}>
                <MdShoppingBasket size={20} /> Pedidos
            </Link>
            <Link href={route('profile.likes')} className={`flex flex-row gap-x-2 ${route().current('profile.likes') ? 'border-b-2 border-zinc-700' : null}`}>
                <MdOutlineFavorite size={20} /> Curtidos
            </Link>
        </div>
    )
}

export default ProfileNav
