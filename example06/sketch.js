let synth, seq;
let melody = ['G2', 'E2', 'F#2', 'G2', ['D2', 'A2'],
  ['D2', 'A2', 'F#2'], 'G2']; //this is our musical melody

function preload() {
  synth = new Tone.Synth({ //you can set the parameters of the synth when creating it using JSON.
    oscillator: {
      type: "triangle"
    },
    envelope: { //sets the various sound properties for the synth
      attack: 0.05,
      decay: 0.5,
      sustain: 1,
      release: 5
    }
  });

  seq = new Tone.Sequence(function(time, note) {
    synth.triggerAttackRelease(note, 0.5);
  }, melody, '4n'); //creates a function telling our synthesizer to play the melody notes in time.
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textFont("futura")
  textSize(20);
  synth.connect(Tone.Destination);

  Tone.Transport.bpm.value = 60; //sets tempo of the transport clock
  Tone.Transport.start();//starts the transport when the code is loaded.
}

function draw() {
  background(220, 100, 100);
  text("hold the mouse to play a melody!", width / 2, height / 2);
}

function mousePressed() {
  seq.start(); // begins sequence when the mouse is perssed
}

function mouseReleased() {
  seq.stop(); //stops sequence when the mouse is released
}