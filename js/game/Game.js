function Game(cont,questions,players,startcallback) {
    this.questions = questions;
    this.cont = cont;
    this.players = players;
    this.startcallback = startcallback;
};
Game.prototype.answer = function(question,correct) {
    var slide = null;
    var _self = this;
    question.used = true;
    var index = function() {
        _self.players.nextPlayer();
        _self.displayIndex();
    };
    if (correct) {
        this.players.addScoreToCurrentPlayer(question.value);
        var text = triviaconfig.SuccessText.replace(/{VALUE}/,question.value);
        slide = new MediaSlide(this.cont,triviaconfig.SuccessTitle,triviaconfig.SuccessImage,triviaconfig.SuccessCaption,text,index);
    }
    else {
        var text = triviaconfig.FailText.replace(/{ANSWER}/,question.correct);
        slide = new MediaSlide(this.cont,triviaconfig.FailTitle,triviaconfig.FailImage,triviaconfig.FailCaption,text,index);        
    }
    slide.display();
    
};
Game.prototype.displayIndex = function() {
    
    var _self = this;
    var reme = function() {
        _self.displayIndex();
    };
    if (!this.players.hasPlayers()) {
        var slide = new MediaSlide(this.cont,triviaconfig.AddPlayerTitle,null,triviaconfig.AddPlayerCaption,triviaconfig.AddPlayerText,reme);
        slide.display();
        return;
    }
    this.startcallback();
    if (this.questions.reduce(function(unused,question){ return unused | (question.used == undefined || question.used == false);},false)) {
        var call = function(inx) {
            _self.displayQuestion(inx);
        };
        var slide = new IndexSlide(this.cont,triviaconfig.IndexTitle,this.questions,call);
        slide.display();
    }else {
        var winner = this.players.getWinner();
        var slide = new MediaSlide(this.cont,triviaconfig.WinnerTitle,triviaconfig.WinnerImage,"",triviaconfig.WinnerText.replace(/{WINNER}/g,winner));
        slide.display();
    }
};
Game.prototype.displayQuestion = function(index) {
    var _self = this;
    var question = this.questions[index];
    var check = function(ans) {
        _self.answer(question,question.correct == ans);
    };
    var slide = new QuestionSlide(this.cont,question.title,question.media,question.question,question.answers,check);
    slide.display();
};
