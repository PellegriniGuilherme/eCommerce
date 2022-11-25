import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from '@headlessui/react';

export default function SideModal({ children, show = false, closeable = true, onClose = () => {} }) {
    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : null;
    }, [show]);

    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const closeOnEscape = (e) => {
        if (e.key === 'Escape' && props.show) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.body.style.overflow = null;
        };
    }, []);

    const modalRoot = document.getElementById('modal-root');

    return ReactDOM.createPortal(
        <Transition show={show} leave="duration-200">
            <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transform transition-all" onClick={close}>
                        <div className="absolute inset-0 bg-gray-500 opacity-75 flex"></div>
                    </div>
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-400 transform"
                    enterFrom="-translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transition ease-in-out duration-400 transform"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="-translate-x-full opacity-0"
                >
                    {children}
                </Transition.Child>
            </div>
        </Transition>,
        modalRoot
    );
}
