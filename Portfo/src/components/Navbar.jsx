import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import growing from "../assets/growing.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
        <div className='Nav'>
           <div className="logo">
            <img src={growing} alt="Growing logo" />
           </div>

           <button
             className="menu-toggle"
             type="button"
             aria-label="Toggle navigation menu"
             aria-expanded={menuOpen}
             onClick={() => setMenuOpen(!menuOpen)}
           >
             {menuOpen ? "x" : "☰"}
           </button>

            <ul className={`link ${menuOpen ? "open" : ""}`}>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/work" onClick={closeMenu}>Work</Link></li>
             <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
           </ul>
        </div>
    </nav>

  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import growing from "../assets/growing.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         {/* Logo */}
//         <div className="logo">
//           <img src={growing} alt="Growing logo" />
//         </div>

//         {/* Hamburger for small screens */}
//         <div
//           className="hamburger"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </div>

//         {/* Navigation Links */}
//         <ul className={menuOpen ? "nav-links active" : "nav-links"}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/work">Work</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
