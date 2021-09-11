export const Home = (props) => {
    return (
        <div className="container">
            <img className="bg-image" src={props.flowersWhite} alt="background"/>
            <div id="home-bg-upper"/>
            <div id="home-bg-lower"/>
            <div className="hex-box-main hex-box-home">
                <a className="hex-link" href="https://github.com/terryszhou/my-portfolio" target="_blank" rel="noreferrer">
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
                    <h2></h2>
                </a>
            </div>
            <img id="my-title"  src={props.titleCard} alt="title card"/>
            <img id="my-face" src={props.faceCard} alt="face card"/>
        </div>
    )
}