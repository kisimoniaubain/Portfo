// import { useEffect } from "react";
import React, { useEffect } from "react";
import "./Logo.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Logo1 from "../assets/growing2.png";
import Logo2 from "../assets/bright.png";
import Logo3 from "../assets/ref.jpg";
import Logo4 from "../assets/soldi.png";
import Logo5 from "../assets/njblogo.jpg";
import Logo6 from "../assets/cowb.jpg";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const logoProjects = [
  {
    image: Logo1,
    type: "Logo Design",
    title: "Growing Logo",
    description: "A modern logo concept designed for clarity and easy brand recognition.",
    tags: ["Logo", "Identity", "Minimal"],
    alt: "Growing logo design",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Logo2,
    type: "Logo Design",
    title: "Bright Logo",
    description: "Bold symbol-led logo direction for social and product branding.",
    tags: ["Symbol", "Branding", "Creative"],
    alt: "Bright logo concept",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Logo3,
    type: "Logo Design",
    title: "REF Logo",
    description: "NGO-focused identity concept emphasizing trust and social impact.",
    tags: ["NGO", "Trust", "Identity"],
    alt: "REF logo sample",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Logo4,
    type: "Logo Design",
    title: "Soldado Logo",
    description: "Personal brand logo crafted for digital profile and portfolio identity.",
    tags: ["Personal Brand", "Digital", "Logo"],
    alt: "Soldado logo concept",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Logo5,
    type: "Logo Design",
    title: "NJB Logo",
    description: "Versatile logo system adaptable to web, print, and merchandise use.",
    tags: ["Versatile", "Brand Assets", "Visual"],
    alt: "NJB logo sample",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Logo6,
    type: "Logo Design",
    title: "Cowboy Mark",
    description: "Character-based identity concept with memorable silhouette and tone.",
    tags: ["Character", "Icon", "Brand Story"],
    alt: "Cowboy themed logo",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  }
];

const Logo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="logos-page">
      <header className="section-head">
        <h3>Logo Projects</h3>
        <p>Signature logo designs built to be memorable, scalable, and brand-aligned.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={logoProjects} compact />
       </div>
    </section>
  )
}

export default Logo

// import { useState } from "react";
// import Img1 from "./img1.jpg";
// import Img2 from "./img2.jpg";
// import Img3 from "./img3.jpg";

// function Gallery() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="image-box">
//         <img src={Img1} alt="project" />

//         <button className="view-btn" onClick={() => setOpen(true)}>
//           View Gallery
//         </button>
//       </div>

//       {open && (
//         <div className="gallery">
//           <button className="close" onClick={() => setOpen(false)}>X</button>

//           <div className="gallery-images">
//             <img src={Img1} alt="" />
//             <img src={Img2} alt="" />
//             <img src={Img3} alt="" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Gallery;