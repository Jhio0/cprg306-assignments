"use client";
import React from "react";
import {useState, useEffect} from "react";
import itemlist from "./item-list";
import ItemList from "./itemlist";
import MealIdeas from "./meal-ideas";
import Page2 from "./page2";
import { useUserAuth } from "../_utils/auth-context";


function page() {
    const { user } = useUserAuth();

  // Check if the user is authenticated
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
    const [sortedItems, setSortedItems] = useState([...itemlist]);
    const [selectedItemName, setSelectedItemName] = useState("");

    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category'){
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    const handleSortByChange = (value) => {
        setSortBy(value);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name by removing the size and emoji
        const cleanedItemName = item.name
        .split(",")[0]
        .trim()
        .replace(/🍗|🍞|🥛|🥚|🍌|🥦/g, "");
  
      setSelectedItemName(cleanedItemName);
    };

    

    function addItem(newItem) {
        setItems(() => {
            return[newItem]
        });
    }

    // Combine sortedItems and items when they change
    useEffect(() => {
        // Combine sortedItems and items into a new array
        const combinedItems = [...sortedItems, ...items];
        setSortedItems(combinedItems);
    }, [items]);
    
    

    return (
    <main class="bg-slate-950">
        <Page2 onAdd={addItem}/>
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