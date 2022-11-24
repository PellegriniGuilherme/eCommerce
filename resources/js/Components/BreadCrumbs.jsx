import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function BreadCrumbs({ way }) {
    return (
        <div className='w-full my-3 text-sm text-zinc-600 flex flex-row flex-wrap gap-x-2'>
            {
                way.length > 0 ?
                    way.map((item, index) => {
                        return item.active ?
                            (
                                <span className={`flex flex-row gap-x-2 cursor-default ${item.active ? 'font-bold' : 'font-normal'}`} key={`breadCrumbs_${index}`}>
                                    <p>{item.name}</p>
                                    {
                                        index === (way.length - 1)  ? null :  <p className='font-normal cursor-default'>{'>'}</p>
                                    }
                                </span>
                            )
                        :
                            (
                                <span className={`flex flex-row gap-x-2 ${item.active ? 'font-bold' : 'font-normal'}`} key={`breadCrumbs_${index}`}>
                                    <Link href={route(item.route)}>{item.name}</Link>
                                    {
                                        index === (way.length - 1)  ? null :  <p className='font-normal cursor-default'>{'>'}</p>
                                    }
                                </span>
                            )
                    })
                : null
            }
        </div>
    )
}

export default BreadCrumbs
