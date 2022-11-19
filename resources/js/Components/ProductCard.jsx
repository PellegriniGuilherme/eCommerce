import { Link } from '@inertiajs/inertia-react';
import React, { useRef } from 'react'
import { MdShoppingCart, MdFavoriteBorder } from 'react-icons/md';

function ProductCard() {

    const img = useRef();

    const enterHover = () => {
        img.current.src = "https://cdn.awsli.com.br/1000x1000/236/236627/produto/177564214/paciencia-e-o-meu-segundo-nome-camiseta-basicona-unissex-ec23a951.jpg";
    }

    const leaveHover = () => {
        img.current.src = "https://cdn.awsli.com.br/1000x1000/236/236627/produto/177564214/paciencia-e-o-meu-segundo-nome-camiseta-basicona-unissex-3fcbd8a1.jpg";
    }

    const like = () => {
        console.log('like');
    }

    const unLike = () => {
        console.log('unlike');
    }

    const addCart = () => {
        console.log('add cart');
    }

    const openProduct = () => {
        console.log('open');
    }

    return (
        <div
            className="w-full min-h-[calc(100vw/2_*_1.15)] md:min-h-[calc(100vw/4_*_1.15)] rounded-md p-3 bg-zinc-50 shadow flex flex-col items-center cursor-pointer relative"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
        >
            <span className="transition-all duration-200 w-8 h-8 rounded-full opacity-60 hover:opacity-100 cursor-pointer bg-zinc-500 text-zinc-100 flex justify-center items-center absolute left-2 top-2 z-20" onClick={like}>
                <MdFavoriteBorder className="w-5 h-5"/>
            </span>
            <span className="transition-all duration-200 w-8 h-8 rounded-full opacity-60 hover:opacity-100 cursor-pointer bg-zinc-500 text-zinc-100 flex justify-center items-center absolute right-2 top-2 z-20" onClick={addCart}>
                <MdShoppingCart className="w-5 h-5"/>
            </span>
            <div onClick={openProduct} className="w-full h-full">
                <img
                    ref={img}
                    src="https://cdn.awsli.com.br/1000x1000/236/236627/produto/177564214/paciencia-e-o-meu-segundo-nome-camiseta-basicona-unissex-3fcbd8a1.jpg"
                    className="w-full rounded-md transition-all duration-200 hover:scale-105 z-10"
                />
                <h1 className="mt-2 text-center text-xs md:text-sm">
                    Paciência é o Meu Segundo Nome - Camiseta Básica Unissex
                </h1>
                <h2 className="mt-2 text-center text-base md:text-xl font-bold text-orange-500">
                    R$88,00
                </h2>
            </div>
        </div>
    )
}

export default ProductCard
