export const Contact = (props) => {
    return (
        <div className="container pt-1">
            <div id="skew-bg-left"/>
            <div id="skew-bg-right"/>
            <img className="bg-image" src={props.flowersWhite} alt="background"/>
            <div className="hex-box-main hex-box-other">
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
                <h2>Contact</h2>
            </div>
            <div className="content-box about-corners">
                <h3 className="mb-3 content-box-heading">Let's Get in Touch!</h3>
                <fieldset className="content-field">
                    <div className="contact-box">
                        <a href="mailto:terryszhou@gmail.com" target="_blank" rel="noreferrer">
                            <i className="contact-icon fas fa-envelope">
                                <p>terryszhou@gmail.com</p>
                            </i>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href="https://github.com/terryszhou" target="_blank" rel="noreferrer">
                            <i className="contact-icon fab fa-github">
                                <p>github.com/terryszhou</p>
                            </i>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href="https://www.linkedin.com/in/terryszhou/" target="_blank" rel="noreferrer">
                            <i className="contact-icon fab fa-linkedin">
                                <p>linkedin.com/in/terryszhou/</p>
                            </i>
                        </a>
                    </div>
                    <div className="contact-box">
                        <a href={props.resume} target="_blank" rel="noreferrer">
                            <i className="contact-icon far fa-file">
                                <p>(Here's my resume again)</p>
                            </i>
                        </a>
                    </div>
                </fieldset>
                <div className="content-box-outer"/>
            </div>
            <div className="content-box qrbox">
                <a href="https://hihello.me/p/c2fcf08c-ba21-4fe6-8e72-c542170b10e2" target="_blank" rel="noreferrer">
                    <img id="qrcode" src={props.cardQR} alt="cardQR"/>
                </a>
                <p>Here's my business card!</p>
            </div>
        </div>
    )
}