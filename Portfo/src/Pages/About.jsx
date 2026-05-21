import React from 'react'
import './About.css';
import { Outlet, Link } from "react-router-dom";
import Me from "../assets/why.png";

const About = () => {
  
  return (
    <>
      <div className="sec2">
         <div className="allsec2">
            <h2>About Me</h2>
            <p>With a solid foundation in modern web technologies, Kisimoni Aubain builds responsive, user friendly websites that focus on performance and clean design. As a graphic designer, he brings ideas to life through compelling visuals, branding, and digital content that communicate clearly and effectively. His combined expertise allows him to approach projects holistically ensuring both functionality and aesthetics work seamlessly together to deliver engaging user experiences.</p>
            <div className="sillstab">
              <h2>Why Choose Me</h2>
            <div className="whycolum">
             <div className="whycolum1">
              <h4>Web Development</h4>
              <p>I design and develop modern, high-performance websites that are responsive, secure, and built to deliver an exceptional user experience across all devices while helping businesses grow online. My focus is on clean code, fast loading speeds, and creating websites that are both functional and visually appealing.</p>
              <h4>Graphic Design</h4>
              <p>I craft professional and visually striking designs that capture attention, strengthen brand identity, and communicate your message clearly and effectively. Every design I create is carefully tailored to reflect your brand and leave a lasting impression on your audience.</p>
             </div>
             <div className="whycolum1">
              <img src={Me} alt="Kisimoni Aubain profile illustration" />
             </div>
            </div>
              <h2>Explore My Skills</h2>
            </div>
          <div className="Twolinks">
            <ul>
              <li><Link to="web">WEB DEVELOPMENT→</Link></li>
              <li><Link to="graphic">GRAPHIC DESIGN→</Link></li>
            </ul>
          </div>
         </div>
      </div>
      <Outlet />
    </>
  )
}

export default About
