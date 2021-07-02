export const About = () => {
    return (
        <div className="container pt-3">
            <h2>About</h2>
            <div className="about-wrapper pt-3">
                <h3>My Toolbox</h3>
                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-striped table-dark table-borderless">
                                <tbody>
                                    <tr>
                                        <th>Languages</th>
                                        <td>HTML5</td>
                                        <td>CSS3</td>
                                        <td>JavaScript/ES6</td>
                                        <td>SQL</td>
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
                                        <td>SCRUM</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}