import { useEffect } from "react";
import "./Web.css";
import Webscript from "./Webscript";
import { Link } from "react-router-dom";

const Web = () => {
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
    <>
       <Webscript />
    <div className='web'>
      <div className="webcolum">
        <div className="webcolum1">
         <div className="coli">
          <div className="icon">
            <h1><i className="fa-solid fa-code"></i></h1>
          </div>
          <div className="icontext">
            <h4>Frontend Development</h4>
            <p>I am a web Developer, I develope <br />business websites with a clear <br />focus on functionality.</p>
          </div>
        </div>
        <div className="coli">
          <div className="icon">
           <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="icontext">
            <h4>Backend Development</h4>
            <p>I am a web designer and my <br />projects reflect creativity, functionality, <br />and attentionto detail.</p>
          </div>
          </div>
        </div>
        <div className="webcolum2">
      <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-6">
            <div className="progress-card ms-3 ms-md-0">
              <div className="circular-progress html-css">
                <span className="progress-value html-progress">0%</span>
              </div>
              <br />
              <span className="text">HTML & CSS</span>
            </div>
          </div>
          <div className="col-10 col-md-6 mt-4 mt-md-0" id='marg'>
            <div className="progress-card ms-3 ms-md-0">
              <div className="circular-progress javascript">
                <span className="progress-value javascript-progress">0%</span>
              </div>
              <br />
              <span className="text">JavaScript</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-4">
          <div className="col-10 col-md-6">
            <div className="progress-card ms-3 ms-md-0">
              <div className="circular-progress php">
                <span className="progress-value php-progress">0%</span>
              </div>
              <br />
              <span className="text">PHP</span>
            </div>
          </div>
          <div className="col-10 col-md-6 mt-4 mt-md-0" id='marg'>
            <div className="progress-card ms-3  ms-md-0">
              <div className="circular-progress reactjs">
                <span className="progress-value reactjs-progress">0%</span>
              </div>
              <br />
              <span className="text">ReactJS</span>
            </div>
          </div>
        </div>
        </div>
        </div>
       </div>
       <div className="exploration">
         <Link to="/work">
         <button>Explore my work</button>
         </Link>
       </div>
    </div>
    <section className='empty' id="web-section"></section>
     </>
  )
}

export default Web

// import React from "react";
// import "./Web.css";
// import Webscript from "./Webscript";


// const Web = () => {
//   return (
//     <>

//        <Webscript />
    
//     <div className="web">
//       <div className="webcolum">
//         <div className="webcolum1">
//           <h1><i className="fa-solid fa-code"></i></h1>
//           <h4>Frontend Development</h4>
//           <p>
//             I am a web Developer, I develope <br />
//             business websites with a clear <br />
//             focus on functionality.
//           </p>

//           <i className="fa-solid fa-pen-to-square"></i>
//           <h4>Backend Development</h4>
//           <p>
//             I am a web designer and my <br />
//             projects reflect creativity, functionality, <br />
//             and attention to detail.
//           </p>
//         </div>

//         <div className="webcolum2">
//           <div className="col-10 col-md-5 skill-with-progress">
//             <div className="row justify-content-evenly">
              
//               <div className="col-10 col-md-6">
//                 <div className="progress-card ms-3 ms-md-0">
//                   <div className="circular-progress html-css">
//                     <span className="progress-value html-progress">0%</span>
//                   </div>
//                   <br />
//                   <span className="text">HTML & CSS</span>
//                 </div>
//               </div>

//               <div className="col-10 col-md-6 mt-4 mt-md-0">
//                 <div className="progress-card ms-3 ms-md-0">
//                   <div className="circular-progress javascript">
//                     <span className="progress-value javascript-progress">0%</span>
//                   </div>
//                   <br />
//                   <span className="text">JavaScript</span>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Web;
