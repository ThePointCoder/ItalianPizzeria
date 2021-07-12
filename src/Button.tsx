import React from 'react';

const Button = ({text, onClick}): any => {

    return (
        <div className="px-1 hover:bg-gray-50 hover:text-blue-400 rounded-sm" onClick={onClick}>{text}</div>
    )
}

export default Button;