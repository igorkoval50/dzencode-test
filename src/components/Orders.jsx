import useOrders from '../hook/useOrders.js';
import Order from "./Order.jsx";
import Product from "./Product.jsx";
import useDeleteProduct from "../hook/useDeleteProduct.js";

const Orders = () => {
    const {orders, setOrders } = useOrders("orders");
    const { handleDeleteProduct } = useDeleteProduct(setOrders);

    return (
        <div className="orders">
            {orders.map(order => (
                <>
                    <Order key={order.id} {...order} />

                    <div key={order.id} className="order-products">
                        {order.products && order.products.map(product => (
                            <Product key={product.id} product={product}  onDelete={() => handleDeleteProduct(order.id, product.id)} />
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Orders;