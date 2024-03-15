import React, { useState } from 'react';

export const Quantity = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <p>
            Количество:
            <span className='btn-group btn-group-sm pl-2'>
                <button className='btn btn-secondary'>-</button>
                <span className='btn btn-outline-primary'>{quantity}</span>
                <button className='btn btn-secondary'>+</button>
            </span>
        </p>
    );
};
