import useOrders from '../hook/useOrders.js';
import Order from "./Order.jsx";

const Orders = () => {
    const orders = useOrders("orders");

    console.log(orders);

    return (
        <div className="orders">
            {orders.map(order => (
                <Order key={order.id} {...order} />
            ))}
        </div>
    );
};

export default Orders;