trivia
======

A basic JavaScript (and Browser) powered trivia game.  Can be run in file mode (no http server needed).  All questions are broken into categories and have multiple-choice format.

Usage
=====
  Questions are in json found in "questions.js".
  
  Format of questions.js:
      questions = [
          {
              group: "Group name", //Category for this question
              title: "Title",      //Display title for question
              question: "Question",//Text of question
              answers: ["Answer",...], //Possible answers to question
              correct: "Answer",   //Answer to question, must EXACTLY match one answer in list 
              value:30,            //Value awarded for correct answer
          },...]
  
  
