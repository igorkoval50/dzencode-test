import useOrders from '../hook/useOrders.js';
import Order from "./Order.jsx";
import Product from "./Product.jsx";
import useDeleteProduct from "../hook/useDeleteProduct.js";
import { useState, useEffect } from "react";

const Orders = () => {
    const { orders, setOrders } = useOrders("orders");
    const { handleDeleteProduct } = useDeleteProduct(setOrders);
    const [productLength, setProductLength] = useState(0);

    useEffect(() => {
        const totalProducts = orders.reduce((total, order) => {
            return total + (order.products ? order.products.length : 0);
        }, 0);
        setProductLength(totalProducts);
    }, [orders]);

    return (
        <div className="orders">
            <div className="filter-product">
                <h3>Приходы / {productLength} </h3>
            </div>

            {orders.map(order => (
                <div key={order.id}>
                    <Order key={order.id} {...order} />

                    <div className="order-products">
                        {order.products && order.products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                onDelete={() => handleDeleteProduct(order.id, product.id)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;