import React, { forwardRef, useEffect, useRef } from 'react';
import InputMask from "react-input-mask";


export default forwardRef(function MaskInput(
    { type = 'text', name, value, className, autoComplete, required, isFocused, handleChange, iconLeft, iconRight, label, error, disabled, ...props },
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
                {required ? <span className="text-red-600"> *</span> : null}
            </label>
            <div className={`first-letter w-full flex flex-row border focus:border-zinc-500 focus:ring-0 rounded-md shadow-sm justify-center items-center ${error ? 'border-red-500' : 'border-zinc-400'} ${disabled ? "bg-zinc-200" : 'bg-zinc-50'}`}>
                {
                    iconLeft ?
                        <div className="ml-2">{iconLeft}</div>
                    : null
                }
                <InputMask
                    type={type}
                    name={name}
                    value={value}
                    ref={input}
                    className={`bg-transparent border-0 focus:border-0 focus:ring-0 w-full`}
                    required={required}
                    onChange={(e) => handleChange(e)}
                    disabled={disabled}
                    maskPlaceholder={null}
                    {...props}
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
