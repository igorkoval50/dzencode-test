import useOrders from '../hook/useOrders.js';
import Order from "./Order.jsx";
import Product from "./Product.jsx";
import useDeleteProduct from "../hook/useDeleteProduct.js";
import { useState, useEffect } from "react";
import useDateFormatter from '../hook/useDateFormatter.js';
import { Tab, Nav, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const Orders = () => {
    const { orders, setOrders } = useOrders("orders");
    const { handleDeleteProduct } = useDeleteProduct(setOrders);
    const [productLength, setProductLength] = useState(0);
    const [activeTab, setActiveTab] = useState(orders[0]?.id || ""); // Set the first order as active by default
    const { formatDate } = useDateFormatter();
    const [activeKey, setActiveKey] = useState(null);

    // Calculate total number of products
    useEffect(() => {
        const totalProducts = orders.reduce((total, order) => {
            return total + (order.products ? order.products.length : 0);
        }, 0);
        setProductLength(totalProducts);
    }, [orders]);

    // Set the active tab to the first order if orders change
    useEffect(() => {
        if (orders.length > 0 && !activeTab) {
            setActiveTab(orders[0].id);
        }
    }, [orders, activeTab]);

    return (
        <div className="orders">
            <div className="filter-product">
                <span className="orders-icon">+</span>
                <h3>Приходы / {productLength} </h3>
            </div>

            <Tab.Container id="orders-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <Row className="row-orders">
                    {/* Left Side: Order Tabs */}
                    <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={setActiveKey}>
                        {orders.map(order => (
                            <Nav.Item key={order.id}>
                                <Nav.Link eventKey={order.id}>
                                    <i className="bi bi-list"></i>
                                    <div className="orders-product-value">
                                        <span className="all-products">{order.products ? order.products.length : 0}</span>
                                        <span className="product-text">Продукта</span>
                                    </div>
                                    <p className="text-muted mb-0">{formatDate(order.date)}</p>
                                    <div className="arrow-right">
                                        <i className="bi bi-arrow-right ml-2"></i>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    {/* Right Side: Products of Selected Order */}
                    <Tab.Content>
                        {orders.map(order => (
                            <Tab.Pane key={order.id} eventKey={order.id}>
                                <Order {...order} />
                                <div className="order-products">
                                    {order.products && order.products.map(product => (
                                        <Product
                                            key={product.id}
                                            product={product}
                                            onDelete={() => handleDeleteProduct(order.id, product.id)}
                                        />
                                    ))}
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Orders;