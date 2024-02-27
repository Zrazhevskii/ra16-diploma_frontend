import React from 'react';

export const CategoriesItems = ({ data }) => {
    // console.log(data)
    return (
        <li className='nav-item'>
            <a className='nav-link' href='#'>
                {data.title}
            </a>
        </li>
    );
};
