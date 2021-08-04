import glasses from '../images/glasses.jpeg'

export const Home = () => {
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
                {/* <h2>Home</h2> */}
            </div>
            <h1 id="first-name">Terry S. Zhou</h1>
            <h2 id="title">Full Stack Developer</h2>
            <div id="home-box">
                <div id="hex-home-outer"/>
                <div id="hex-home-grey"/>
                <div id="hex-home">
                    <h2>Image here?</h2>
                    <img className="home-pic" src={glasses} alt="glasses"/>
                </div>
            </div>
            {/* <div id="padlock"/>
            <div id="spinning-top">
                <div id="spinning-top-center"/>
            </div> */}
            <div id="hourglass"/>
        </div>
    )
}