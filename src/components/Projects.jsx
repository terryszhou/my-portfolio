export const Projects = (props) => {
    return (
        <div className="container pt-1">
            <img className="bg-image" src={props.flowersWhite} alt="background"/>
            <div id="project-bg-left"/>
            <div id="project-bg-right"/>
            <div className="hex-box-main hex-box-other">
                <a className="hex-link" href="https://github.com/terryszhou/my-portfolio" target="_blank" rel="noreferrer">
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
                    <h2>Projects</h2>
                </a>
            </div>
            <div className="project-main pt-5">
                <div className="project-box">
                    <div className="project-hex">
                        <div className="project-hex-outer"></div>
                        <img className="project-pic" src={props.catCrawlerDesktop} alt="cat-crawler"/>
                        <div className="project-desc">
                            <h3>Cat Crawler</h3>
                            <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                            <p className="project-skills">Canvas, JavaScript, CSS</p>
                            <p className="project-links">
                                <a href="https://terryszhou.github.io/cat-crawler/" target="_blank" rel="noreferrer">Live Site </a>
                                |
                                <a href="https://github.com/terryszhou/cat-crawler/" target="_blank" rel="noreferrer"> Github Repo</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-hex">
                        <div className="project-hex-outer"></div>
                        <img className="project-pic" src={props.pokemap} alt="pokemap"/>
                        <div className="project-desc">
                            <h3>PokéMap</h3>
                            <p className="project-about">Full stack app combining a functioning Pokédex with a map of the Kanto region.</p>
                            <p className="project-skills">Express, React, Axios, PostgreSQL, Sequelize</p>
                            <p className="project-links">
                                <a href="https://pokemap-kanto.herokuapp.com/" target="_blank" rel="noreferrer">Live Site </a>
                                |
                                <a href="https://github.com/terryszhou/PokeMap/" target="_blank" rel="noreferrer"> Github Repo</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-hex">
                        <div className="project-hex-outer"></div>
                        <img className="project-pic" src={props.totemize} alt="totemize"/>
                        <div className="project-desc">
                            <h3>Totemize</h3>
                            <p className="project-about">Full stack MERN app that lets users login, create events, and find friends at a festival.</p>
                            <p className="project-skills">Express, React, Axios, MongoDB, JWT</p>
                            <p className="project-links">
                                <a href="https://friendly-sinoussi-f96db3.netlify.app/" target="_blank" rel="noreferrer">Live Site </a>
                                |
                                <a href="https://github.com/terryszhou/MERN-Auth-Server/" target="_blank" rel="noreferrer"> Backend </a>
                                |
                                <a href="https://github.com/terryszhou/P3-auth-client/" target="_blank" rel="noreferrer"> Frontend</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-hex">
                        <div className="project-hex-outer"></div>
                        <img className="project-pic" src={props.pixelRunner} alt="pixel-runner"/>
                        <div className="project-desc">
                            <h3>Pixel Runner</h3>
                            <p className="project-about">One-day sprint based on Pygame tutorial. Improved with full arrow key movement, scrolling backgrounds, and various bug fixes.</p>
                            <p className="project-skills">Python, Pygame</p>
                            <p className="project-links">
                                <a href="https://github.com/terryszhou/pixel-runner/" target="_blank" rel="noreferrer">Github Repo</a>
                            </p>
                        </div>
                    </div>
                    <div className="project-hex">
                        <div className="project-hex-outer"></div>
                        <img className="project-pic" src={props.gameOfLife} alt="game-of-life"/>
                        <div className="project-desc">
                            <h3>Python of Life</h3>
                            <p className="project-about">Three-day sprint based on Conway's Game of Life. Features four separate rulesets and built-in object creation tools.</p>
                            <p className="project-skills">Python, Pygame</p>
                            <p className="project-links">
                                <a href="https://github.com/terryszhou/p4-python-of-life/" target="_blank" rel="noreferrer">Github Repo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}