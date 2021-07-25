let URL = "https://mbardin.github.io/PDM-resources/media/sound_samples/";
let player;

function preload(){
  player = new Tone.Player(URL + "long_effects/Water+Trickle.mp3").toDestination();
}

function setup() {
  createCanvas(400, 400);
  console.log(Tone);
}

function draw() {
  background(220);
}

function mousePressed(){
  player.start();
}
