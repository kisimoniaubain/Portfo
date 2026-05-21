import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import bgVideo from "./assets/can.mp4";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Web from "./Pages/Web";
import Graphic from "./Pages/Graphic";
import Graphicwork from "./Pages/Graphicwork";
import Webwork from "./Pages/Webwork";
import Portfolio from "./Pages/Portfolio";
import Website from "./Pages/Website";
import Game from "./Pages/Game";
import Flayer from "./Pages/Flayer";
import Poster from "./Pages/Poster";
import Logo from "./Pages/Logo";
import Brand from "./Pages/Brand";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="route-stage">
      <Routes>

        <Route
          path="/"
          element={
            <Home
              name="Kisimoni Aubain"
              nimo="Web Developer"
              graph="Graphic Designer"
              Statement="Kisimoni Aubain is a passionate and creative web developer and graphic designer..."
            />
          }
        />

        <Route path="/about" element={<About />}>
          <Route path="web" element={<Web />} />
          <Route path="graphic" element={<Graphic />} />
        </Route>

        <Route path="/work" element={<Work />}>

          <Route path="webwork" element={<Webwork />}>
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="website" element={<Website />} />
            <Route path="game" element={<Game />} />
          </Route>

          <Route path="graphicwork" element={<Graphicwork />}>
            <Route path="flayer" element={<Flayer />} />
            <Route path="poster" element={<Poster />} />
            <Route path="brand" element={<Brand />} />
            <Route path="logo" element={<Logo />} />
          </Route>

        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/web" element={<Web />} />

      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <Navbar />

      <AnimatedRoutes />

      <Footer />

    </BrowserRouter>
  );
};

export default App;