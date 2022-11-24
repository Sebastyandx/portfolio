import React from "react";
import Portada from "../components/Portada";
import Proyectos from "../components/Proyectos";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="container-all">
        <Portada />
      </div>
      {/*   <Proyectos /> */}
    </div>
  );
}
