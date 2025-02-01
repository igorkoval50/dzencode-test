import useOrders from '../hook/useOrders.js';
import Order from "./Order.jsx";
import Product from "./Product.jsx";
import Filters from "./Filters.jsx";

const Orders = () => {
    const orders = useOrders("orders");

    return (
        <div className="orders">
            {orders.map(order => (
                <>
                    <Order key={order.id} {...order} />

                    <div key={order.id} className="order-products">
                        {order.products && order.products.map(product => (
                            <Product key={product.id} product={product}/>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Orders;