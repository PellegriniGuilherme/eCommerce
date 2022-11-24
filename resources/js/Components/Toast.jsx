import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { usePage } from '@inertiajs/inertia-react';

function Toast() {
    const { flash } = usePage().props;

    useEffect(() => {
        if(flash.message){
            toast(flash.message, {
                duration: 4000,
                position: 'top-center',
            });
        }
    }, [flash.message]);

    return (
        <Toaster
            toastOptions={{
                style: {
                    color: '#F5F5F5',
                    backgroundColor: '#1D1D1D'
                }
            }}
        />
    )
}

export default Toast
