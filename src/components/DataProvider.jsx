import { useEffect } from 'react';
import { uploadProducts } from '../data/uploadProducts.js';

function DataProvider() {
    const orderId = '4ZR4zDbofbSKYZqGGxep';

    useEffect(() => {
        uploadProducts(orderId);
    }, [orderId]);

    return (
        <h2>Data provider</h2>
    )
}

export default DataProvider;
