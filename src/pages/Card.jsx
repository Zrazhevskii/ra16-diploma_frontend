import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCardItem } from '../actions/actionsItems';
import { Dimensions } from '../components/Dimensions';
import { Quantity } from '../components/Quantity';

export const Card = () => {
    const cardItem = useSelector((state) => state.card);
    const { product } = cardItem;
    const params = useParams();
    const dispatch = useDispatch();
    const [src, setSrc] = useState();
    const navi = useNavigate();

    const id = parseInt(params.id);

    useEffect(() => {
        dispatch(fetchCardItem(id));
    }, []);

    const {
        title,
        images,
        sku,
        manufacturer,
        color,
        material,
        season,
        reason,
        sizes,
    } = product;

    const handleCart = () => {
        navi('/cart')
    }

    // console.log(product.sizes)

    // useEffect(() => {
    //     try {
    // **Периодически выводится в консоли ошибка, что нельзя прочитать [0] или [1], посмотреть, что за хрень
    // setSrc(images[0])
    //     } catch {
    //         setSrc(images[1])
    //     }
    // }, [images])

    // ***НАДО сделать компоненты на 1) размеры и 2) количество!!!

    return (
        <section className='catalog-item'>
            <h2 className='text-center'>{title}</h2>
            <div className='row'>
                <div className='col-5'>
                    <img
                        // src={src}
                        className='img-fluid'
                        alt={title}
                    />
                </div>
                <div className='col-7'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-center'>
                        <p>
                            <Dimensions data={product.sizes} />
                        </p>
                        <Quantity />
                    </div>
                    <button className='btn btn-danger btn-block btn-lg' onClick={handleCart}>
                        В корзину
                    </button>
                </div>
            </div>
        </section>
    );
};
