import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

const NavigationMenu = () => (
    <Router>
        <nav>
            <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>
                Orders
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
                Products
            </NavLink>
        </nav>
        <AnimatedRoutes />
    </Router>
);

export default NavigationMenu;