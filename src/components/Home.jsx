import headshot from '../images/headshot.jpg'
import headshot2 from '../images/headshot-2.jpg'

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
                <h2>Home</h2>
            </div>
            <div className="home-box">
                <div id="hex-home-outer"/>
                <div id="hex-home-grey"/>
                <div id="hex-home">
                    <img className="home-pic" src={headshot} alt="headshot"/>
                    {/* <img className="home-pic" src={headshot2} alt="headshot"/> */}
                </div>
            </div>
            <div id="hourglass"/>
        </div>
    )
}