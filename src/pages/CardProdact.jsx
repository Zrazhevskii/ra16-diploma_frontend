import React from 'react';

export const CardProdact = () => {
    return (
        <section class='catalog-item'>
            <h2 class='text-center'>Босоножки 'MYER'</h2>
            <div class='row'>
                <div class='col-5'>
                    <img
                        src='.././img/products/sandals_myer.jpg'
                        class='img-fluid'
                        alt=''
                    />
                </div>
                <div class='col-7'>
                    <table class='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>1000046</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>PAUL ANDREW</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>Чёрный</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>Кожа</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>Лето</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>Прогулка</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class='text-center'>
                        <p>
                            Размеры в наличии:{' '}
                            <span class='catalog-item-size selected'>
                                18 US
                            </span>{' '}
                            <span class='catalog-item-size'>20 US</span>
                        </p>
                        <p>
                            Количество:{' '}
                            <span class='btn-group btn-group-sm pl-2'>
                                <button class='btn btn-secondary'>-</button>
                                <span class='btn btn-outline-primary'>1</span>
                                <button class='btn btn-secondary'>+</button>
                            </span>
                        </p>
                    </div>
                    <button class='btn btn-danger btn-block btn-lg'>
                        В корзину
                    </button>
                </div>
            </div>
        </section>
    );
};
