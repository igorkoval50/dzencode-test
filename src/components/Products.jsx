import useOrders from '../hook/useOrders.js';
import Product from "./Product.jsx";
import Filters from "./Filters.jsx";

const Products = () => {
    const orders = useOrders("orders");

    return (
        <>
            <Filters orders={orders} />

            <div className="products">
                {orders.map(order => (
                    <div key={order.id} className="order-products">
                        {order.products && order.products.map(product => (
                            <Product key={product.id} product={product}/>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
};

export default Products;