/**
 * Question slide constructor
 * @param cont
 * @param title
 * @param media
 * @param question
 * @param answers
 * @returns
 */
function IndexSlide(cont,title,questions,callback) {
    this.questions = questions;
    var template = ["<div class='questions-index'>",
                    "    <div class='question-group'>",
                    "    <h2>{GROUP-TITLE}</h2>",
                    "        <div id='question-{INDEX}'class='question-enabled'>{TITLE} -- {VALUE}</div>",
                    "        <div id='question-{INDEX}'class='question-disabled'>{TITLE} -- {VALUE}</div>",
                    "    </div>",
                    "</div>"];
    var map = {};
    for (var i = 0; i < this.questions.length; i++) {
        var question = this.questions[i];
        if (map[question.group] == undefined)
            map[question.group] = [];
        map[question.group].push(question);
    }
    var html = template[0];
    for (var group in map) {
        html += template[1];
        html += template[2].replace(/{GROUP-TITLE}/g,group);
        for (var j = 0; j < map[group].length; j++) {
            map[group].sort(function(q1,q2){return q1.value-q2.value;});
            if (map[group][j].used == undefined || map[group][j].used == false)
                html += template[3].replace(/{INDEX}/g,this.questions.indexOf(map[group][j])).replace(/{TITLE}/g,map[group][j].title).replace(/{VALUE}/g,map[group][j].value);
            else
                html += template[4].replace(/{INDEX}/g,this.questions.indexOf(map[group][j])).replace(/{TITLE}/g,map[group][j].title).replace(/{VALUE}/g,map[group][j].value);
        }
        html += template[5];
    }
    html += template[6];
    MediaSlide.call(this,cont,triviaconfig.IndexTitle,null,"",html);
    this.callback = callback;
}
IndexSlide.prototype = Object.create(MediaSlide.prototype);
IndexSlide.prototype.display = function() {
        MediaSlide.prototype.display.call(this);
        var _self = this;
        var getid = function(e) {
            var id = parseInt(e.target.id.replace(/question-/,""),10);
            _self.callback(id);
        };
        var tmp = $('.question-enabled');
        tmp.click(getid);
    };