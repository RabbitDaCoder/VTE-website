import React from 'react';

const CustomButton = ({ text, onClick, className, ...otherProps }) => {
    const combinedClassName = `${className}`.trim();

    return (
        <button className={combinedClassName} onClick={onClick} {...otherProps}>
            {text}
        </button>
    )
}

export default CustomButton;