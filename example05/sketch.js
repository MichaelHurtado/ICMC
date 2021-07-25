let synth; //variable to hold the synthesizer object

function preload() { //you can make the synth here or in setup
  synth = new Tone.Synth({
    oscillator:{
      type: "triangle"
    }
  });
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textFont("futura")
  textSize(20);
  synth.connect(Tone.Destination);
  synth.oscillator.type="sine";
}

function draw() {
  background(220, 100, 100);
  text("Click the mouse to play a note!", width / 2, height / 2);
}

function mousePressed() { //this is where we will trigger the synth to playback a random frequency
  synth.triggerAttackRelease(randomNote(),1); 
}

function randomNote() {
  let note = floor(random(30, 3000)); //generates a random frequency between 30 and 3000Hz
  console.log(`frequency: ${note}`); //displays chosen frequency in the console.
  return note;
}