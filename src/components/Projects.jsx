import {Hex} from "./Hex";

export const Projects = ({ projectData, flowersWhite }) => {
  const showProjects = projectData.slice(0).reverse().map(e => (
    <div className="project-hex">
      <div className="project-hex-outer" />
      <img className="project-pic" src={e.source} alt={e.alt}/>
      <div className="project-desc">
        <h3>{e.header}</h3>
        <p className="project-about">{e.about}</p>
        <p className="project-skills">{e.skills}</p>
        <p className="project-links">
          {e.links.map(x => 
            <a href={x.link} target="_blank" rel="noreferrer">
              {x.linkText}
            </a>
          )}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container pt-1">
      <img className="bg-image" src={flowersWhite} alt="background" />
      <div id="project-bg-left" />
      <div id="project-bg-right" />
      <Hex title="Projects" />
      <div className="project-main pt-5">
        <div className="project-box">{showProjects}</div>
      </div>
    </div>
  );
};
