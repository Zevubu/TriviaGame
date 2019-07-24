$(document).ready(function(){
        // decliar variables 
    // build page sections.
    let gameStart = false;

    $("body").html(" <section id='game-area'></section> ");
    $("#game-area").html("<header></header>");
    $("#game-area").append("<article id='question-box'></article>");
    $("#question-box").html("<button id='start-btn'>Start Game</button>");


    // build area for/ and opening start button to be replaced.

    // within on click function build new page.
    // build question screan area
    $("#start-btn").on("click",function(){
        $("#start-btn").hide();
        gameStart = true;
        let endtimer = function(){
            alert("timer end")
        }
        
        setTimeout(endtimer, 1000 * 5);
        

        
        $("#question-box").html("<section id='question-area'></section>");
        $("#question-area").html("<p id='question'></p>");
        $("#question-box").append("<section id='answer-area'></section");
        $("#answer-area").html("<p id='answers'></p>");
        // questions Q:What genre of music did Throbing Gristle coin the name of? A: industrial. 
        // Q: When Genisis and Lady Jaye began to get cosmetic surgery to become the same person what was the term for what they became? A:The Pandrogyne
    

        let question1 = {
            question: "What genre of music did Throbing Gristle coin the name of?",
            answer: "Industrial",
            possibleAnswers: ["Darkwave", "Industrial", "Acid House", "Black Metal"],
            img: "filler",
            sound: "filler",
        };
        let question2 = {
            question: "When P-Orridge and Lady Jaye began to get cosmetic surgery to become the same person what was their term for what they became?",
            answer: "yes",
            possibleAnswers: ["The Pandrogyne", "The Geninirian", "Aceiamorph", "Transatamo"],
            img: "filler",
            sound: "filler",
        };
        let question3 = {
            question: "Am I asking you something?",
            answer: "yes",
            possibleAnswers: ["Yes", "no", "maybe", "not sure"],
            img: "filler",
            sound: "filler",
        };
        let question4 = {
            question: "Am I asking you something?",
            answer: "yes",
            possibleAnswers: ["Yes", "no", "maybe", "not sure"],
            img: "filler",
            sound: "filler",
        };

        let questionList =[question1,question2,question3,question4];
        let initializegame = function(){
            // I will need a randomizer to sort Q/A.
            // and another to randomize Answers. 
            $("#answers")
        };
    
        
        let checkForWin = function(){
            if (currentAnswer === currentQuestion.answer){
                // call on win display.
            }
            else{
                // call on loss display
            }
            
        }
    
        // Make objection for question. with right answer and wrong answers. 
        //make initialize area to refesh page.
        // build question 
        // build answer area.

        // build function that repalaces question area with win/ loss mid way point for a few seconds


        // win/loss checker. when right question area is replaced with win screen for 4 sec. before turning back to question screen.
        //  
    
    });

});
