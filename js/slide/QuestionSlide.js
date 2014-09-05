/**
 * Question slide constructor
 * @param cont
 * @param title
 * @param media
 * @param question
 * @param answers
 * @returns
 */
function QuestionSlide(cont,title,media,question,answers,callback) {
    var template = ["<input type='radio' name='answers' value='{ANSWER}'>{ANSWER}</input><br />",
                    "<button id='answer' value='answer' disabled>Answer the question!</button>"];
    var html = '';
    for (var i =0; i < answers.length;i++)
        html += template[0].replace(/{ANSWER}/g,answers[i].replace(/'/g,"&#39;"));
    html += template[1];
    MediaSlide.call(this,cont,title,media,question,html,null);
    this.callback = callback;
}
QuestionSlide.prototype = Object.create(MediaSlide.prototype);
QuestionSlide.prototype.display = function() {
        MediaSlide.prototype.display.call(this);
        var enable = function() {
            $("#answer").removeAttr("disabled");
        };
        $("input[name=answers]").click(enable);
        var _self = this;
        var ans = function() {
            var val = $("input[name=answers]:checked").val();
            _self.callback(val);
        };
        $("#answer").click(ans);

    };