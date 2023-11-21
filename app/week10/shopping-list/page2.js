"use client";
import React from 'react';
import { useState } from "react";


function Page2(props) {
    const [item, setItem] = useState({
      name: "",
      quantity: 0,
      category: ""
    });
  
    // Handle input changes
    function handleChange(event) {
      const { name, value } = event.target;
  
      setItem((prevItem) => {
        return {
          ...prevItem,
          [name]: value
        };
      });
    }
  
    // Handle form submission
    async function submitItem(event) {
      event.preventDefault();
      try {
        // Convert quantity to a number
        const quantity = parseInt(item.quantity, 10);
    
        // Validate input
        if (
          !item.name ||
          item.name.length < 1 ||
          item.name.length > 50 ||
          isNaN(quantity) ||  // Check if quantity is NaN after conversion
          quantity < 1 ||
          quantity > 100 ||
          !item.category ||
          !['produce', 'dairy', 'bakery', 'meat', 'frozen foods', 'canned goods', 'dry goods', 'beverages', 'snacks', 'household', 'other'].includes(item.category)
        ) {
          // Handle validation error
          console.error("Invalid input. Check the form values.");
          return;
        }
  
        // Add the new item to Firestore using the service function
        await props.onAdd(item);
  
        // Reset the form
        setItem({
          name: "",
          quantity: 0,
          category: ""
        });
      } catch (error) {
        console.error("Error adding item:", error);
        // Handle the error
      }
    }
  
    return (
      <main className="flex justify-center w-full">
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
          <div className="mb-2">
            <input
              className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              type="text"
              placeholder="Item name"
              name="name"
              onChange={handleChange}
              value={item.name}
            />
          </div>
          <div className="flex justify-between">
            <input
              className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              type="number"
              min="1"
              max="99"
              name="quantity"
              onChange={handleChange}
              value={item.quantity}
            />
            <select
              className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              name="category"
              onChange={handleChange}
              value={item.category}
            >
              <option value="produce">produce</option>
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
            onClick={submitItem}
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </main>
    );
  }
  
export default Page2;