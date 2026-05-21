import { useState, useEffect } from "react";
import "./Home.css";
import Imo from "../assets/banner.png";


const Home = ({ name, nimo, graph, Statement }) => {
  
  //  Show more and show less button start -->

  const [showStatement, setShowStatement] = useState(false);

  //  Show more and show less button end -->

  // typing 2--->

const [typedName, settypedName] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    settypedName(graph.slice(0, index + 1));
    index++;

    if (index > graph.length) {
      index = 0;
    }

  },150);
  return () => clearInterval(interval);
}, [graph]);

// typing 1--->

const [typedText, setTypedText] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setTypedText(nimo.slice(0, index + 1));
    index++;

    // Restart when finished
    if (index > nimo.length) {
      index = 0;
    }

  }, 150);

  return () => clearInterval(interval);
}, [nimo]);
   
  return (
    <div className="Sec1">
      <div className="colum1">
        <h4>Hi.! I am</h4>
        <h1>{name}</h1>
        <h2>{typedText}</h2>
        <h2>{typedName}</h2>
        

        <button
          className="learn-more-btn"
          onClick={() => setShowStatement(!showStatement)}
        >
          {showStatement ? "Show Less ▲" : "Learn More →"}
        </button>

        {showStatement && <p id="paragraph">{Statement}</p>}

        {/* <h2>Hello! I am {name}</h2>
        <h3>I am a {nimo}</h3>
        <h3>I am a {graph}</h3>

        <p>
          Hello {name}, you are {useAge} years old.
        </p>

        <button onClick={increaseAge}>Increase Age</button>

        <p>You were born in {bornYear}.</p>
        <p>Gender: {Gender}</p>

        <div>
          
          <button onClick={() => setShowStatement(!showStatement)}>
          {showStatement ? "Show less..▲" : "Show more..▼"}
          </button>
          {showStatement && <p>{Statement}</p>}

        </div> */}
      </div>

      <div className="colum2">
        <img src={Imo} alt="profile" />
      </div>
    </div>
  );
};

export default Home;