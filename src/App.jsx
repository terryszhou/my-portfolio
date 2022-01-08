import './styles/About.css';
import './styles/Animations.css';
import './styles/App.css';
import './styles/Contact.css';
import './styles/Hex.css';
import './styles/Home.css';
import './styles/Projects.css';
import './styles/Variables.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Home, About, Projects, Contact, Nav, Social, Seal } from './components';
import { qAndA, aboutTableData, keyTableData, projectData, contactData, socialData } from './data';
import { titleCard2, faceCard, headShot, nidoking, cardQR, sealSig, flowersWhite } from './images';

export const App = () => (
  <Router>
    <Route exact path="/" render={() => 
      <Home
        flowersWhite={flowersWhite}
        titleCard={titleCard2}
        faceCard={faceCard}
        headShot={headShot} 
      />
    }/>
    <Route path="/about" render={() => 
      <About
        flowersWhite={flowersWhite}
        qAndA={qAndA}
        keyTableData={keyTableData}
        aboutTableData={aboutTableData}
        nidoking={nidoking} 
      />
    }/>
    <Route path="/projects" render={() => 
      <Projects
        flowersWhite={flowersWhite}
        projectData={projectData}
      />
    }/>
    <Route path="/contact" render={() => 
      <Contact
        flowersWhite={flowersWhite}
        contactData={contactData}
        cardQR={cardQR}
      />
    }/>
    <Seal sealSig={sealSig} />
    <Social socialData={socialData} />
    <Nav />
  </Router>
);
