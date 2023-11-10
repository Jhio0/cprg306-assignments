import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    try {
        // Reference to the "items" subcollection under the user's document
        const itemsCollectionRef = collection(db, `users/${userId}/items`);
        
        // Get all documents in the "items" subcollection
        const querySnapshot = await getDocs(itemsCollectionRef);

        // Extract data from documents and build the items array
        const items = [];
        querySnapshot.forEach((doc) => {
            if (doc.exists() && doc.data().userId === userId) {
                items.push({
                    id: doc.id,
                    data: doc.data()
                });
            }
        });

        return items;
    } catch (error) {
        console.error("Error getting items:", error);
        // Handle the error or throw it for the calling code to handle
        throw error;
    }
}

async function addItem(userId, item) {
    try {
        // Reference to the "items" subcollection under the user's document
        const itemsCollectionRef = collection(db, `users/${userId}/items`);
        
        // Add a new document with the provided item data
        const newDocRef = await addDoc(itemsCollectionRef, {
            userId: userId,  // Assuming there's a field to store the user ID in each item document
            name: item.name,
            quantity: item.quantity,
            category: item.category
            // Add more fields as needed
        });

        // Return the ID of the newly created document
        return newDocRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        // Handle the error or throw it for the calling code to handle
        throw error;
    }
}


export { getItems, addItem };