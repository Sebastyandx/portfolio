import "./portada.css";
import react from "./img/physics.png";
import js from "./img/java-script1.png";
import html from "./img/html-5.png";
import css from "./img/css-1.png";
import bootstrap from "./img/bootstrap1.png";
import postgreSQL from "./img/postgre1.png";
import node from "./img/node-js.png";
import sequilize from "./img/sequilize.png";
import github from "./img/github.png";
import link from "./img/linkedin.png";

export default function Portada() {
  return (
    <div className="container-all-about">
      <div className="container-name-about">
        <div className="nombre">
          <h1> Sebastián Rodriguez</h1>
          <a href="https://github.com/Sebastyandx" target="_black">
            <img className="icono1" src={github}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-rodriguez-080853208/"
            target="_black"
          >
            <img className="icono1" src={link}></img>
          </a>
          <h4>Full Stack Developer</h4>
          <h5>
            Hi! 🖐 I'm Seba and this is my portfolio I am 25 years old and I
            live in Buenos Aires. I started to internalize with web development
            around the year 2020 💻 Since then I have been studying self-taught.
            Doing courses, reading and practicing. 👨🏽‍🎓
          </h5>
          <h2>Skills</h2>
          <div className="lista">
            <p>
              <img className="icono" src={react} />
              React
            </p>
            <p>
              <img className="icono" src={js} />
              JavaScript
            </p>

            <p>
              <img className="icono" src={html} />
              HTML
            </p>
            <p>
              <img className="icono" src={css} />
              Css
            </p>
            <p>
              <img className="icono" src={bootstrap} />
              Bootstrap
            </p>
            <p>
              <img className="icono" src={postgreSQL} />
              PostgreSQL
            </p>
            <p>
              {" "}
              <img className="icono" src={sequilize} />
              Sequilize
            </p>
            <p>
              <img className="icono" src={node} />
              NodeJs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
