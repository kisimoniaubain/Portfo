import "./Website.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Sit from "../assets/2d.png";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const websiteProjects = [
  {
    image: Sit,
    type: "Client Website",
    title: "Product Promotion Website",
    description: "A focused marketing-style website layout that highlights products and call-to-actions.",
    tags: ["Marketing", "Frontend", "Responsive"],
    alt: "Product promotion website preview",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL
  }
];

const Website = () => {
  return (
    <section className='website-page'>
      <header className="section-head">
        <h3>Website Projects</h3>
        <p>Production-ready website work with clean structure and modern visual direction.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={websiteProjects} />
      </div>
    </section>
  )
}

export default Website
