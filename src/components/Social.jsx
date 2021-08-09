export const Social = (props) => {
    return (
        <>
            <div className="seal-box">
                <img id="seal" src={props.sealSig} alt="seal"></img>
                <div className="tip-text seal-tip">
                    <p className="text-left" style={{marginLeft: "20px"}}>
                        汉字: <span style={{color: "red"}}>周思佳</span>
                    </p>
                    <p className="text-left" style={{marginLeft: "20px"}}>
                        Pīnyīn: <span style={{color: "red"}}>Zhōu Sījīa</span>
                    </p>
                    <p className="text-left" style={{marginLeft: "20px"}}>
                        <span style={{color: "red"}}>Sī</span>: (to) think
                    </p>
                    <p className="text-left" style={{marginLeft: "20px"}}>
                        <span style={{color: "red"}}>Jīa</span>: (with) excellence & beauty
                    </p>
                </div>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/terryszhou/" target="_blank" rel="noreferrer">
                    <i className="icon fab fa-linkedin">
                        <p className="tip-text">LinkedIn</p>
                    </i>
                </a>
                <a href="https://github.com/terryszhou" target="_blank" rel="noreferrer">
                    <i className="icon fab fa-github">
                        <p className="tip-text">GitHub</p>
                    </i>
                </a>
                <a href="https://codepen.io/terryszhou" target="_blank" rel="noreferrer">
                    <i className="icon fab fa-codepen">
                        <p className="tip-text">CodePen</p>
                    </i>
                </a>
                <a href="https://instagram.com/terry.s.zhou" target="_blank" rel="noreferrer">
                    <i className="icon fab fa-instagram">
                        <p className="tip-text">Instagram</p>
                    </i>
                </a>
                <a href="mailto:terryszhou@gmail.com" target="_blank" rel="noreferrer">
                    <i className="icon fas fa-envelope">
                        <p className="tip-text">Email</p>
                    </i>
                </a>
                <a href="https://s3.us-west-1.amazonaws.com/terryszhou.com/terryzhou-resume.pdf" target="_blank" rel="noreferrer">
                    <i className="icon far fa-file">
                        <p className="tip-text">Resume</p>
                    </i>
                </a>
            </div>
        </>
    )
}