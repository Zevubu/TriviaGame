# TriviaGame
a trivia game that uses java script logic and jquery to make page elements.
everything on on the page was made with jquer except for the music play which I hard coded into the html. I used a music play I made for a past project however I updated it with a skip track function.

How I made the opening page. I made something similar for timed changing page.

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
    

   

How I made a slide show

                let geniImgs = ["assets/images/geni-greenhoody.jpg","assets/images/psychickCrossWhiteBord.png"...];    
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
            }:
            let startSlideshow = function(){
                setInterval(slideShow,2000);

How I made the music player design to skip the first track on the first go around as that track is the standing track and would play twice. I kept the hidden code in the bottom to show my process.

            <footer id="foot-flex">
        <section id="audio-flex">
            <audio id="music" >
                    <source src="assets/sounds/Psychic TV - The Orchids [1983].mp3" type="audio/mpeg">
            </audio>
            <p>Audio Controls:</p>
            <section id="audio-btn-flex">
                <h2 id="play" onclick="playAudio()" type="button">Play</h2>
                <h2 id="pause" onclick="pauseAudio()" type="button">Pause</h2>
                <h2 id="next" onclick="nextTrack()" type="button">Skip</h2>
            </section>
            <script>
                    let musicElement = document.getElementById("music");
                    let musicCount = 1;
                    let musicList =["assets/sounds/Psychic TV - The Orchids [1983].mp3"...] 
                    function playAudio() { 
                        musicElement.play(); 
                    };
                    function pauseAudio() { 
                        musicElement.pause(); 
                    };
                    musicElement.addEventListener("ended",function(){
                        nextTrack();
                    });
                    let nextTrack = function(){
                        console.log("next")
                        musicElement.src = musicList[musicCount];
                        playAudio()
                        musicCount++;
                        if(musicCount === musicList.length){
                            musicCount =0;
                        };
                    };
                    // musicElement.addEventListener("load", function(){
                    //     console.log("load check")
                    //     playAudio()
                    // }, true);
                    // // if(musicElement !== undefined){
                    //     playAudio();  
                    // };
            </script>



THEE GIF GRAVEYARD!
I didn't end up using any of these but I still like them so I kept them
nonsense is good gif:
<iframe src="https://giphy.com/embed/m8rFmGo0DCTok" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mtv-wall-porridge-m8rFmGo0DCTok">via GIPHY</a></p>

Geni grey bob glitch gif:
<iframe src="https://giphy.com/embed/WP7cu2JRQ6icw" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/genesis-porridge-cneeson-WP7cu2JRQ6icw">via GIPHY</a></p>

Free sex show gif:
<iframe src="https://giphy.com/embed/j5qYuLhDgdeOQ" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mtv-wall-porridge-j5qYuLhDgdeOQ">via GIPHY</a></p>

geni talking:
<iframe src="https://giphy.com/embed/BxudSGuEvURHi" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/throbbing-gristle-sleasy-genesis-p-orridge-BxudSGuEvURHi">via GIPHY</a></p>

throbbing gristle gif
<iframe src="https://giphy.com/embed/13akJcNObsfSpO" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/throbbing-gristle-genesis-p-orridge-sleasy-13akJcNObsfSpO">via GIPHY</a></p>
