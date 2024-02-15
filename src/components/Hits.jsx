import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemCard } from './ItemCard';

export const Hits = () => {
    // console.log(data)
    const hitsItems = useSelector(state => state.addHits)
    // console.log(hitsItems)
    const dispatch = useDispatch()
    // console.log()

    return (
        <section className='top-sales'>
            <h2 className='text-center'>Хиты продаж!</h2>
            <div className='row'>
                {hitsItems.hits.map((elem) => {
                    return <ItemCard data={elem} key={elem.id}/>
                })}
            </div>
        </section>
    );
};
