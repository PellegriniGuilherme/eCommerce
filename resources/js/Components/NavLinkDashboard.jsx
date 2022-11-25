import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { MdLocalShipping, MdNotifications, MdPaid, MdPolicy, MdSell, MdShoppingCart } from 'react-icons/md'


export default function NavLinkDashboard({ mobile }) {

    return (
        <div className={`${mobile ? 'flex flex-col gap-y-2' : 'h-full w-full overflow-y-auto flex flex-col gap-y-1'}`}>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdSell />
                Produtos
            </Link>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdShoppingCart />
                Vendas
            </Link>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdLocalShipping />
                Transporte
            </Link>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdPaid />
                Pagamentos
            </Link>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdPolicy />
                Políticas
            </Link>
            <Link className="w-full text-zinc-800 hover:bg-zinc-300 flex items-center gap-5 font-bold text-xl px-5 py-2 transition-all">
                <MdNotifications />
                Notificações
            </Link>
        </div>
    )
}
