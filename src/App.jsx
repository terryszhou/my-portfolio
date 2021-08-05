import './styles/App.css';
import './styles/Hex.css';
import './styles/Home.css';
import './styles/Projects.css';
import './styles/About.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Nav } from './components/Nav'
import { Social } from './components/Social'

import resume from './static/terryzhou-resume.pdf'
import headshot from './images/headshot2.png'
import catCrawlerDesktop from './images/cat-crawler-desktop.png'
import pokemap from './images/pokemap-desktop.png'
import totemize from './images/totemize-mobile.png'
import pixelRunner from './images/pixel-runner-desktop.png'
import gameOfLife from './images/game-of-life-desktop.png'
import cardQR from './images/card-qr2.png'
import sealSig from './images/seal-sig.png'
import backgroundWhite from './images/background-white.png'
import backgroundHex from './images/background-hex.png'
import flowers from './images/flowers.png'
import flowersWhite from './images/flowers-white.png'

export const App = () => {
    return (
        <Router>
            <Route
                exact path="/"
                render={() => <Home 
                        headshot={headshot}
                        flowersWhite={flowersWhite}
                    />
                }
            />
            <Route
                path="/about"
                render={() => <About 
                        resume={resume}
                        backgroundWhite={backgroundWhite}
                        backgroundHex={backgroundHex}
                        flowers={flowers}
                        flowersWhite={flowersWhite}
                    />
                }
            />
            <Route
                path="/projects"
                render={() => <Projects
                        catCrawlerDesktop={catCrawlerDesktop}
                        pokemap={pokemap}
                        totemize={totemize}
                        pixelRunner={pixelRunner}
                        gameOfLife={gameOfLife}
                    />

                }
            />
            <Route
                path="/contact"
                render={() => <Contact
                        resume={resume}
                        cardQR={cardQR}
                        flowersWhite={flowersWhite}
                    />
                }
            />
            <Social 
                resume={resume}
                sealSig={sealSig}
            />
            <Nav />
        </Router>
    )
}
