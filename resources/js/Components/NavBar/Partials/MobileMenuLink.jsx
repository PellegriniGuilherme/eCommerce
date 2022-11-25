import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function MobileMenuLink({ href, title, link = true, icon, ...props }) {

    if(link){
        return (
            <Link href={href} className="w-full text-zinc-800 hover:bg-zinc-200 transition-all text-left text-sm px-5 py-3 flex flex-row gap-x-3" {...props}>
                {icon} {title}
            </Link>
        )
    }

    return (
        <button type="button" className="w-full text-zinc-800 hover:bg-zinc-200 transition-all text-sm text-left px-5 py-3 flex flex-row gap-x-3" {...props}>
            {icon} Sair
        </button>
    )
}

export default MobileMenuLink
