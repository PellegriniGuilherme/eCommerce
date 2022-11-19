import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from '@headlessui/react';

export default function Modal({ children, show = false, closeable = true, onClose = () => {} }) {
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
            <div className="fixed inset-0 overflow-y-auto md:px-4 md:py-6 sm:px-0 z-50 flex justify-center items-center">
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
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    {children}
                </Transition.Child>
            </div>
        </Transition>,
        modalRoot
    );
}
