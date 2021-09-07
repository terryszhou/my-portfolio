export const About = (props) => {
    const qAndAData = props.qAndA.map(e => {
        if (e.answer === "Nidoking!") {
            return (
                <>
                    <div className="question-box">
                        <p className="question-text">{e.question}</p>
                    </div>
                    <div className="answer-box">
                        <p className="answer-text">
                            {e.answer}
                            <img className="pokemon-sprite" src={props.nidoking} alt="nidoking"/>
                        </p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="question-box">
                        <p className="question-text">{e.question}</p>
                    </div>
                    <div className="answer-box">
                        <p className="answer-text">{e.answer}</p>
                    </div>
                </>
            )
        }
    })

    return (
        <div className="container pt-3">
            <img className="bg-image" src={props.flowersWhite} alt="background"/>
            <div id="skew-bg-left"/>
            <div id="skew-bg-right"/>
            <div className="hex-box-main hex-box-other">
                <div id="hex-ring-lg"/>
                <div id="hex-greyspace-lg"/>
                <div id="hex-gold">
                    <div id="hex-goldenrod">
                        <div id="hex-ring-sm">
                            <div id="hex-greyspace-sm">
                                <div id="hex-smallest"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>About</h2>
            </div>
            <div className="d-flex flex-column">
                <div className="content-box">
                    <h3 className="content-box-heading mb-3">Get to Know Me</h3>
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
                                <tr>
                                    <th>
                                        <i className="key-icon fab fa-python" style={{color: "rgb(54,113,158"}}>
                                            <p className="tip-text key-icon-tip">Python</p>
                                        </i>
                                    </th>
                                    <th>
                                        <i className="key-icon fab fa-js-square" style={{color: "rgb(233,211,56"}}>
                                            <p className="tip-text key-icon-tip">JavaScript</p>
                                        </i>
                                    </th>
                                    <th>
                                        <i className="key-icon fab fa-node-js" style={{color: "rgb(126,193,54"}}>
                                            <p className="tip-text key-icon-tip">Node.js</p>
                                        </i>
                                    </th>
                                    <th>
                                        <i className="key-icon fab fa-react" style={{color: "rgb(98,208,236"}}>
                                            <p className="tip-text key-icon-tip">React.js</p>
                                        </i>
                                    </th>
                                    <th>
                                        <i className="key-icon fas fa-database" style={{color: "rgb(55,146,206"}}>
                                            <p className="tip-text key-icon-tip">SQL/Mongo</p>
                                        </i>
                                    </th>
                                    <th>
                                        <i className="key-icon fab fa-css3-alt" style={{color: "rgb(40,79,214"}}>
                                            <p className="tip-text key-icon-tip">CSS</p>
                                        </i>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="content-box">
                    <h3 className="content-box-heading">Full Toolbox</h3>
                    <div className="table-card">
                        <div className="table-responsive">
                            <table className="table table-striped table-dark table-borderless">
                                <tbody>
                                    <tr>
                                        <th>Languages</th>
                                        <td>Python</td>
                                        <td>JavaScript/ES6</td>
                                        <td>HTML5</td>
                                        <td>CSS3</td>
                                    </tr>
                                    <tr>
                                        <th>Libraries</th>
                                        <td>jQuery</td>
                                        <td>Bootstrap</td>
                                        <td>EJS</td>
                                        <td>Axios</td>
                                    </tr>
                                    <tr>
                                        <th>Frameworks</th>
                                        <td>React</td>
                                        <td>Express</td>
                                        <td>Node</td>
                                        <td>Django</td>
                                    </tr>
                                    <tr>
                                        <th>Databases</th>
                                        <td>PostgreSQL</td>
                                        <td>Sequelize</td>
                                        <td>MongoDB</td>
                                        <td>Mongoose</td>
                                    </tr>
                                    <tr>
                                        <th>Other</th>
                                        <td>RESTful Routing</td>
                                        <td>AJAX</td>
                                        <td>JSON</td>
                                        <td>MERN</td>
                                    </tr>
                                </tbody>
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