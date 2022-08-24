import React from "react";
import { NavLink } from "react-router-dom";
export default function List({ headerLinks,lang }) {
  return (
    <ul className="header-list">
      {headerLinks.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={`/${lang}/${link.to}`} activeClassName="selected" className="header-link" >
              {link.desc}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
