import React from 'react'

function Button({ type = 'submit', className, style, children, processing, onClick }) {



    return (
        <button
            type={type}
            className={`
                flex flex-row relative justify-center items-center bg-zinc-800 text-zinc-50 py-2 rounded-md transition-all hover:bg-zinc-700 hover:shadow-sm
                ${className}
                ${processing ? 'opacity-25' : ''}
            `}
            onClick={onClick}
            disabled={processing}
        >
            {children}
        </button>
    )
}

export default Button
