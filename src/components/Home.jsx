export const Home = (props) => {
    return (
        <div className="container pt-3">
            <img className="bg-image" src={props.flowersWhite} alt="background"/>
            <div id="home-bg-upper"/>
            <div id="home-bg-lower"/>
            <div className="hex-box-main hex-box-home">
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
            </div>
            <div className="name-box">
                <h1 id="my-name">Terry S. Zhou</h1>
                <h2 id="my-title">Full Stack Developer</h2>
            </div>
            <div className="pic-box">
                <div id="pic-trapezoid"/>
                <div id="pic-greyspace"/>
                <div id="pic-hex">
                    <img id="my-face" src={props.headshot} alt="headshot"/>
                </div>
            </div>
        </div>
    )
}