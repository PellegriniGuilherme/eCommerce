import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { MdDashboard, MdLocalShipping, MdNotifications, MdPaid, MdPolicy, MdSell, MdShoppingCart } from 'react-icons/md'


export default function NavLinkDashboard({ mobile }) {

    return (
        <div className={`${mobile ? 'flex flex-col gap-y-2' : 'h-full w-full overflow-y-auto flex flex-col gap-y-1'}`}>
            <Link href={route('dashboard')} className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('dashboard') ? 'bg-zinc-400' : null}`}>
                <MdDashboard />
                Dashboard
            </Link>
            <Link href={route('product')} className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('product*') ? 'bg-zinc-400' : null}`}>
                <MdSell />
                Produtos
            </Link>
            <Link className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('sale*') ? 'bg-zinc-400' : null}`}>
                <MdShoppingCart />
                Vendas
            </Link>
            <Link className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('shipping*') ? 'bg-zinc-400' : null}`}>
                <MdLocalShipping />
                Transporte
            </Link>
            <Link className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('payment*') ? 'bg-zinc-400' : null}`}>
                <MdPaid />
                Pagamentos
            </Link>
            <Link className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('policie*') ? 'bg-zinc-400' : null}`}>
                <MdPolicy />
                Políticas
            </Link>
            <Link className={`w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all ${route().current('notification') ? 'bg-zinc-400' : null}`}>
                <MdNotifications />
                Notificações
            </Link>
        </div>
    )
}
