//input playerData and make it to an array of obj
export const preparePlayerData = (playerData) => {
	return Object.values(playerData);
	// output: [{player}, {player}]
};

// compare match.winner === player.gamerTag and add number value in the win key if it matches
export const addWinsToPlayers = (playerDataArray, matchData) => {
	return playerDataArray.map((player) => {
		// Calculating the number of wins in the matchData
		const currentWins = matchData.reduce((accumulator, match) => {
			// Adds a win if the gamerTag matches
			if (match.winner === player.gamerTag) {
				return (accumulator += 1);
			} else {
				return accumulator;
			}
		}, 0);

		// Assigns the value to the wins key
		player.wins = currentWins;

		return player;
	});
	// output: [{player}, {player}] (each player having a win key and a numerical value)
};
