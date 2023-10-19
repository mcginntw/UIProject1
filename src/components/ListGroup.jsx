import { useState } from "react"; //added so we can access React's useState hook

function ListGroup() {
  const items = ["Coffee", "Tea", "Hot Chocolate", "Lemonade", "Italian Soda"];

  const [selectedIndex, setSelectedIndex] = useState(undefined);

  return (
    <>
      <h1>My list of items</h1>
      {items.length === 0 && <p>No items found</p>}
      {selectedIndex === 0 && <p>I summon thee :\</p>}
      <h2>I be out here testing prettier n shit y'feel me??</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
