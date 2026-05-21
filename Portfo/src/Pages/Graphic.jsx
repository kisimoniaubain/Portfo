import { useEffect } from "react";
import "./Graphic.css";
import Webscript from "./Webscript";
import { Link } from "react-router-dom";


const Graphic = () => {
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
    <div className='graph'>
      <Webscript />
      <div className="graphcolum">
      <div className="graphcolum1">
      <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-6">
            <div className="graphprogress-card ms-3 ms-md-0">
              <div className="graphcircular-progress html-css">
                <span className="graphprogress-value html-progress">0%</span>
              </div>
              <br />
              <span className="text">Photoshop</span>
            </div>
          </div>
          <div className="col-10 col-md-6 mt-4 mt-md-0" id='marg'>
            <div className="graphprogress-card ms-3 ms-md-0">
              <div className="graphcircular-progress javascript">
                <span className="graphprogress-value javascript-progress">0%</span>
              </div>
              <br />
              <span className="text">Pixellab</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-4">
          <div className="col-10 col-md-6">
            <div className="graphprogress-card ms-3 ms-md-0">
              <div className="graphcircular-progress php">
                <span className="graphprogress-value php-progress">0%</span>
              </div>
              <br />
              <span className="text">Illustrator</span>
            </div>
          </div>
          <div className="col-10 col-md-6 mt-4 mt-md-0" id='marg'>
            <div className="graphprogress-card ms-3  ms-md-0">
              <div className="graphcircular-progress reactjs">
                <span className="graphprogress-value reactjs-progress">0%</span>
              </div>
              <br />
              <span className="text">Lightroom</span>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="graphcolum2">
          <ul>
            <li><h3>Poster Design</h3></li>
            <p>I am a creative and passionate poster designer who enjoys turning ideas into powerful visual designs.</p>
            <li><h3>Flayer Design</h3></li>
            <p>I am a creative flyer designer who enjoys designing attractive and informative flyers that capture people’s attention.</p>
            <li><h3>Brand Design</h3></li>
            <p>I am a passionate brand designer who enjoys creating unique visual identities that help businesses stand out.</p>
            <li><h3>Certificate Design</h3></li>
            <p>I am a creative certificate designer who focuses on creating elegant and professional certificate designs that celebrate achievements and recognition.</p>
            <li><h3>Logo Design</h3></li>
            <p>I am a creative logo designer who enjoys turning ideas into simple, meaningful, and memorable visual symbols.</p>
          </ul>
        </div>
        </div>
        <div className="exploration">
         <Link to="/work">
         <button>Explore my work</button>
         </Link>
       </div>
    </div>
  )
}

export default Graphic
