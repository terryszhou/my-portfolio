export const About = (props) => {
    return (
        <div className="container pt-3">
            <div className="shape-box">
                <div id="hex-outer"/>
                <div id="hex-grey"/>
                <div id="hex-gold">
                    <div id="hex-goldenrod">
                        <div id="hex-small">
                            <div id="hex-smaller">
                                <div id="hex-smallest"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>About</h2>
            </div>
            <div className="about-wrapper about-corners">
                <h3 className="mb-3 about-header">Get to Know Me</h3>
                <div className="about-corners-outer"/>
                <fieldset className="about-field">
                    <div className="question-wrapper">
                        <p className="question-text">What made you want to become a software developer?</p>
                    </div>
                    <div className="answer-wrapper">
                        <p className="answer-text">This is a test answer.</p>
                    </div>
                    <div className="question-wrapper">
                        <p className="question-text">What do you believe are a coder's most important skills?</p>
                    </div>
                    <div className="answer-wrapper">
                        <p className="answer-text">This is a test answer.</p>
                    </div>
                    <div className="question-wrapper">
                        <p className="question-text">What was your previous occupation?</p>
                    </div>
                    <div className="answer-wrapper">
                        <p className="answer-text">This is a test answer.</p>
                    </div>
                    <div className="question-wrapper">
                        <p className="question-text">What do you like to do in your spare time?</p>
                    </div>
                    <div className="answer-wrapper">
                        <p className="answer-text">This is a test answer.</p>
                    </div>
                </fieldset>
            </div>
            <div className="about-wrapper">
                <h3 className="about-header">My Key Skills</h3>
                <div className="card">
                    <div className="table-responsive">
                        <table className="table table-striped table-dark table-borderless">
                            <tbody>
                                <th>
                                    <i className="key-icon text-primary fab fa-python"/>
                                </th>
                                <th>
                                    <i className="key-icon text-warning fab fa-js-square"/>
                                </th>
                                <th>
                                    <i className="key-icon text-success fas fa-database"/>
                                </th>
                                <th>
                                    <i className="key-icon text-info fab fa-css3-alt"/>
                                </th>
                                <th>
                                    <i className="key-icon fab fa-react"/>
                                </th>
                                <th>
                                    <i className="key-icon fab fa-node-js"/>
                                </th>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="about-wrapper">
                <h3 className="about-header">My Toolbox</h3>
                <div className="card">
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
                <h3 className="about-header">Want to Know More?</h3>
                <a href={props.resume} target="_blank" rel="noreferrer">
                    <div className="icon fas fa-download text-warning"/>
                </a>
                <p id="resume-text">Check out my resume!</p>
            </div>
        </div>
    )
}