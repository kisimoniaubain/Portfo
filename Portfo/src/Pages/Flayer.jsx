import "./Flayer.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Flaye1 from "../assets/Flay1.jpg";
import Flaye2 from "../assets/Flaya2.jpg";
import Flaye3 from "../assets/Flaya3.jpg";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const flyerProjects = [
  {
    image: Flaye1,
    type: "Flyer Design",
    title: "Campaign Flyer Concept 01",
    description: "A promotional flyer balancing message hierarchy and bold visual attraction.",
    tags: ["Flyer", "Branding", "Typography"],
    alt: "Campaign flyer design one",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Flaye2,
    type: "Flyer Design",
    title: "Event Flyer Concept 02",
    description: "Event-focused composition with strong color contrast and clear callout zones.",
    tags: ["Event", "Promotion", "Creative"],
    alt: "Event flyer design two",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Flaye3,
    type: "Flyer Design",
    title: "Product Flyer Concept 03",
    description: "Visual-first flyer style built to support social and print campaigns.",
    tags: ["Product", "Print", "Visual Identity"],
    alt: "Product flyer design three",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  }
];

const Flayer = () => {
  return (
    <section className="flyers-page">
      <header className="section-head">
        <h3>Flyer Projects</h3>
        <p>Visual flyer concepts crafted for campaigns, events, and product promotions.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={flyerProjects} compact />
      </div>
    </section>
  )
}

export default Flayer
