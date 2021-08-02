import catCrawlerDesktop from '../images/cat-crawler-desktop.png'
import pokemap from '../images/pokemap-desktop.png'
import totemize from '../images/totemize-mobile.png'
import pixelRunner from '../images/pixel-runner-desktop.png'
import gameOfLife from '../images/game-of-life-desktop.png'

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
                <div className="project-hex" id="project-1">
                    <img className="project-pic" src={catCrawlerDesktop} alt="cat-crawler"/>
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
                    <img className="project-pic" src={pokemap} alt="pokemap"/>
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
                    <img className="project-pic" src={totemize} alt="totemize"/>
                    <div className="desc">
                        <h3>Totemize</h3>
                        <p className="project-about">Full stack MERN festival app that allows users to login, create events, and find their friends on a map.</p>
                        <p className="project-skills">Express, React, Axios, MongoDB, Mongoose, Bootstrap, JWT</p>
                        <p className="project-links">
                            <a href="https://friendly-sinoussi-f96db3.netlify.app/" target="_blank" rel="noreferrer">Live Site </a>
                            |
                            <a href="https://github.com/terryszhou/MERN-Auth-Server/" target="_blank" rel="noreferrer"> Backend Repo </a>
                            |
                            <a href="https://github.com/terryszhou/P3-auth-client/" target="_blank" rel="noreferrer"> Frontend Repo</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-4">
                    <img className="project-pic" src={pixelRunner} alt="pixel-runner"/>
                    <div className="desc">
                        <h3>Pixel Runner</h3>
                        <p className="project-about">One-day sprint based on Pygame tutorial. Improved from source code with full arrow key movement, scrolling backgrounds, and various bug fixes.</p>
                        <p className="project-skills">Python, Pygame</p>
                        <p className="project-links">
                            <a href="https://github.com/terryszhou/pixel-runner/" target="_blank" rel="noreferrer">Github Repo</a>
                        </p>
                    </div>
                </div>
                <div className="project-hex" id="project-5">
                    <img className="project-pic" src={gameOfLife} alt="game-of-life"/>
                    <div className="desc">
                        <h3>Terry's Game of Life</h3>
                        <p className="project-about">Three-day sprint based on Conway's Game of Life. Features full simulation with three alternate rulesets and user input.</p>
                        <p className="project-skills">Python, Pygame</p>
                        <p className="project-links">
                            <a href="https://github.com/terryszhou/p4-python-of-life/" target="_blank" rel="noreferrer">Github Repo</a>
                        </p>
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