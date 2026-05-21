import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Webwork.css";

const Webwork = () => {
    useEffect(() => {
      const target = document.body.scrollHeight / 2;
      let current = window.scrollY;
  
      const slowScroll = () => {
        if (current < target) {
          current += 7; // smaller number = slower speed
          window.scrollTo(0, current);
          requestAnimationFrame(slowScroll);
        }
      };
  
      slowScroll();
    }, []);
  return (
    <div className="webwork">
      <div className="workli">
        <ul>
          <li><Link to="portfolio">Portfolio Projects</Link></li>
          <li><Link to="website">Website Projects</Link></li>
          <li><Link to="game">Game Projects</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Webwork;