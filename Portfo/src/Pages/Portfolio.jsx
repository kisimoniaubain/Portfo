import "./Portfolio.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Pop from "../assets/Capture pop.PNG";
import Popol from "../assets/Capture popol.PNG";
import Por from "../assets/Capture por.PNG";
import Port from "../assets/Capture port.PNG";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const portfolioProjects = [
  {
    image: Pop,
    type: "Web Portfolio",
    title: "Creative Landing Section",
    description: "Hero section with clean typography and balanced visual hierarchy.",
    tags: ["React", "Responsive", "UI Design"],
    alt: "Portfolio landing page project preview",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL
  },
  {
    image: Por,
    type: "Web Portfolio",
    title: "Service Showcase",
    description: "Structured section presenting services and skills in a modern layout.",
    tags: ["Layout", "UX", "CSS"],
    alt: "Service showcase project preview",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL
  },
  {
    image: Port,
    type: "Web Portfolio",
    title: "Responsive Contact View",
    description: "Contact-focused page optimized for mobile and tablet experience.",
    tags: ["Forms", "Mobile", "Accessibility"],
    alt: "Responsive contact section preview",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL
  },
  {
    image: Popol,
    type: "Web Portfolio",
    title: "Project Gallery Overview",
    description: "Gallery presentation for showcasing multiple design and development works.",
    tags: ["Gallery", "Cards", "Performance"],
    alt: "Project gallery page preview",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL
  }
];

const Portfolio = () => {
  return (
    <section className='portfolio-page'>
      <header className="section-head">
        <h3>Portfolio Projects</h3>
        <p>Selected website experiences designed and built with a focus on clarity and performance.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={portfolioProjects} />
      </div>
    </section>
  )
}

export default Portfolio
