import { NavLink } from "react-router-dom";
import "./Header.css";
import { AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <header className="_header">
      <div className="wrapper">
        <ul className="menus font-l ">
          <li className="menuLi">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "menuUnder" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "menuUnder" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) => (isActive ? "menuUnder" : undefined)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/experience"}
              className={({ isActive }) => (isActive ? "menuUnder" : undefined)}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? "menuUnder" : undefined)}
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="https://github.com/jihyun-jeon" target="_black">
              <AiFillGithub size="32" />
            </a>
          </li>
          <li>
            <a href="https://velog.io/@jhplus13/series" target="_black">
              <svg
                width="28"
                height="28"
                viewBox="0 0 192 192"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
