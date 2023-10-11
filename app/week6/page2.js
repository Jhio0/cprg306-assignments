"use client";
import React from 'react';
import { useState } from "react";
import itemlist from './item-list';


function Page2(props) {
    const [items, setItem] = useState({
        name: "",
        quantity: 0,
        category: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setItem(prevItem => {
            return {
                ...prevItem,
                [name]: value
            };
        });
    }  

    function submitItem(event) {
        props.onAdd(items);
        setItem({
            name: "",
            quantity: 0,
            category: "",
        })
        event.preventDefault();
    }

    return(
    <main className="flex justify-center w-full">
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input 
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                type="text" 
                placeholder="Item name" 
                name="name"
                onChange={handleChange}
                value={items.name}  
                />
            </div>
            <div className="flex justify-between">
                <input
                className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                type="number" min="1" max="99" 
                name="quantity"
                onChange={handleChange}
                value={items.quantity}
                onSubmit="{preventSubmit}"
                />
                <select onChange={handleChange}
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                    <option value={items.category} name="category"></option>
                    <option value="produce" name="category">Produce</option>
                    <option value="dairy" name="category">Dairy</option>
                    <option value="bakery" name="category">Bakery</option>
                    <option value="meat" name="category">Meat</option>
                    <option value="frozen foods" name="category">Frozen Foods</option>
                    <option value="canned goods" name="category">Canned Goods</option>
                    <option value="dry goods" name="category">Dry Goods</option>
                    <option value="beverages" name="category">Beverages</option>
                    <option value="snacks" name="category">Snacks</option>
                    <option value="household" name="category">Household</option>
                    <option value="other" name="category">Other</option>
                </select>
            </div>
            <button 
            type="submit" 
            onClick={submitItem}
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
            Submit
            </button>
        </form>
    </main>)
}

export default Page2;