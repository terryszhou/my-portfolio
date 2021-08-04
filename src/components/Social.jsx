import resume from '../static/terryzhou-resume.pdf'
import sealSig from '../images/seal-sig.png'

export const Social = () => {
    return (
        <>
            <img id="seal" src={sealSig} alt="seal"/>
            <div className="social">
                <a href="https://www.linkedin.com/in/terryszhou/" target="_blank" rel="noreferrer">
                    <div className="icon fab fa-linkedin">
                        <p className="tip-text">LinkedIn</p>
                    </div>
                </a>
                <a href="https://github.com/terryszhou" target="_blank" rel="noreferrer">
                    <div className="icon fab fa-github">
                        <p className="tip-text">GitHub</p>
                    </div>
                </a>
                <a href="https://codepen.io/terryszhou" target="_blank" rel="noreferrer">
                    <div className="icon fab fa-codepen">
                        <p className="tip-text">CodePen</p>
                    </div>
                </a>
                <a href="https://instagram.com/terry.s.zhou" target="_blank" rel="noreferrer">
                    <div className="icon fab fa-instagram">
                        <p className="tip-text">Instagram</p>
                    </div>
                </a>
                <a href="mailto:terryszhou@gmail.com" target="_blank" rel="noreferrer">
                    <div className="icon fas fa-envelope">
                        <p className="tip-text">Email</p>
                    </div>
                </a>
                <a href={resume} target="_blank" rel="noreferrer">
                    <div className="icon far fa-file">
                        <p className="tip-text">Resume</p>
                    </div>
                </a>
            </div>
        </>
    )
}