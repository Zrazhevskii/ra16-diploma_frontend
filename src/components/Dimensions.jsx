import React from 'react';

export const Dimensions = ({ data }) => {

    let id = 1;

    return (
        data &&
        data.map((elem) => {
            // console.log(elem.size)
            // if (elem.available) {
            //     return (
            //         <span className='catalog-item-size selected'>
            //             {elem.size}
            //         </span>
            //     );
            // }
            return <span className='catalog-item-size' key={id++}>{elem.size}</span>;
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
