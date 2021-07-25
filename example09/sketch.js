let URL = "https://mbardin.github.io/PDM-resources/media/sound_samples/";
let player;

var myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

function preload(){
  player = new Tone.Player(URL + "long_effects/Water+Trickle.mp3").toDestination();
}

function setup()
{
	// graphics stuff:
	createCanvas(800, 600);
	background(255, 255, 255);
	//myRec.onResult = parseResult; // now in the constructor
	myRec.start(); // start engine
}

function draw()
{

}

function parseResult()
{
	// recognition system will often append words into phrases.
	// so hack here is to only use the last word:
	var mostrecentword = myRec.resultString.split(' ').pop();
	if(mostrecentword.indexOf("left")!==-1) { background(0); player.start(); }
	else if(mostrecentword.indexOf("clear")!==-1) { background(200); }
	console.log(mostrecentword);
}
