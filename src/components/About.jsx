export const About = () => {
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
            <div className="about-wrapper pt-3">
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nibh in turpis porta elementum in eleifend dolor. Sed condimentum nisi vitae ligula imperdiet, ac ullamcorper nibh tempus. Maecenas ornare, neque nec vulputate feugiat, leo turpis interdum erat, ac bibendum orci tellus ut augue. Vivamus egestas placerat venenatis. Cras hendrerit lacinia eleifend. Donec mattis est sit amet justo scelerisque malesuada. Suspendisse in magna non est gravida molestie et vitae nisl. Phasellus posuere pellentesque suscipit. Sed dictum egestas tortor non accumsan. Mauris nisi sapien, ultricies non pellentesque a, gravida vitae leo. Sed suscipit elementum quam a tincidunt.
                    Praesent accumsan tellus metus, vitae ornare velit sollicitudin eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam mattis viverra pellentesque. Pellentesque id mattis tortor. Nunc finibus at urna eu condimentum. Donec ornare et lorem ac maximus. Nunc dolor odio, suscipit sed elementum nec, aliquet vel ipsum. Maecenas sit amet venenatis ante. Donec vehicula lectus id aliquam consequat.
                </p>
                <h3>My Toolbox</h3>
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
            </div>
        </div>
    )
}