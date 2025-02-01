import { useState } from 'react';
import useOrders from '../hook/useOrders.js';
import Product from "./Product.jsx";
import Filters from "./Filters.jsx";

const Products = () => {
    const orders = useOrders("orders");
    const [selectedType, setSelectedType] = useState("");
    const [selectedSpecification, setSelectedSpecification] = useState("");

    const filteredOrders = orders
        .map((order) => ({
            ...order,
            products: order.products.filter((product) => {
                const matchesType = selectedType ? product.type === selectedType : true;
                const matchesSpecification = selectedSpecification
                    ? product.specification === selectedSpecification
                    : true;
                return matchesType && matchesSpecification;
            }),
        }))
        .filter((order) => order.products.length > 0);

    return (
        <>
            <Filters
                orders={orders}
                onTypeChange={setSelectedType}
                onSpecificationChange={setSelectedSpecification}
            />

            <div className="products">
                {filteredOrders.map((order) => (
                    <div key={order.id} className="order-products">
                        {order.products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;