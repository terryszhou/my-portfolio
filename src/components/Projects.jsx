export const Projects = () => {
    return (
        <div className="container pt-1">
            <h2>Projects</h2>
            <div className="wrapper pt-1 row">
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
            </div>
        </div>
    )
}