export const Projects = (props) => {
    return (
        <div className="container pt-1">
            <img className="background-image" src={props.flowersWhite} alt="background"/>
            <div id="project-back"/>
            <div id="project-back-2"/>
            <div className="shape-box about-hex">
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
                <div className="project-hex" id="project-1">
                    <div className="project-hex-2"/>
                    <div className="project-hex-3"/>
                    <img className="project-pic" src={props.catCrawlerDesktop} alt="cat-crawler"/>
                    <div className="desc">
                        <h3>Cat Crawler</h3>
                        <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                        <p className="project-skills">HTML5 Canvas API, JavaScript, CSS</p>
                        <p className="project-links">
                            <a href="https://terryszhou.github.io/cat-crawler/" target="_blank" rel="noreferrer">Live Site </a>
                            |
                            <a href="https://github.com/terryszhou/cat-crawler/" target="_blank" rel="noreferrer"> Github Repo</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-2">
                    <div className="project-hex-2"/>
                    <div className="project-hex-3"/>
                    <img className="project-pic" src={props.pokemap} alt="pokemap"/>
                    <div className="desc">
                        <h3>PokéMap</h3>
                        <p className="project-about">Full stack app that combines a fully functioning Pokédex with a map of the Kanto region.</p>
                        <p className="project-skills">Express, React, Axios, PostgreSQL, Sequelize, Bootstrap</p>
                        <p className="project-links">
                            <a href="https://pokemap-kanto.herokuapp.com/" target="_blank" rel="noreferrer">Live Site </a>
                            |
                            <a href="https://github.com/terryszhou/PokeMap/" target="_blank" rel="noreferrer"> Github Repo</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-3">
                    <div className="project-hex-2"/>
                    <div className="project-hex-3"/>
                    <img className="project-pic" src={props.totemize} alt="totemize"/>
                    <div className="desc">
                        <h3>Totemize</h3>
                        <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                        <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                        <p className="project-links">
                            <a href="https://friendly-sinoussi-f96db3.netlify.app/" target="_blank" rel="noreferrer">Live Site </a>
                            |
                            <a href="https://github.com/terryszhou/MERN-Auth-Server/" target="_blank" rel="noreferrer"> Backend </a>
                            |
                            <a href="https://github.com/terryszhou/P3-auth-client/" target="_blank" rel="noreferrer"> Frontend</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-4">
                    <div className="project-hex-2"/>
                    <div className="project-hex-3"/>
                    <img className="project-pic" src={props.pixelRunner} alt="pixel-runner"/>
                    <div className="desc">
                        <h3>Pixel Runner</h3>
                        <p className="project-about">One-day sprint based on Pygame tutorial. Improved with full arrow key movement, scrolling backgrounds, and various bug fixes.</p>
                        <p className="project-skills">Python, Pygame</p>
                        <p className="project-links">
                            <a href="https://github.com/terryszhou/pixel-runner/" target="_blank" rel="noreferrer">Github Repo</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-5">
                    <div className="project-hex-2"/>
                    <div className="project-hex-3"/>
                    <img className="project-pic" src={props.gameOfLife} alt="game-of-life"/>
                    <div className="desc">
                        <h3>Python of Life</h3>
                        <p className="project-about">Three-day sprint based on Conway's Game of Life. Features three alternate rulesets and full user input.</p>
                        <p className="project-skills">Python, Pygame</p>
                        <p className="project-links">
                            <a href="https://github.com/terryszhou/p4-python-of-life/" target="_blank" rel="noreferrer">Github Repo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}