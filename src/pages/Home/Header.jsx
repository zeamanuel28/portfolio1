import { Link } from "react-scroll";
import React from "react";

function Header() {
  return (
    <div className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            {[
              { to: "heroSection", text: "Home" },
              { to: "MyPortfolio", text: "Portfolio" },
              { to: "AboutMe", text: "About Me" },
              { to: "Contact", text: "Contact" },
              { to: "testimonial", text: "Testimonials" }
            ].map((item, index) => (
              <li key={index}>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={item.to}
                  className="text-md"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;