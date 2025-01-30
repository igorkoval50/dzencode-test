import {  Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Orders from "./Orders";
import Products from "./Products";

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/orders" />} />
                <Route path="/orders" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Orders /></motion.div>} />
                <Route path="/products" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Products /></motion.div>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;