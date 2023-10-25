import React from "react";
import Item from "./item";

function ItemList({ itemlist, onItemSelect }) {
    const generate = (props) => {
      return (
        <Item
          key={props.id}
          name={props.name}
          quantity={props.quantity}
          category={props.category}
          onSelect={() => onItemSelect(props)} // Pass the item as an argument
        />
      );
    };
  
    return (
      <ul className="flex flex-col">
        {itemlist.map((item) => generate(item))}
      </ul>
    );
  }
  
  export default ItemList;