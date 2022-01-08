import { Hex } from "./Hex"

export const Home = ({ flowersWhite, titleCard, faceCard }) => (
	<div className="container">
		<img className="bg-image" src={flowersWhite} alt="background" />
		<div id="home-bg-upper" />
		<div id="home-bg-lower" />
		<Hex title="Home" />
		<img id="my-title"  src={titleCard} alt="title card" />
		<img id="my-face" src={faceCard} alt="face card" />
	</div>
);
