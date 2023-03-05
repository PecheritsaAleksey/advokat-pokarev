import * as React from "react";
import { Link } from "gatsby";

import "../style/style.css";

const Layout = ({ pathname, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <h1 className="main-heading">
          <Link to="/">Адвокат Покарев</Link>
        </h1>
        <nav className="navigation">
          <ul className="menu-items">
            <li>
              <Link to="/" className={pathname === "/" ? "active" : ""}>
                Главная
              </Link>
            </li>
            {/* <li>
              <Link
                to="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                Обо мне
              </Link>
            </li> */}
            <li>
              <Link
                to="/practice"
                className={pathname === "/practice" ? "active" : ""}
              >
                Практика
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={pathname === "/service" ? "active" : ""}
              >
                Услуги
              </Link>
            </li>
            {/* <li>
              <Link to="/" className={pathname === "/feedbacks" ? "active" : ""}>
                Отзывы
              </Link>
            </li> */}
            <li>
              <Link
                to="/contacts"
                className={pathname === "/contacts" ? "active" : ""}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          © {new Date().getFullYear()},{` `}
          Адвокат Алексей Васильевич Покарев
        </p>
      </footer>
    </div>
  );
};

export default Layout;
