import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCardItem } from '../actions/actionsItems';
import { SizeQuantity } from '../components/SizeQuantity';
import { BarLoader } from 'react-spinner-animated';
import { Error } from '../components/Error';
import 'react-spinner-animated/dist/index.css';

export const Card = () => {
    const { product, loading, error } = useSelector((state) => state.card);
    const params = useParams();
    const dispatch = useDispatch();
    const id = parseInt(params.id);

    useEffect(() => {
        dispatch(fetchCardItem(id));
    }, [id, dispatch]);

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

    let availability;
    if (sizes) {
        availability = sizes.find((elem) => elem.available === true);
    } else {
        availability = undefined;
    }

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
                        src={images && images[0]}
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
                </div>
            </div>
        </section>
    );
};
