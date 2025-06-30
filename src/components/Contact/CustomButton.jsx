import React from 'react';

const CustomButton = ({ text, onClick, className, ...otherProps }) => {
    const combinedClassName = `f16 cursorPointer color1 ${className}`.trim();

    return (
        <button className={combinedClassName} onClick={onClick} {...otherProps}>
            {text}
        </button>
    )
}

export default CustomButton;