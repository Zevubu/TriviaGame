$(document).ready(function(){
        // decliar variables 
    // build page sections.
    let gameStart = false;

    $("body").html(" <section id='game-area'></section> ");
    $("#game-area").html("<header> Genesis P-Orridge </header>");
    $("#game-area").append("<article id='question-box'></article>");
    $("#question-box").html("<button id='start-btn'>Start Game</button>");


    // build area for/ and opening start button to be replaced.

    // within on click function build new page.
    // build question screan area
    $("#start-btn").on("click",function(){
        $("#start-btn").hide();
        gameStart = true;
        let questionBoxShown = true;
        let currentQuestion;
        let currentAnswer;
        let count = 0;
        let questionCount = 0;
        let questionList = [];
        let questionsUsed = [];
        let countInterval;
        let randomQnum;
        let answerTry;
        let wins = 0;
        let losses = 0;
        
        
        $("#question-box").append("<section id='question-area'></section>");
        $("#question-area").html("<p id='question'></p>");
         $("#question-area").append("<p id='timer-area'></p>")
        $("#question-box").append("<section id='answer-area'></section");
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

        questionList = [question1,question2,question3,question4];
        
        // // for(let i =0; i < questionList.length; i++ ){
        //     randomQnum = Math.floor(Math.random() * questionList.length);

        //     if (questionsToUse.indexOf(questionList[randomQnum]) > -1){
        //         return;
        //     }
        //     else{
        //         questionsToUse.push(questionList[randomQnum]);
        //         console.log(questionsToUse[i]);
        //     };        
        // };
        let initializegame = function(){
            if (!questionBoxShown){
                $("#question-box").show();
                questionBoxShown = true;

            };
            
            $("#answer-area").empty();
            count = 23
            $("#timer-area").text(count);
            countInterval = setInterval(countdown, 1000)

            currentObject = questionList [Math.floor(Math.random() * questionList.length)];

            if(questionsUsed.indexOf(currentObject) > -1){
                clearInterval(countInterval);
                $("#answer-area").empty()
                initializegame();
                
            }
            else{
                $("#question").html(currentObject.question);

                for( i = 0; i < currentObject.possibleAnswers.length; i++){
                    currentAnswer = currentObject.possibleAnswers[i];
                    console.log(currentAnswer)
                    let newAnswerBTN = $("<h2>");
                    newAnswerBTN.addClass("answers");
                    newAnswerBTN.attr("answer-name", currentAnswer);
                    newAnswerBTN.text(currentAnswer);
                    
                    $("#answer-area").append(newAnswerBTN);
                };
            };

            
        
            // I will need a randomizer to sort Q/A.
            // and another to randomize Answers. 
            
          
        };

        let winScreen = function(){
            $("#question-box").hide();
            questionBoxShown = false;
            initializegame()
        };
        let lossScreen = function(){
            $("#question-box").hide();
            questionBoxShown = false;
            initializegame()
        };
        let timeoutScreen = function(){
            $("#question-box").hide();
            questionBoxShown = false;
            initializegame()

        };

        let countdown = function(){
            if(questionCount === questionList.length -1){
                if(wins > losses){
                    alert("you won the game")
                    //need to replace with a screen replace.
                }
                else if (wins === losses){
                    alert("You got half right!")
                    //need to replace with a screen replace.
                }
                else{
                    alert("You lost the game.")
                    //need to replace with a screen replace.
                }
                
            

            }
            else if (count < 1){
                losses++
                questionCount++;
                questionsUsed.push(currentObject);
                clearInterval(countInterval);
                timeoutScreen()
            
                


            }
            else{
                count--;
                $("#timer-area").text(count);

            }
        };

        
    
        
        let checkForWin = function(){
            questionCount++;
            questionsUsed.push(currentObject);
            console.log("check")
            clearInterval(countInterval);
            answerTry = $(this).attr("answer-name");
            // if questionCount === questionList.length-1
            if (answerTry === currentObject.answer){
                // call on win display.
                wins++;
                winScreen();
                // hides page content and shows win screen 
            }
            else{
                losses++;
                // call on loss display
                lossScreen();
                // hides page content and shows loss screen 
            };
            
        };
        
        
       $(document).on("click",".answers",checkForWin)
       
    //    $(".answers").on("click",function(){
            
            
           
    //         checkForWin();

            

    //     });
        initializegame();

        // let endtimer = function(){
        //     alert("timer end")
        // }

        // setTimeout(endtimer, 1000 * 5);

        // Make objection for question. with right answer and wrong answers. 
        //make initialize area to refesh page.
        // build question 
        // build answer area.

        // build function that repalaces question area with win/ loss mid way point for a few seconds


        // win/loss checker. when right question area is replaced with win screen for 4 sec. before turning back to question screen.
        //  
    
    });

});
