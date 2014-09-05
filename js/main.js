$(document).ready(setup);

/**
 * Setup function.  Called when document loaded.
 */
function setup() {
    //validate(questions);
    $('#main-title').html(triviaconfig.Title);
    var players = new Players($("#scores"));
    var newplayer = function(name) {
        players.add(name, 0);
        players.display();
    };
    var adddialog = new AddPlayer($("#add-dialog"),newplayer);
    var add = function() {
        adddialog.show();
    };
    var start = function() {
        $("#add-player").hide();
    };
    var slide = new Game($("#display-area"),questions,players,start);
    slide.displayIndex();
    $("#add-player").click(add);
}
/**
 * Validates your questions, alerting you to questions without answers.
 * @param questions - list of questions.
 */
function validate(questions) {
    for (var ind = 0; ind < questions.length; ind++) {
        var question = questions[ind];
        if (question.answers.indexOf(question.correct) == -1) {
            alert(question.title+" has no correct answer.");
        }
        if (question.answers.length != 5) {
            alert(question.title+" has "+question.answers.length+" answers.");
        }
    }
        
}
Array.prototype.reduce = function(call,init) {
    var ans = init;
    for (var i = 0; i < this.length; i++)
        ans = call(ans,this[i]);
    return ans;
};
