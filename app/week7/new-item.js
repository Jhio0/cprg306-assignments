import Item from "./item";

function newItem({ items, onItemSelect }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <Item key={item.id} item={item} onItemSelect={onItemSelect} />
      ))}
    </ul>
  );
}

export default newItem;