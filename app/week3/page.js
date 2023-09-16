import React from "react";
import Item from "./item";
import itemList from "./item-list";

function generate(props) {
    return (
       <Item 
       key= {props.name}
       name= {props.name}
       quantiy= {props.quantity}
       category= {props.category}
       />
    )
}

function page() {
    return (
    <main class="bg-slate-950">
        <div class="text-3xl font-bold m-2">
            <h2>Shopping List</h2>
            {itemList.map(generate)}
        </div>
    </main>
    )
}

export default page;