import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => setItems([...items, item]);
  const handleDeleteItem = (id) =>
    setItems(items.filter((item) => item.id !== id));
  const handleUpdateItem = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
