let baseURL = "https://mbardin.github.io/PDM-resources/media/sound_samples/rhythmic_effects/";
let multiPlayer, button1, button2, button3, button4, stopButton;


function preload() {
  multiPlayer = new Tone.Players({ 
    bubbles: baseURL + "Bubbles.mp3",
    water: baseURL + "Aqua+Beat.mp3",
    car: baseURL + "Car+Service.mp3",
    radio: baseURL + "Tuning+In.mp3"
  }).toDestination();

  //bubbles = new Tone.Player(baseURL + "Bubbles.mp3");
}

function setup() {
  createCanvas(400, 400);
  console.log(Tone);

  //making buttons on the canvas
  button1 = createButton("bubbles"); //make the button and give it a label
  button1.position(50, height / 2); //position the button
  button1.mousePressed(playBubbles); //tell it what code to execute when clicked

  button2 = createButton("water");
  button2.position(125, height / 2);
  button2.mousePressed(playWater);

  button3 = createButton("car");
  button3.position(175, height / 2);
  button3.mousePressed(playCar);

  button4 = createButton("radio");
  button4.position(225, height / 2);
  button4.mousePressed(playRadio);
  
  stopButton = createButton("stop all sounds");
  stopButton.position(width / 2, height *0.66);
  stopButton.mousePressed(stopSound);
}

function draw() {
  background(220);
}


//each of these functions tell the .Players() to play a specific sound file (loaced within an internal player) when called.
function playBubbles() {
  multiPlayer.player("bubbles").start();
}

function playWater() {
  multiPlayer.player("water").start();
}

function playCar() {
  multiPlayer.player("car").start();
}

function playRadio() {
  multiPlayer.player("radio").start();
}

function stopSound(){ //this function tells the .Players() object to stop playing all sounds when called.
  multiPlayer.stopAll();
}