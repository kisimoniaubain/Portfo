import "./Poster.css";
import ProjectShowcase from "../components/ProjectShowcase";
import Post1 from "../assets/3d post.jpg";
import Post2 from "../assets/nike.jpg";
import Post3 from "../assets/3years.jpg";
import Post4 from "../assets/usec post.jpg";
import Post5 from "../assets/iphone.jpg";
import Post6 from "../assets/i d.jpg";
import Post22 from "../assets/poster22.jpg";
import Post44 from "../assets/poster44.jpg";
import Post66 from "../assets/poster66.jpg";

const SOURCE_URL = "https://github.com/kisimoniaubain";
const LIVE_URL = "https://www.instagram.com/soldado0012/?hl=en";

const posterProjects = [
  {
    image: Post22,
    type: "Poster Design",
    title: "Creative Poster 01",
    description: "A concept poster with cinematic depth and strong visual focus.",
    tags: ["Poster", "Campaign", "Creative"],
    alt: "Creative poster sample one",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post1,
    type: "Poster Design",
    title: "3D Product Poster",
    description: "Product-centered visual style using dimensional composition.",
    tags: ["3D", "Product", "Brand"],
    alt: "3D product poster sample",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post2,
    type: "Poster Design",
    title: "Nike Style Concept",
    description: "Sports-inspired concept with energetic typographic treatment.",
    tags: ["Sports", "Typography", "Visual"],
    alt: "Nike style poster sample",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post44,
    type: "Poster Design",
    title: "Event Poster 02",
    description: "Promotional event poster designed for digital sharing and print.",
    tags: ["Event", "Promotion", "Design"],
    alt: "Event poster design two",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post3,
    type: "Poster Design",
    title: "Anniversary Campaign",
    description: "Anniversary visual concept with celebratory messaging and color harmony.",
    tags: ["Campaign", "Anniversary", "Brand"],
    alt: "Anniversary campaign poster",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post4,
    type: "Poster Design",
    title: "USEC Awareness Poster",
    description: "Awareness-focused design supporting organization communication.",
    tags: ["NGO", "Awareness", "Social Impact"],
    alt: "USEC awareness poster",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post66,
    type: "Poster Design",
    title: "Creative Poster 03",
    description: "Color-driven creative composition with strong center-point messaging.",
    tags: ["Creative", "Color", "Layout"],
    alt: "Creative poster design three",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post5,
    type: "Poster Design",
    title: "Tech Product Poster",
    description: "Sleek and minimal visual approach tailored for product promotion.",
    tags: ["Tech", "Product", "Minimal"],
    alt: "Tech product poster design",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  },
  {
    image: Post6,
    type: "Poster Design",
    title: "Identity Poster",
    description: "Identity-driven concept emphasizing message and brand association.",
    tags: ["Identity", "Brand", "Creative"],
    alt: "Identity themed poster design",
    liveUrl: LIVE_URL,
    repoUrl: SOURCE_URL,
    liveLabel: "View Design"
  }
];

const Poster = () => {
  return (
    <section className="posters-page">
      <header className="section-head">
        <h3>Poster Projects</h3>
        <p>Brand-ready poster concepts designed for social media, print, and campaigns.</p>
      </header>
      <div className="showcase-wrap">
        <ProjectShowcase items={posterProjects} compact />
      </div>
    </section>
  )
}

export default Poster
