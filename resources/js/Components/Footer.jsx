import React from 'react'
import { ReactComponent as Logo } from '../../images/logo_negative.svg';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { Link } from '@inertiajs/inertia-react';

function Footer() {
    return (
        <footer className="mt-auto w-full bg-zinc-700 flex flex-col p-10 text-zinc-100">
            <div className="w-full flex flex-col md:flex-row justify-start md:justify-start gap-6 text-center">
                <div className="w-full md:w-1/3 flex flex-col gap-3 justify-start md:justify-start">
                    <Logo className="m-auto md:m-0"/>
                    <p>eCommerce qualidade e velocidade para você!</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Nossas Redes</h1>
                    <div className="flex flex-row justify-center gap-x-6">
                        <Link>
                            <BsFacebook className="transition-all hover:opacity-75" size={26}/>
                        </Link>
                        <Link>
                            <BsInstagram className="transition-all hover:opacity-75" size={26}/>
                        </Link>
                        <Link>
                            <BsTwitter className="transition-all hover:opacity-75" size={26}/>
                        </Link>
                        <Link>
                            <SiTiktok className="transition-all hover:opacity-75" size={26}/>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Institucional</h1>
                    <Link className="transition-all hover:opacity-75">Política de Privacidade</Link>
                    <Link className="transition-all hover:opacity-75">Trocas e Devoluções</Link>
                    <Link className="transition-all hover:opacity-75">Política de Frete</Link>
                    <Link className="transition-all hover:opacity-75">Termo de Pré-venda</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
