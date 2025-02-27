import React from "react";
import "./navItem.css";

function NavItem({ item, click }) {
  return (
    <a href={`#${item.name}`}
      className={`items ${item.active ? "active" : undefined}`}
      onClick={() => click(item._id)}
    >
      {item.name}
    </a>
  );
}
export default NavItem;
