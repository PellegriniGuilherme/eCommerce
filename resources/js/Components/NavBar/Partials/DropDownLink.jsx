import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function DropDownLink({ href, title, link = true, icon, ...props }) {

    if(link){
        return (
            <Link href={href} className="w-full text-zinc-800 hover:bg-zinc-200 transition-all text-left text-sm pl-1 py-1 flex flex-row gap-x-2" {...props}>
                {icon} {title}
            </Link>
        )
    }

    return (
        <button type="button" className="w-full text-zinc-800 hover:bg-zinc-200 transition-all text-sm text-left pl-1 py-1 flex flex-row gap-x-2" {...props}>
            {icon} Sair
        </button>
    )
}

export default DropDownLink
