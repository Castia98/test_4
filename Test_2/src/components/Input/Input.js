import React from 'react';

const Input = ({ value, onChange, className }) => {
    return (
        <input type="text" value={value} onChange={onChange} className={className} placeholder='Enter a task' />
    );
};

export default Input;