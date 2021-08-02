export const Projects = () => {
    return (
        <div className="container pt-1">
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
                <h2>Projects</h2>
            </div>
            <div className="project-wrapper">
                <div className="wrap project-hex" id="project-1">
                    <div className="desc">
                        <h3>Cat Crawler</h3>
                        <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                        <p className="project-skills">HTML5 Canvas API, JavaScript, CSS</p>
                    </div>
                </div>
                <div className="wrap project-hex" id="project-2">
                    <div className="desc">
                        <h3>PokéMap</h3>
                        <p className="project-about">Full stack app that combines a fully functioning Pokédex with a map of the Kanto region.</p>
                        <p className="project-skills">Express, React, Axios, PostgreSQL, Sequelize, Bootstrap</p>
                    </div>
                </div>
                <div className="wrap project-hex" id="project-3">
                    <div className="desc">
                        <h3>Totemize</h3>
                        <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                        <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                    </div>
                </div>
                <div className="wrap project-hex" id="project-4">
                    <div className="desc">
                        <h3>Pixel Runner</h3>
                        <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                        <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                    </div>
                </div>
                <div className="wrap project-hex" id="project-5">
                    <div className="desc">
                        <h3>Terry's Game of Life</h3>
                        <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                        <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                    </div>
                </div>
            </div>
            {/* <div className="wrapper pt-1 row">
                <div className="wrap">
                    <div className="square"></div>
                    <div className="mask">
                        <div className="desc">
                            <h3>Cat Crawler</h3>
                            <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                            <p className="project-skills">HTML5 Canvas API, JavaScript, CSS</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="square"></div>
                    <div className="mask">
                        <div className="desc">
                            <h3>PokéMap</h3>
                            <p className="project-about">Full stack app that combines a fully functioning Pokédex with a map of the Kanto region.</p>
                            <p className="project-skills">Express, React, Axios, PostgreSQL, Sequelize, Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="square"></div>
                    <div className="mask">
                        <div className="desc">
                            <h3>Totemize</h3>
                            <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                            <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="square"></div>
                    <div className="mask">
                        <div className="desc">
                            <h3>Hi</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}