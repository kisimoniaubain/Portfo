import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Graphicwork.css';

const Graphicwork = () => {
  return (
    <>
    <div className="Graphicwork">
       <div className="Graphicworkli">
       <ul>
         <li><Link to="flayer">Flayer Design</Link></li>
         <li><Link to="poster">Poster Design</Link></li>
         <li><Link to="brand">Brand Identity</Link></li>
         <li><Link to="logo">Logo Design</Link></li>
       </ul>
       </div>
    </div>
    <Outlet />
   </>
  )
}

export default Graphicwork
