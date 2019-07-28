# TriviaGame
a trivia game that uses java script logic and jquery to make page elements.
everything on on the page was made with jquer except for the music play which I hard coded into the html. I used a music play I made for a past project however I updated it with a skip track function.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Genisis P Trivia Game</title>
    <link rel="stylesheet" type="text/css" href="assets/css/resets.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
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
                    let musicList =["assets/sounds/Psychic TV - The Orchids [1983].mp3", "assets/sounds/Hamburger Lady (D.o.A. The Third and Final Report of Throbbing Gristle, 1978).mp3","assets/sounds/Throbbing Gristle - Almost A Kiss.mp3","assets/sounds/Psychic TV - Godstar.mp3"] 
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
            </script>
        </section>
        <section id="about-flex">
            <p>A fan page by Zev Ubu Hoffman.</p> 
        </section>   
    </footer>  
</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="assets/javascript/app.js"></script>
</html>


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
