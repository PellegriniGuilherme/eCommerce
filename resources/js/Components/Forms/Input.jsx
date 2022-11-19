import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Input(
    { type = 'text', name, value, className, autoComplete, required, isFocused, handleChange, iconLeft, iconRight, label, error },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={`flex flex-col items-start w-full ${className}`}>
            <label className={`text-sm ml-3 ${error ? 'text-red-600' : 'text-zinc-700'}`}>
                {label}
            </label>
            <div className={`first-letter w-full flex flex-row border focus:border-zinc-500 focus:ring-0 rounded-md shadow-sm justify-center items-center bg-zinc-50 ${error ? 'border-red-500' : 'border-zinc-400'}`}>
                {
                    iconLeft ?
                        <div className="ml-2">{iconLeft}</div>
                    : null
                }
                <input
                    type={type}
                    name={name}
                    value={value}
                    className={`bg-transparent border-0 focus:border-0 focus:ring-0 w-full`}
                    ref={input}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => handleChange(e)}
                />
                {
                    iconRight ?
                        <div className="mr-2">{iconRight}</div>
                    : null
                }
            </div>
            {
                error ?
                    <span className="text-sm text-red-600 ml-3">{error}</span>
                : null
            }
        </div>
    );
});
