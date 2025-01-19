import React from "react";
import "./navItem.css";

function NavItem({ item }) {
  return <li className={`items ${item.active ? "active" : undefined}`} >{item.name}</li>;
}

export default NavItem;
