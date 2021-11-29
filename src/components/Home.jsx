import {Hex} from "./Hex"

export const Home = (props) => (
	<div className="container">
      <img className="bg-image" src={props.flowersWhite} alt="background" />
      <div id="home-bg-upper" />
      <div id="home-bg-lower" />
		<Hex title="Home" />
		<img id="my-title"  src={props.titleCard} alt="title card" />
		<img id="my-face" src={props.faceCard} alt="face card" />
	</div>
);
