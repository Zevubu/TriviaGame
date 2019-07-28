
$(document).ready(function(){
        // decliar variables 
    // build page sections.
    let slideCount = 0;
    let geniImgs = ["assets/images/geni-greenhoody.jpg","assets/images/psychickCrossWhiteBord.png","assets/images/geni-leaves.jpg","assets/images/psychickCrossWhiteBord.png", "assets/images/greyimgwithteeth.webp", "assets/images/psychickCrossWhiteBord.png", "assets/images/3Genesis.jpeg", "assets/images/psychickCrossWhiteBord.png", "assets/images/Genis-baloon.jpg", "assets/images/psychickCrossWhiteBord.png", "assets/images/genesis-throb-shirt.jpg","assets/images/psychickCrossWhiteBord.png","assets/images/againstM-F.jpg", "assets/images/psychickCrossWhiteBord.png","assets/images/ladyJandGeniwedding.jpg", "assets/images/psychickCrossWhiteBord.png", "assets/images/geni-lips.jpg", "assets/images/psychickCrossWhiteBord.png","assets/images/gen-greendress-grey-hair.jpg", "assets/images/psychickCrossWhiteBord.png","assets/images/Thee-Pandrogyne-pink.jpg","assets/images/psychickCrossWhiteBord.png", "assets/images/genesis-p-orridge-on-screen.jpg", "assets/images/psychickCrossWhiteBord.png", "assets/images/Thee-Pandrogyne.jpg","assets/images/psychickCrossWhiteBord.png","assets/images/psychic_tv.jpg","assets/images/psychickCrossWhiteBord.png", "assets/images/young-punks.png","assets/images/psychickCrossWhiteBord.png","assets/images/gen-jaye.jpg","assets/images/psychickCrossWhiteBord.png","assets/images/message_from_the_temple.png","assets/images/psychickCrossWhiteBord.png",];    
    let gameStart = false;
    let otherMusicElement = document.getElementById("music");
    let displayImage =function(){
        $("#slide-show").html(`<img id="game-img" src="${geniImgs[slideCount]}">`);
    }
    let slideShow = function(){
        slideCount++;
        setTimeout(displayImage, 2000);
        $("#slide-show").html(`<img id="game-img" src="assets/images/psychickCrossWhiteBord.png">`)
        if (slideCount === geniImgs.length){
            slideCount = 0;
        }
    };
    let startSlideshow = function(){
        setInterval(slideShow,2000);
    }
    $("body").prepend(" <section id='game-flex'></section> ");
    $("#game-flex").prepend(" <section id='game-area'></section> ");
    $("#game-area").prepend("<header id='head'></header>");
    $("#head").append(`<p id="geni-name-text"> Genesis P-Orridge </p>`);
    $("#head").append(`<section id="head-imgs"></section>`);
    $("#head-imgs").append(`<section id="slide-show"></section>`);
    $("#slide-show").html(`<img id="game-img" src="assets/images/geni-greenhoody.jpg">`);
    // $("#head-imgs").append(`<img id="phychickCross" src="assets/images/psychickCrossWhiteBord.png">`);
    $("#game-area").append("<article id='question-box'></article>");
    $("#head").append(`<section id="head-btn"></section>`);
    $("#head-btn").append("<h2 id='start-btn'>Start Game</h2>");
    $("#game-area").append(`<footer id="foot"></footer>`);
    

   




    startSlideshow()
    
    // build area for/ and opening start button to be replaced.

    // within on click function build new page.
    // build question screan area
    $("#start-btn").on("click",function(){
        $("#start-btn").hide();
        // otherMusicElement.play();
        gameStart = true;
        let questionBoxShown = true;
        let currentAnswer;
        let count = 0;
        let countLost = false; 
        let questionCount = 0;
        let questionList = [];
        let questionsUsed = [];
        let countInterval;
        let answerTry;
        let soundtype;
        let wins = 0;
        let losses = 0;
        
        
        $("#question-box").append("<section id='question-area'></section>");
        $("#question-area").append("<section id='timer-box'></section>");
        $("#timer-box").append("<p id='timer-area'></p>")
        $("#question-area").append("<section id='score-area'></section>");
        $("#game-area").append("<section id='pause-box'></section>")
        // $("#score-area").append("<p id='Your-score-text'>Your score:</p>");
        $("#score-area").append("<section id='win-loss'></section>");
        $("#win-loss").append("<section id='wins-area'></section>")
        $("#wins-area").append("<p id='wins-text'>Wins:</p>")
        $("#wins-area").append("<p id='wins'></p>")
        $("#win-loss").append("<section id='loss-area'></section>")
        $("#loss-area").append("<p id='loss-text'> Losses:</p>")
        $("#loss-area").append("<p id='loss'></p>")
        $("#question-area").append("<section id='question-text-box'></section>"); 
        $("#question-text-box").append("<p id='question'></p>"); 
        $("#question-box").append("<section id='answer-box'></section>");
        $("#answer-box").append("<section id='answer-area'></section");
        // questions Q:What genre of music did Throbing Gristle coin the name of? A: industrial. 
        // Q: When Genisis and Lady Jaye began to get cosmetic surgery to become the same person what was the term for what they became? A:The Pandrogyne


        let question1 = {
            question: "What genre of music did Throbing Gristle coin the name of?",
            answer: "Industrial",
            possibleAnswers: ["Darkwave", "Black Metal", "Acid House", "Industrial"],
            info: [
                "<p>The opening of Prostitution marked the launch of Throbbing Gristle.</p>",
                "<p>The band formed when fellow COUM members</p>",
                "<p>Cosey Fanni Tutti, P-Orridge and Peter Christopherson met electronics wizard Chris Carter.</p>",
                "<p>The churning, terrifying noise they created attracted an ever-increasing group of intense devotees.</p>",
                "<br>",
                "<p>Much to the band’s apparent horror. </p>",
                "<br>",
                "<p> Paraphrase from and interview with Cosey Fanni Tutti. by Alex Patrits </p>"],
            img: `assets/images/throbbing-gristle-jazz.jpg`,
            sound: "filler",
        };
        let question2 = {
            question: "When P-Orridge and Lady Jaye began to get cosmetic surgery to become the same person what was their term for what they became?",
            answer: "The Pandrogyne",
            possibleAnswers: ["The Pandrogyne", "The Geninirian", "Aceiamorph", "Transatamo"],
            info: ["<p>The two sought to merge themselves into one being.</p>", 
            " <p> some-thing Th-eye termed \“Thee Pandrogyne.\”</p> "],
            img: `assets/images/twins-entwined.jpg`,
            sound: "filler",
        };
        let question3 = {
            question: "What artist that contributed to Phychic TV, shares a name with the ceator of this website?",
            answer: "Z'EV",
            possibleAnswers: ["Larry Thrasher", "Timothy Leary", "Z'EV", "Pere UBU"],
            info:[
                "<p>A percussionist, performer, composer, instrument builder, visual artist, poet and theorist.</p>", 
                "<p> Who explored visceral and mystical dimensions of sound — becoming a pioneer of industrial music along the way.</p>", 
                "<br>",
                "<p> In Memoriam </p>"
                ],
            img: `assets/images/ZevLive2.jpg`,
            sound: "filler",
        };
        let question4 = {
            question: "What number is significant in the philosophy of TOPY?",
            answer: "23",
            possibleAnswers: ["666", "13", "23", "42"],
            info: [" \"The number 23 is a bit ov a situationist prank...</p>",
            "<p> as nothing freaks out the flat people as this mystic number.\""],
            img: "assets/images/23Skull.jpg",
            sound: "filler",
        };
        let question5 = {
            question: "What Psychic TV song was an homage to rolling stones Brian Jones  ?",
            answer: "Godstar",
            possibleAnswers: ["The Orchirds", "Godstar", "Dreams Less Sweet", "Are You Experienced"],
            info: ["<p> This is a story! A very special story.</p>", "<p> It's about Brian Jones, one of the Rolling Stones. </p>", "<p>Where were you when the stars went out?  </p>", "<p> Where were you when they started to shout? </p>", "<p> I saw you alone by the pool, </p>", "<p>and all your friends called you a fool.</p>"],
            img: "assets/images/23Skull.jpg",
            sound: "filler",
        };


        questionList = [question1,question2,question3,question4,question5];
        
      
        let initializegame = function(){
            if (!questionBoxShown){
                $("#question-box").show();
                $("#slide-show").show();
                questionBoxShown = true;
            };
            $("#pause-box").empty()
            $("#pause-box").hide();

            $("#wins").text(wins);
            $("#loss").text(losses);
            
            $("#answer-area").empty();
            
            
            count = 23
            $("#timer-area").text(count);
            // countInterval = setInterval(countdown, 1000)

            currentObject = questionList [Math.floor(Math.random() * questionList.length)];

            if(questionCount === questionList.length){
                finalScreen();
            }
            else if(questionsUsed.indexOf(currentObject) > -1){
                clearInterval(countInterval);
                $("#answer-area").empty()
                initializegame();
                
            }
            else{
                $("#question").html(currentObject.question);

                for( i = 0; i < currentObject.possibleAnswers.length; i++){
                    // $("#answer-area").append(newAnswerBTN);
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

        let pauseScreen = function(){
            $("#pause-box").show();
            questionBoxShown = false;
            questionCount++;
            questionsUsed.push(currentObject);
            clearInterval(countInterval);
            $("#slide-show").hide();
            $("#question-box").hide();
            $("#pause-box").append(`<section id="pause-img"></section>`);
            $("#pause-box").append(`<section id="text-box"></section>`);
            $("#text-box").append(`<section id="wl-box"></section>`);
            $("#wl-box").append(`<p id="win-loss-text-result"></p>`); 
            $("#text-box").append(`<section id="text-pause-box"></section>`);
            
            $("#pause-img").append(`<img id="game-img" src="${currentObject.img}">`);
            
            // soundtype = currentObject.sound.split(".").pop();
            // console.log(soundtype);
            $("#pause-box").append(`<source src="${currentObject.sound}" type="audio/${soundtype}">`);
            if (countLost){
                countLost = false
                $("#win-loss-text-result").text(`You ran out of time. Thee answer was ${currentObject.answer}`)
            }
            else if(answerTry === currentObject.answer){
                $("#win-loss-text-result").text(`You where right! Thee answer is ${currentObject.answer}`)

            }
            else{
                $("#win-loss-text-result").text(`I'm sorry my dear but thee correct answer was ${currentObject.answer}`)

            }
            $("#text-pause-box").append(currentObject.info)
            
            setTimeout(initializegame, 7); 
            
        };

       

        let finalScreen = function(){
            $("#question-box").hide();
            $("#head-imgs").empty();
            $("#pause-box").show();
            clearInterval(countInterval);
            
            $("#pause-box").append("<section id='final-score-area'></section>");
            // $("#score-area").append("<p id='Your-score-text'>Your score:</p>");
            $("#final-score-area").append("<section id='final-win-loss'></section>");
            $("#final-win-loss").append("<section id='final-wins-area'></section>");
            $("#final-wins-area").append("<p id='final-wins-text'>Wins:</p>");
            $("#final-wins-area").append(`<p id='final-wins'>${wins}</p>`);
            $("#final-win-loss").append("<section id='final-loss-area'></section>");
            $("#final-loss-area").append("<p id='final-loss-text'>Losses:</p>");
            $("#final-loss-area").append(`<p id='final-loss'>${losses}</p>`);
            $("#pause-box").append("<section id='final-text-box'></section>"); 
            $("#final-text-box").append("<p id='win-loss-text-result'></p>"); 

        
            // $("#pause-box").append(`<section id="final-wins"></section>`);
            // $("#final-wins").append("<p>wins</p>");
            // $("#final-wins").append(`<p>${wins}</p>`);
            // $("#pause-box").append(`<section id="final-losses"></section>`); 
            // $("#final-losses").append("<p>losses</p>");
            // $("#final-losses").append(`<p>${losses}</p>`);
             
            $("#head-imgs").append(`<img id="game-img" src="assets/images/psychickCrossWhiteBord.png">`);             
            $("#head-imgs").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/foNV3xtH6n0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


            if(wins === questionList.length){
                $("#win-loss-text-result").text(`This game has ended. Your Know-ledge was sufficient. You answered all questions correctly.`);
            }
            else if(wins > losses){
                $("#win-loss-text-result").text(`This game has ended. Your Know-ledge was sufficient.`);
                
                //need to replace with a screen replace.
            }
            else if (wins === losses){
                $("#win-loss-text-result").text(`This game has ended. Your Know-ledge is perfectly balanced.`);
                console.log("You got half right!");
                //need to replace with a screen replace.
            }
            else if(wins === 2 && losses ===3){
                $("#win-loss-text-result").text(`23*23 23*23*23`);
                console.log("23*23 23*23*23");

            }
            else{
                $("#win-loss-text-result").text(`This game has ended. You didn't win, but don't worry this game is trivial.`);
                console.log("You lost the game.");
                //need to replace with a screen replace.
            };
        };
        
        
        
        let countdown = function(){
            if (count < 1){
                losses++
                countLost = true;
                pauseScreen();


            }
            else{
                count--;
                $("#timer-area").text(count);
            }
        };

        let checkForWin = function(){
            console.log("check")
            answerTry = $(this).attr("answer-name");
            // if questionCount === questionList.length-1
            if (answerTry === currentObject.answer){
                // call on win display.
                wins++;
                pauseScreen();
                // hides page content and shows win screen 
            }
            else{
                losses++;
                // call on loss display
                pauseScreen();
                // hides page content and shows loss screen 
            };
            
        };
        
        
       $(document).on("click",".answers",checkForWin)
       
       initializegame();
    //    $(".answers").on("click",function(){
            
            
           
    //         checkForWin();

            

    //     });
        
 // let lossScreen = function(){
        //     setTimeout(initializegame, 2000);
        //     $("#question-box").hide();
        //     questionBoxShown = false;
            
        // };
        // let timeoutScreen = function(){
        //     setTimeout(initializegame, 2000);
        //     $("#question-box").hide();
        //     questionBoxShown = false;
        // };
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
