import React from 'react';

const CustomInput = ({ htmlFor, text, className, type, id, name, placeholder, ...otherProps }) => {
    return (
        <div className="flex flex-col gap-y-[8px] mb-[15px] text-green-800">
            <label htmlFor={htmlFor}>{text}</label>
            <input className={`w-[100%] border border-green-400 text-green-900 focus:bg-green-400 focus:outline-none rounded-sm h-[35px] p-[5px] ${className}`} type={type} id={id} name={name} placeholder={placeholder} {...otherProps} />
        </div>
    )
}

export default CustomInput;