import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

function DropDown({ open, children, className }) {

    return (
        <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div
                className={`absolute z-50 rounded-md shadow-lg bg-zinc-50 top-full left-2 w-full mt-1 ${className}`}
            >
                {children}
            </div>
        </Transition>
    )
}

export default DropDown
