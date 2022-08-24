import React from "react";
import { NavLink } from "react-router-dom";
export default function List({ headerLinks }) {
  return (
    <ul className="header-list">
      {headerLinks.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to="/" className="header-link">
              {link.desc}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
