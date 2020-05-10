const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Enrique",
      lastName: "Martinez",
      age: 15,
    },
    {
      firstName: "John",
      lastName: "Bolt",
      age: 13,
    },
  ],

  _games: [
    {
      opponent: "Broncos",
      teamPoints: 34,
      opponentPoins: 54,
    },
    {
      opponent: "Falcons",
      teamPoints: 51,
      opponentPoins: 43,
    },
    {
      opponent: "Eagles",
      teamPoints: 77,
      opponentPoins: 64,
    },
  ],

  get players() {
    return team._players;
  },

  get games() {
    return team._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },

  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Hornets", 65, 34);
team.addGame("Bulls", 34, 54);
team.addGame("Chickens", 99, 1);
console.log(team._games);
