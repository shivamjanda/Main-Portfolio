import "./Navbar.css";
import logo from "../../assets/logo.png";
import resumepdf from "../../assets/example.pdf";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const [hoverPosition, setHoverPosition] = useState({ width: 0, left: 0 });
  const navRef = useRef(null);

  const handleMouseOver = (e) => {
    const target = e.target.closest("li"); // making sure we get the <li>
    if (target) {
      const rect = target.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      const navPaddingLeft = parseFloat(
        getComputedStyle(navRef.current).paddingLeft
      );
      const navPaddingRight = parseFloat(
        getComputedStyle(navRef.current).paddingRight
      );
      setHoverPosition({
        width: rect.width + 20,
        left: rect.left - navRect.left - navPaddingLeft - 1,
      });
    }
  };
  const handleMouseOut = (e) => {
    setHoverPosition({ width: 145, left: 0 });
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <div className="oval">
        <nav>
          <ul
            className="navlinks"
            ref={navRef}
            onMouseLeave={handleMouseOut} /* Reset oval on mouse leave */
          >
            <div
              className="hover-oval"
              style={{
                width: `${hoverPosition.width}px`,
                left: `${hoverPosition.left}px`,
              }}
            />
            <li onMouseOver={handleMouseOver}>
              <a href="">Home</a>
            </li>
            <li onMouseOver={handleMouseOver}>
              <a href="#">About</a>
            </li>
            <li onMouseOver={handleMouseOver}>
              <a href="#">Skills</a>
            </li>
            <li onMouseOver={handleMouseOver}>
              <a href="#">Projects</a>
            </li>

            <li onMouseOver={handleMouseOver}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <button>
        <a href={resumepdf} download className="resume">
          Resume
        </a>
      </button>
    </header>
  );
};

export default Navbar;
