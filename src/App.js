import "./App.css";
import Match from "./components/Match";
import MatchList from "./components/MatchList";
import Player from "./components/Player";
import PlayerList from "./components/PlayerList";

function App() {
	return (
		<div className="app">
			<h1>
				Tourney Matches{" "}
				<span>Where Coding and Tournaments found their Match!</span>
			</h1>
			<PlayerList />
			<MatchList />
		</div>
	);
}

export default App;
