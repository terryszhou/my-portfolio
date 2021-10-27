export const Projects = (props) => {
   const showProjects = props.projectData.map(e => (
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
   ))

   return (
      <div className="container pt-1">
         <img className="bg-image" src={props.flowersWhite} alt="background" />
         <div id="project-bg-left" />
         <div id="project-bg-right" />
         <div className="hex-box-main hex-box-other">
            <a className="hex-link" href="https://github.com/terryszhou/my-portfolio" target="_blank" rel="noreferrer">
               <div id="hex-ring-lg" />
               <div id="hex-greyspace-lg" />
               <div id="hex-gold">
                  <div id="hex-goldenrod">
                     <div id="hex-ring-sm">
                        <div id="hex-greyspace-sm">
                           <div id="hex-smallest" />
                        </div>
                     </div>
                  </div>
               </div>
               <h2>Projects</h2>
            </a>
         </div>
         <div className="project-main pt-5">
            <div className="project-box">{showProjects}</div>
         </div>
      </div>
   )
}