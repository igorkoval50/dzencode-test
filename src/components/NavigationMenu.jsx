import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

const NavigationMenu = () => (
    <Router>
        <div className="d-flex wrapper-main">
            {/* Sidebar */}
            <div className="bg-sidebar text-white p-3">
                <nav>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        <span>Приход</span>
                    </NavLink>

                    <NavLink
                        to="/orders"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                       <span>Группы</span>
                    </NavLink>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 main-wrapper p-3">
                <AnimatedRoutes />
            </div>
        </div>
    </Router>
);

export default NavigationMenu;
