// import React from "react";
import React, { useState } from "react";
import "./Work.css";
import { Outlet, Link } from "react-router-dom";
import Baana from "../assets/baana.jpeg";
import Robert from "../assets/robert.jpeg";
import Abedi from "../assets/abedi.jpeg";

const Work = () => {
  const testimonials = [
    {
      image: Baana,
      name: "Bahana Hydrogene",
      positin: "CEO of Solidarity Initiative for Refugees (SIR)",
      text: " Bahana, expresses great pride in Kisimoni Aubain's growth and achievements in both web development and graphic design. He highlights Kisimoni's dedication, creativity, and strong work ethic throughout his training at SIR Center."
    },
    {
      image: Robert,
      name: "Amuri Robert Mwenda",
      positin: "PROJECT MANAGER of United Safe Environment Creators (USEC) CBO",
      text: "Amuri Robert Mwenda expresses his sincere appreciation for the impressive portfolio created by Kisimoni Aubain using web development. He commends Kisimoni for his creativity, attention to detail, and ability to present information in a clean, modern, and professi."
    },
    {
      image: Abedi,
      name: "Abedi Kabulo",
      positin: "CEO of United Safe Environment Creators (USEC) CBO",
      text: "Abedi Kabulo, praises Kisimoni Aubain for his outstanding work in designing the organization's poster. He notes Kisimoni's creativity, attention to detail, and ability to visually communicate USEC CBO's mission in a powerful and engaging way."
    }
  ];
  const [index, setIndex] = useState(0);
const [direction, setDirection] = useState("right");

const next = () => {
  setDirection("right");
  setIndex((prev) => (prev + 1) % testimonials.length);
};

const prev = () => {
  setDirection("left");
  setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
};
  
  return (
    <>
    <div className="works">
      <div className="allworks">
      <h2>Explore My Work</h2>
      <p>As a web developer and graphic designer, I specialize in creating visually appealing designs and functional websites that deliver great user experiences. My work combines creativity and technical skills to produce modern, responsive, and user-friendly digital solutions. From branding and graphic design to website development, I focus on quality, detail, and innovation to help businesses and individuals bring their ideas to life online. Each project I work on is designed to be both visually impactful and highly effective.</p>
      </div>
        <div className="Gallary">
          <h2>See My Gallery</h2>
        </div>
      <div className="worklink">
            <ul>
              <li><Link to="webwork">WEB DEVELOPMENT→</Link></li>
              <li><Link to="graphicwork">GRAPHIC DESIGN→</Link></li>
            </ul>
      </div>
    </div>
    <Outlet />
    <div className="work-page">

      <h2>Client Testimonials</h2>

      <div className="testimonial-slider">

    <div key={index} className={`testimonial ${direction}`}>
    <div className="testimg">
      <img 
        src={testimonials[index].image} 
        alt={testimonials[index].name}
        className="testimonial-img"
      />
    </div>

    <div className="testtext">
      <h2>{testimonials[index].name}</h2>
      <h4>{testimonials[index].positin}</h4>
      <p>"{testimonials[index].text}"</p>
    </div>
   </div>

   <div className="testbtn">
    <button onClick={prev} aria-label="Show previous testimonial">←</button>
    <button onClick={next} aria-label="Show next testimonial">→</button>
   </div>

   </div>

    </div>
    </>
  );
};
 
export default Work;