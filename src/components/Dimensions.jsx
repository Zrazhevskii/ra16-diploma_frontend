import React from 'react';

export const Dimensions = ({ data }) => {
    // console.log(data)

    return (
        data &&
        data.map((elem) => {
            // console.log(elem.size)
            if (elem.available) {
                return (
                    <span className='catalog-item-size selected'>
                        {elem.size}
                    </span>
                );
            }
            return <span className='catalog-item-size'>{elem.size}</span>;
        })
    );
};
{
    /* <>
            Размеры в наличии:{' '}

            <span className='catalog-item-size selected'>18 US</span>{' '}
            <span className='catalog-item-size'>20 US</span>
        </> */
}
