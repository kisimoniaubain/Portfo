import React, { useEffect } from "react";
import "./Brand.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Brand1 from "../assets/brand1.jpg";
import Brand2 from "../assets/brand2.jpg";
import Brand3 from "../assets/brand3.png";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const brandProjects = [
  {
    image: Brand1,
    type: "Brand Identity",
    title: "Brand Concept 01",
    description: "Identity concept focused on clarity, uniqueness, and strong market presence.",
    tags: ["Identity", "Brand Strategy", "Visual System"],
    alt: "Brand identity sample one",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Brand2,
    type: "Brand Identity",
    title: "Brand Concept 02",
    description: "A bold identity direction blending logo treatment and brand tone.",
    tags: ["Branding", "Creative", "Direction"],
    alt: "Brand identity sample two",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Brand3,
    type: "Brand Identity",
    title: "Brand Concept 03",
    description: "Flexible identity mockup for digital and print brand touchpoints.",
    tags: ["Mockup", "Brand Assets", "Visual Design"],
    alt: "Brand identity sample three",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  }
];

const Brand = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="brands-page">
      <header className="section-head">
        <h3>Brand Identity Projects</h3>
        <p>Identity systems designed to communicate trust, vision, and memorable brand voice.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={brandProjects} compact />
      </div>
    </section>
  )
}

export default Brand
