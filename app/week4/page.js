"use client";
import React from 'react';
import { useState } from "react";

function page() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const preventSubmit = (x) => {
        x.preventSumbit
    }
    const item = {
        name,
        quantity,
        category,
    };

    console.log(item);

    

    const handleSubmit = () => {
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
      };

    return(
    <main className="flex justify-center w-full">
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input 
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                type="text" 
                placeholder="Item name" 
                value={name}  
                onChange={(e) => setName(e.target.value)}
                onSubmit="{preventSubmit}"
                required
                />
            </div>
            <div className="flex justify-between">
                <input
                className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                type="number" min="1" max="99" 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                onSubmit="{preventSubmit}"
                />
                <select onChange={(e) => setCategory(e.target.value)}
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                    <option value={category}></option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button 
            type="submit" 
            onClick={handleSubmit}
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
            Submit
            </button>
        </form>
    </main>)
}

export default page;