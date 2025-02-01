// src/uploadProducts.js
import { db } from './firebase.js';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { products1, products2, products3 } from "./data.js";

// Function to upload all products
export const uploadProducts = async (orderId) => {
    const productsCollectionRef = collection(db, `orders/${orderId}/products`);
    const batch = writeBatch(db);

    products3.forEach(product => {
        const productDocRef = doc(productsCollectionRef, product.id);
        batch.set(productDocRef, product);
    });

    try {
        await batch.commit();
        console.log('All products uploaded successfully');
    } catch (err) {
        console.error('Error uploading products: ', err);
    }
};
