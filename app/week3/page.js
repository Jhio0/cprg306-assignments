import React from "react";
import Item from "./Item";
import itemList from "./item-list";

function generate(props) {
    return (
       <Item 
       key= {props.name}
       name= {props.name}
       quantity= {props.quantity}
       category= {props.category}
       />
    )
}

function page() {
    return (
    <main class="bg-slate-950">
        <div class="text-xl font-bold">
            <h2>Shopping List</h2>
            {itemList.map(generate)}
        </div>
    </main>
    ) 
}

export default page;