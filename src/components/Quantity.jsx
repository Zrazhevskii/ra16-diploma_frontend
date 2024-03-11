import React from 'react';

export const Quantity = () => {
    return (
        <p>
            Количество:{' '}
            <span className='btn-group btn-group-sm pl-2'>
                <button className='btn btn-secondary'>-</button>
                <span className='btn btn-outline-primary'>1</span>
                <button className='btn btn-secondary'>+</button>
            </span>
        </p>
    );
};
