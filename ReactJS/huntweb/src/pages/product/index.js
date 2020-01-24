import React, { useEffect, useState } from 'react';
import api from '../../services/api';


export default function Product(props) {

    const [product, setProduct] = useState({});
    const { id } = props.match.params;

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        }
        loadProduct();
    }, []);

    return (
        <div className="product-list">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    );
}