let baseURL = "https://mbardin.github.io/PDM-resources/media/sound_samples/short_effects/";
let multiplayer, beep, beep_rev;
let button1, button2;
let reverb;

function preload(){
	multiPlayer = new Tone.Players({
		beep:		baseURL + "beep4.wav",	
		beep_rev:	baseURL + "beep4.wav"   
	});
	reverb = new Tone.JCReverb(0.7);
}
function setup(){
	createCanvas(400, 400);

  	button1 = createButton("beep beep");
  	button1.position(100, height / 2);
  	button1.mousePressed(playBeep);

  	button2 = createButton("beep rev");
  	button2.position(200, height / 2);
  	button2.mousePressed(playBeep_rev);

  	multiPlayer.player("beep").toDestination();

  	beep_rev = multiPlayer.player("beep_rev");
  	beep_rev.connect(reverb);
  	reverb.toDestination();
}
function draw() {
  background(220);
}

function playBeep(){
  multiPlayer.player("beep").start();
}

function playBeep_rev(){
  beep_rev.start();
}

