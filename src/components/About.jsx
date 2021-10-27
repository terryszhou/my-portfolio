import {Hex} from "./Hex"

export const About = (props) => {
   const qAndAData = props.qAndA.map(e => (
         <>
            <div className="question-box">
               <p className="question-text">{e.question}</p>
            </div>
            <div className="answer-box">
               <p className="answer-text">
                  {e.answer}
                  {
                     e.answer === "Nidoking!" 
                     && <img className="pokemon-sprite" src={props.nidoking} alt="nidoking"/>
                  }
               </p>
            </div>
         </>
      )
   )

   const keyTable = props.keyTable.map(e => (
      <th>
         <i className={`key-icon ${e.class}`} style={{color: e.color}}>
            <p className="tip-text">{e.tip}</p>
         </i>
      </th>
   ))

   const aboutTable = props.aboutTable.map(e => (
      <tr>
         <th>{e.heading}</th>
         {e.data.map(x => <td>{x}</td>)}
      </tr>
   ))

   return (
      <div className="container pt-3">
         <img className="bg-image" src={props.flowersWhite} alt="background" />
         <div id="skew-bg-left" />
         <div id="skew-bg-right" />
         <Hex title="About"/>
         <div className="d-flex flex-column">
            <div className="content-box">
               <h3 className="content-box-heading">Get to Know Me</h3>
               <div className="content-box-outer">
                  <fieldset className="content-field">
                     <div id="scroll-arrow">
                        <p>Scroll</p>
                     </div>
                     {qAndAData}
                  </fieldset>
               </div>
            </div>
            <div className="content-box">
               <h3 className="content-box-heading">Key Skills</h3>
               <div className="table-responsive">
                  <table className="table table-striped table-dark table-borderless">
                     <tbody>
                        <tr>{keyTable}</tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="content-box">
               <h3 className="content-box-heading">Full Toolbox</h3>
               <div className="table-card">
                  <div className="table-responsive">
                     <table className="table table-striped table-dark table-borderless">
                        <tbody>{aboutTable}</tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className="content-box">
               <h3 className="content-box-heading">Want to Know More?</h3>
               <a href="https://s3.us-west-1.amazonaws.com/terryszhou.com/terryzhou-resume.pdf" target="_blank" rel="noreferrer">
                  <div className="icon fas fa-download text-warning"/>
               </a>
               <p id="resume-text">Check out my resume!</p>
            </div>
         </div>
      </div>
   )
}
