import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Main() {

    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);


    useEffect(() => {
        async function loadProducts() {
            const response = await api.get(`/products?page=${page}`);
            const { docs, ...productInfo } = response.data;
            setProducts(docs);
            setProductInfo(productInfo);
        }
        loadProducts();
    }, [page]);

    function prevPage() {
        if (page === 1) {
            return;
        }
        else {
            setPage(page - 1);
        }
    }
    function nextPage() {
        if (page === productInfo.pages) {
            return;
        }
        else {
            setPage(page + 1);
        }
    }

    return (
        <div className="product-list">
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={nextPage}>Próximo</button>
            </div>
            {
                products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}>Acessar</Link>
                    </article>
                ))
            }
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={nextPage}>Próximo</button>
            </div>
        </div>
    );
}