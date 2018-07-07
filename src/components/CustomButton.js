import React from 'react'

const CustomButton = ({ value, onClick }) => (
    <button onClick={onClick} >
        Stan przycisku: {value?'OK':'NON'}
    </button>
);

export default CustomButton