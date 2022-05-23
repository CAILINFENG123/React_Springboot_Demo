import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar .navbar-expand-xl navbar-dark bg-dark">
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item ">
                <a
                  className="nav-link navbar-brand"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-brand" href="/add-employee">
                  Add Employee
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default HeaderComponent;
