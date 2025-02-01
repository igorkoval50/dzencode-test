import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../data/firebase.js';

const useDeleteProduct = (setOrders) => {
    const handleDeleteProduct = async (orderId, productId) => {
        try {
            // Delete the product from Firestore
            const productDocRef = doc(db, `orders/${orderId}/products/${productId}`);
            await deleteDoc(productDocRef);

            // Update the local state
            setOrders((prevOrders) =>
                prevOrders.map((order) => {
                    if (order.id === orderId) {
                        return {
                            ...order,
                            products: order.products.filter((product) => product.id !== productId),
                        };
                    }
                    return order;
                })
            );
        } catch (err) {
            console.error("Error deleting product:", err);
        }
    };

    return { handleDeleteProduct };
};

export default useDeleteProduct;