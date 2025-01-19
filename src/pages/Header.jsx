import React from "react";
import "./header.css";
import NavItem from "../components/NavItem";
import navItemData from "../data/hederItems";
import SearchBox from "../components/SearchBox";
import SingBtn from "../components/SingBtn";

function Header() {
  return (
    <header>
      <h4>CINEMA</h4>
      <ul>
        {navItemData.map((item) => (
          <NavItem key={item._id} item={item} />
        ))}
      </ul>
      <div className="search-box">
        <SearchBox />
      </div>
      <div className="singBtn">
        <SingBtn />
      </div>
    </header>
  );
}

export default Header;
