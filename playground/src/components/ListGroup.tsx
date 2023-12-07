import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getMesssage = (itemArray: string[]) => {
    if (itemArray.length === 0)
      return (
        <li className="list-group-item full-length">
          <p>Items not found</p>
        </li>
      );
    return items.map((item, index) => (
      <li
        className={
          selectedIndex == index
            ? "list-group-item full-length active"
            : "list-group-item full-length"
        }
        onClick={() => {
          setSelectedIndex(index);
          onSelectItem(item);
        }}
        key={item}
      >
        {item}
      </li>
    ));
  };

  return (
    <>
      <h1 className="list-group-header">{heading}</h1>
      <ul className="list-group">{getMesssage(items)}</ul>
    </>
  );
}

export default ListGroup;
