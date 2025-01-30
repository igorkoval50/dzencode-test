import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Orders from "./Orders";
import Products from "./Products";

const NavigationMenu = () => (
    <Router>
        <nav>
            <Link to="/orders">Orders</Link>
            <Link to="/products">Products</Link>
        </nav>
        <Routes>
            {/* Redirect root path to /orders */}
            <Route path="/" element={<Navigate to="/orders" />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    </Router>
);

export default NavigationMenu;
