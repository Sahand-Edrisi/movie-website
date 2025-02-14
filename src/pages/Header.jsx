import React, { useState } from "react";
import "./header.css";
import NavItem from "../components/NavItem";
import navItemData from "../data/navItemData";
import SearchBox from "../components/SearchBox";
import SingBtn from "../components/SingBtn";

function Header({ scroll }) {
  const [navItem, setNavItem] = useState(navItemData);
  function click(id) {
    const newNavItemActive = navItem.map((nav) => {
      nav.active = false;
      if (nav._id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavItem(newNavItemActive);
  }
  return (
    <>
      <header className={`${scroll === 0 ? "header" : "header active"}`}>
        <div className="bgColor"></div>
        <h4>CINEMA</h4>
        <div className="navItems">
          {navItem.map((item) => (
            <NavItem key={item._id} item={item} click={click} />
          ))}
        </div>
        <div className="search-box">
          <SearchBox />
        </div>
        <div className="singBtn">
          <SingBtn />
        </div>
        <div className="line"></div>
      </header>
    </>
  );
}

export default Header;
