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
    const [groupedByCategory, setGroupedByCategory] = useState(false);
    
    const sortedItems = [...itemlist];
    

    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category'){
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    const groupedItems = sortedItems.reduce((result, item) => {
        if (!result[item.category]) {
            result[item.category] = [];
        }
        result[item.category].push(item);
        return result;
    }, {})
    //sorted by category
    const sortedCategories = Object.keys(groupedItems).sort();

    const handleSortByChange = (value) => {
        setSortBy(value);
    };

    const handleGroupByCategory = () => {
        setGroupedByCategory(!groupedByCategory);
    };


    return (
    <main class="bg-slate-950">
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
            <div>
                <button 
                    onClick={handleGroupByCategory}
                    style={{ backgroundColor: groupedByCategory ? 'lightblue' : 'white' }}
                    className="text-black">
                    {groupedByCategory ? "Ungroup" : "Group by Category"}
                </button>
            </div>
                <h2>Shopping List</h2>
                {groupedByCategory
                    ? sortedCategories.map((category) => (
                        <div key={category}>
                            <h3 className="capitalize">{category}</h3>
                            {groupedItems[category].map(generate)}
                        </div>
                    ))
                :sortedItems.map(generate)}
        </div>
    </main>
    ) 
}

export default page;