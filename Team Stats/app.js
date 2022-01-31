const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 23,
    },
    {
      firstName: 'Eric',
      lastName: 'Jones',
      age: 22,
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 20,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Lions',
      teamPoints: 39,
      opponentPoints: 43,
    },
    {
      opponent: 'Dragons',
      teamPoints: 48,
      opponentPoints: 23,
    },
  ],
  // get players
  get players() {
    return this._players;
  },
  // get games
  get games() {
    return this._games;
  },

  // add player
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };

    this._players.push(player);
  },
  // add game
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
