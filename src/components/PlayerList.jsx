import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";
import Player from "./Player";

function PlayerList(props) {
	const playerDataArray = preparePlayerData(playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData); //arr ver of players objs, matchData. to compare matchData.winner and playerData.gametag
	console.log(parsedPlayerData);
	// ...
	return (
		<section className="PlayerList">
			<h1>Current participating players</h1>
			<Player />
		</section>
	);
}

export default PlayerList;
