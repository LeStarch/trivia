function Player(name,score) {
    this.name = name;
    this.score = score;
}
Player.prototype.addScore = function(score) {
    this.score += score;
};