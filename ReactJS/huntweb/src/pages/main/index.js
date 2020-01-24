import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Main() {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');
            setProducts(response.data.docs);
        }
        loadProducts();
    }, []);

    return (
        <div className="product-list">
            {
                products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="/">Acessar</a>
                    </article>
                ))
            }
        </div>
    );
}