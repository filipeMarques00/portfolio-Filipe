import {
  DiHtml5,
  DiCss3,
  DiScrum,
  DiMysql,
  DiReact,
  DiJava,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
];

const css = [
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
];

const scrum = [
  { id: "scrum", name: "Scrum", icon: <DiScrum /> },
];

const sql = [
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
];

const react = [
  { id: "react", name: "React", icon: <DiReact /> },
];

const java = [
  { id: "java", name: "Java", icon: <DiJava/> },
];


const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

        {css.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

        {scrum.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

        {sql.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

        {react.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

        {java.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TechnologiesContainer