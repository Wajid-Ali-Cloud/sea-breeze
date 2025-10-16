import React from "react";

/**
 * Simple menu items placeholder. Swap or expand with JSON or API later.
 */
const items = [
  { id: 1, title: "Classic Paella", price: "18€", desc: "Saffron rice, seafood." },
  { id: 2, title: "Grilled Octopus", price: "14€", desc: "Marinated and charred." },
  { id: 3, title: "Sea Breeze Salad", price: "9€", desc: "Mixed greens, citrus." },
  { id: 4, title: "Margherita Pizza", price: "11€", desc: "Tomato, mozzarella, basil." },
];

export default function MenuList({ full=false }) {
  const list = full ? [...items, ...items] : items;
  return (
    <div className="menu-list">
      {list.map(it => (
        <article className="menu-item" key={it.id}>
          <div className="item-left">
            <h4>{it.title}</h4>
            <p className="desc">{it.desc}</p>
          </div>
          <div className="item-right">
            <span className="price">{it.price}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
