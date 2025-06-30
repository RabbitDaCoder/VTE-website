import React from 'react';

const CustomInput = ({ htmlFor, text, type, id, name, placeholder, ...otherProps }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} {...otherProps} />
        </div>
    )
}

export default CustomInput;