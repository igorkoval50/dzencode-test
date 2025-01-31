// src/uploadProducts.js
import { db } from './firebase.js';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { products } from "./data.js";

// Function to upload all products
export const uploadProducts = async (orderId) => {
    const productsCollectionRef = collection(db, `orders/${orderId}/products`);
    const batch = writeBatch(db); // Create a batch operation

    products.forEach(product => {
        const productDocRef = doc(productsCollectionRef, product.id);
        batch.set(productDocRef, product);  // Add the product to the batch
    });

    try {
        await batch.commit();  // Execute the batch
        console.log('All products uploaded successfully');
    } catch (err) {
        console.error('Error uploading products: ', err);
    }
};
