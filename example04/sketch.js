let URL = "https://mbardin.github.io/PDM-resources/media/sound_samples/short_effects/beep4.wav";
let button, player, phaser;
//let distortion;
function preload() {
  player = new Tone.Player(URL);
  phaser = new Tone.Phaser({
    frequency: 15,
    octaves: 5,
    baseFrequency: 1000
  });
  //distortion = new Tone.Distortion(0.9);
}

function setup() {
  createCanvas(400, 400);
  console.log(Tone);
  
  player.chain(phaser,Tone.Destination);
  
  button = createButton("beep");
  button.position(width / 2, height / 2);
  button.mousePressed(playBeep);
}

function draw() {
  background(220);
}

function playBeep() {
  player.start();
}