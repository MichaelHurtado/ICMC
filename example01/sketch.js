let URL = "https://mbardin.github.io/PDM-resources/media/sound_samples/";
let player1, player2, player3, button, button2, button3;

function preload(){
  player1 = new Tone.Player(URL +"General Sounds/Negative Sounds/sfx_sounds_error7.wav").toDestination();
  player2 = new Tone.Player(URL + "short_effects/zap1.mp3").toDestination();
  player3 = new Tone.Player(URL + "long_effects/Water+Trickle.mp3").toDestination();
}

function setup() {
  createCanvas(400, 400);
  console.log(Tone);
  
  button = createButton("zappy-zap");
  button.position(width / 2, height / 2);
  button.mousePressed(playZap);
  
  button2 = createButton("water trickle");
  button2.position(width / 2, height / 2 + 30);
  button2.mousePressed(playWater);
  
  button3 = createButton("stop me!!");
  button3.position(width / 2, height / 2 + 60);
  button3.mousePressed(stopSound);
}

function draw() {
  background(220);
}

function keyPressed(){
  if(keyCode === 32){
  player1.start();
  }
}

function playZap(){
  player2.start();
}

function playWater(){
  player3.start();
}
function stopSound(){
  player1.stop();
  player2.stop();
  player3.stop();
}