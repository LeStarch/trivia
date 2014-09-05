function Players(container) {
    this.players = [];
    this.container = container;
    this.current = 0;
    this.display();
};

Players.prototype.add = function(name, score) {
    this.players.push(new Player(name,score));
};
Players.prototype.hasPlayers = function() {
    return this.players.length >= 2;
};
Players.prototype.nextPlayer = function() {
    this.current = (this.current + 1) % this.players.length;
    this.display();
};
Players.prototype.addScoreToCurrentPlayer = function(score) {
    this.players[this.current].addScore(score);
    this.display();
};
Players.prototype.getWinner = function() {
    var winners = "";
    var top = 0;
    for (var i = 0; i < this.players.length;i++) {
        var player = this.players[i];
        if (player.score > top) {
            top = player.score;
            winners = player.name;
        } else if (player.score == top) {
            winners = winners + " " + player.name;
        }
    }
    return winners;
};
Players.prototype.display = function() {
    var template = ["<div id='player-scores'>\n",
                    "   Current teams:\n",
                    "   <table id='scores'>\n",
                    "       <tr><th>Player</th><th>Score</th></tr>\n",
                    "   </table>",
                    "</div>\n",
                    "<tr class='score-row {CLASS}'><td>{NAME}</td><td>{SCORE}</td></tr>\n"];
    var html = template[0]+template[1]+template[2]+template[3];
    for (var i =0; i < this.players.length; i++) {
        var selected = (this.current == i)?"player-selected":"";
        html += template[6].replace(/{CLASS}/,selected).replace(/{NAME}/,this.players[i].name).replace(/{SCORE}/,this.players[i].score);
    }
    this.container.html(html);
};