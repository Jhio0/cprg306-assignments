"use client";
import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./itemlist";
import MealIdeas from "./meal-ideas";
import Page2 from "./page2";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

function page() {
  const { user } = useUserAuth();

  // Check if the user is authenticatedS
  if (!user) {
    // User is not authenticated, you can redirect or show a message
    return (
      <div>
        <p>You need to log in to access the shopping list.</p>
        {/* Add a login button or link to the landing page */}
      </div>
    );
  }

    const [sortBy, setSortBy] = useState("name");
    // const [groupedByCategory, setGroupedByCategory] = useState(false);
    const[items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([...items]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
      // Load items for the current user when the component mounts
      const loadItems = async () => {
          try {
              const userId = user.uid;
              const itemsData = await getItems(userId);
              setItems(itemsData);
          } catch (error) {
              console.error("Error loading items:", error);
              // Handle the error or throw it for the calling code to handle
          }
      };

      loadItems();
  }, [user]);

  // Sort items based on the selected sortBy option
  useEffect(() => {
      let newSortedItems = [...items];

      if (sortBy === 'name') {
          newSortedItems.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'category') {
          newSortedItems.sort((a, b) => a.category.localeCompare(b.category));
      }

      setSortedItems(newSortedItems);
  }, [items, sortBy]);
  

  const handleSortByChange = (value) => {
      setSortBy(value);
  };

  const handleItemSelect = (item) => {
      const cleanedItemName = item.name
          .split(",")[0]
          .trim()
          .replace(/🍗|🍞|🥛|🥚|🍌|🥦/g, "");

      setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = async (newItem) => {
    try {
        // Add the new item to Firestore using the service function
        const newItemId = await addItem(user.uid, newItem);

        // Update the local state with the new item and its ID
        setItems((prevItems) => [
            ...prevItems,
            {
                id: newItemId,
                data: newItem,
            },
        ]);
    } catch (error) {
        console.error("Error adding item:", error);
        // Handle the error or throw it for the calling code to handle
    }
};

    return (
    <main class="bg-slate-950">
        <Page2 onAdd={handleAddItem}/>
        <div class="text-xl font-bold">
            <div>Sort By: </div>
            <div>
            <button
                onClick={() => handleSortByChange('name')}
                style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
                className="text-black">
                Name
            </button>
            </div>
            <button
                onClick={() => handleSortByChange('category')}
                style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
                className="text-black">
                category
            </button>
            <h2>Shopping List</h2>
            <ItemList itemlist={sortedItems} onItemSelect={handleItemSelect} />

        </div>
        <div className="right-panel">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
    ) 
}

export default page;