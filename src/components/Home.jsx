export const Home = (props) => {
    return (
        <div className="container pt-3">
            <div id="test-back"/>
            <div id="test-back-2"/>
            <div className="shape-box home-position">
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
            </div>
            <div className="name-box">
                <h1 id="first-name">Terry S. Zhou</h1>
                <h2 id="title">Full Stack Developer</h2>
            </div>
            <div id="home-box">
                <div id="hex-home-outer"/>
                <div id="hex-home-grey"/>
                <div id="hex-home">
                    <img className="home-pic" src={props.glasses} alt="glasses"/>
                </div>
            </div>
        </div>
    )
}