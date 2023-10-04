"use client";
import React from "react";
import {useState} from "react";
import Item from "./item";
import itemlist from "./item-list";

function generate(props) {
    return (
       <Item 
       key= {props.id}
       name= {props.name}
       quantity= {props.quantity}
       category= {props.category}
       />
    )
}

function page() {

    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...itemlist];

    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category'){
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    const handleSortByChange = (value) => {
        setSortBy(value);
    };


    return (
    <main class="bg-slate-950">
        <div class="text-xl font-bold">
            <div>
            <button
                onClick={() => handleSortByChange('name')}
                style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}>
                Sort by Name
            </button>
            </div>
            <button
                onClick={() => handleSortByChange('category')}
                style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}>
                Sort by category
            </button>
            <h2>Shopping List</h2>
            {sortedItems.map(generate)}
        </div>
    </main>
    ) 
}

export default page;