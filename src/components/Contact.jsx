import resume from '../static/terryzhou-resume.pdf'
import cardQR from '../images/card-qr2.png'

export const Contact = () => {
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
                <h2>Contact</h2>
            </div>
            <div className="about-wrapper about-corners">
                <h3 className="mb-3 about-header">Let's Get in Touch!</h3>
                <div className="about-corners-outer"/>
                <fieldset className="about-field">
                    <div className="contact-box">
                        <a href="mailto:terryszhou@gmail.com" target="_blank" rel="noreferrer">
                            <div className="contact-icon fas fa-envelope">
                                <p>terryszhou@gmail.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href="https://github.com/terryszhou" target="_blank" rel="noreferrer">
                            <div className="contact-icon fab fa-github">
                                <p>github.com/terryszhou</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href="https://www.linkedin.com/in/terryszhou/" target="_blank" rel="noreferrer">
                            <div className="contact-icon fab fa-linkedin">
                                <p>linkedin.com/in/terryszhou/</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href={resume} target="_blank" rel="noreferrer">
                            <div className="contact-icon far fa-file">
                                <p>(Here's my resume again)</p>
                            </div>
                        </a>
                    </div>
                </fieldset>
            </div>
            <div className="qrbox">
                <img id="qrcode" src={cardQR} alt="cardQR"/>
                <p>Here's my business card!</p>
            </div>
        </div>
    )
}