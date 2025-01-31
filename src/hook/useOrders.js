// src/hooks/useOrders.js
import { useState, useEffect } from 'react';
import { db } from '../data/firebase.js';
import { getDocs, collection } from "firebase/firestore";

const useOrders = (collectionPath) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const ordersCollectionRef = collection(db, collectionPath);
                const data = await getDocs(ordersCollectionRef);

                const ordersData = await Promise.all(
                    data.docs.map(async (doc) => {
                        const order = { ...doc.data(), id: doc.id };

                        // Get the "products" subcollection for each order (if applicable)
                        const productsCollectionRef = collection(db, `orders/${doc.id}/products`);
                        const productsSnapshot = await getDocs(productsCollectionRef);
                        const products = productsSnapshot.docs.map(prodDoc => ({
                            ...prodDoc.data(),
                            id: prodDoc.id
                        }));

                        return { ...order, products };
                    })
                );

                setOrders(ordersData);
            } catch (err) {
                console.error("Error fetching orders:", err);
            }
        };

        getData();
    }, [collectionPath]);

    return orders;
};

export default useOrders;
