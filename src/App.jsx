import './styles/App.css';
import './styles/Hex.css';
import './styles/Home.css';
import './styles/Projects.css';
import './styles/About.css';
import './styles/Contact.css';
import './styles/Animations.css';
import './styles/Variables.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Home, About, Projects, Contact, Nav, Social } from './components'
import { qAndA, aboutTable, keyTable, projectData } from './data'
import { titleCard, faceCard, headShot, nidoking, cardQR, sealSig, flowersWhite } from './images'
import resume from './static/terryzhou-resume.pdf'

export const App = () => (
   <Router>
      <Route exact path="/" render={() => 
         <Home
            flowersWhite={flowersWhite}
            titleCard={titleCard}
            faceCard={faceCard}
            headShot={headShot} 
         />}
      />
      <Route path="/about" render={() => 
         <About
            flowersWhite={flowersWhite}
            qAndA={qAndA}
            aboutTable={aboutTable}
            keyTable={keyTable}
            resume={resume}
            nidoking={nidoking} 
         />}
      />
      <Route path="/projects" render={() => 
         <Projects
            flowersWhite={flowersWhite}
            projectData={projectData}
         />}
      />
      <Route path="/contact" render={() => 
         <Contact
            flowersWhite={flowersWhite}
            resume={resume}
            cardQR={cardQR}
         />}
      />
      <Social 
         resume={resume}
         sealSig={sealSig}
      />
      <Nav />
   </Router>
)

