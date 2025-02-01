import { useState, useEffect, useCallback } from 'react';
import { db } from '../data/firebase.js';
import { getDocs, collection } from "firebase/firestore";

const useOrders = (collectionPath) => {
    const [orders, setOrders] = useState([]);

    const getData = useCallback(async () => {
        try {
            const ordersCollectionRef = collection(db, collectionPath);
            const data = await getDocs(ordersCollectionRef);

            const ordersData = await Promise.all(
                data.docs.map(async (doc) => {
                    const order = { ...doc.data(), id: doc.id };

                    // Fetch "products" subcollection
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
    }, [collectionPath]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { orders, setOrders };
};

export default useOrders;
