import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCardItem } from '../actions/actionsItems';
import { SizeQuantity } from '../components/SizeQuantity';
import { BarLoader } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';

export const Card = () => {
    const { product, loading, error } = useSelector((state) => state.card);
    const params = useParams();
    const dispatch = useDispatch();
    const [src, setSrc] = useState();
    // const [avail, setAvail] = useState(true);
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
        sizes,
        reason,
    } = product;

    // useEffect(() => {
    //     if (sizes.find((elem) => elem.available === true) === undefined) {
    //         return setAvail(undefined)
    //     }
    //     setAvail(true)
    // }, [product]);


    const availability = sizes.find((elem) => elem.available === true);
    // console.log(availability)
    // console.log(availability)

    // console.log(product.sizes);

    if (error)
        return <Error text={'Что-то пошло не так, перегрузите страницу'} />;

    if (loading) {
        return (
            <BarLoader
                text={'Loading...'}
                center={true}
                width={'150px'}
                height={'150px'}
            />
        );
    }

    return (
        <section className='catalog-item'>
            <h2 className='text-center'>{title}</h2>
            <div className='row'>
                <div className='col-5'>
                    <img
                        // src={`${images[0]}`}
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
                    {availability === undefined ? (
                        <h6 className='availabil'>К сожалению размеров нет</h6>
                    ) : (
                        <SizeQuantity />
                    )}
                    {/* <SizeQuantity /> */}
                </div>
            </div>
        </section>
    );
};
