import React from 'react';

const CustomButton = ({ text, onClick, className, href, ...otherProps }) => {
    const combinedClassName = `${className}`.trim();

    if (href) {
        return (
            <a href={href} target={'_blank'} className={combinedClassName} {...otherProps}>
                {text}
            </a>
        )
    }

    return (
        <button className={combinedClassName} onClick={onClick} {...otherProps}>
          {text}
        </button>
    )
}

export default CustomButton;