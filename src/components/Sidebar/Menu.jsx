import { Icon } from "Icons";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2 ">
      <ul className="flex flex-col">
        <li>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#282828" : "",
            })}
            to={"/"}
            className=" hover:text-white px-4 rounded text-sm font-semibold text-link  h-10 flex gap-x-4 items-center"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#282828" : "",
            })}
            to={"/search"}
            className="hover:text-white px-4 text-sm rounded font-semibold text-link  h-10 flex gap-x-4 items-center"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#282828" : "",
            })}
            to={"/collection"}
            className="hover:text-white px-4 text-sm rounded font-semibold text-link  h-10 flex gap-x-4 items-center"
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
