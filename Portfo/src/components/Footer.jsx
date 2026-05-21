import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="allfoot">
      <div className="icons">
        <a href="https://www.facebook.com/Soldado.KA" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
         <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a href="https://wa.me/0798406723" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp contact">
         <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a href="https://github.com/kisimoniaubain" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
         <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.tiktok.com/@soldado_439" target="_blank" rel="noopener noreferrer" aria-label="TikTok profile">
         <i className="fa-brands fa-tiktok"></i>
        </a>

        <a href="https://www.instagram.com/soldado0012/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
         <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;