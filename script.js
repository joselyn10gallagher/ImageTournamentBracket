// Variables for Images 
var onetwo = document.getElementById("onetwo");
var threefour = document.getElementById("threefour");
var fivesix = document.getElementById("fivesix");
var seveneight = document.getElementById("seveneight");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");

var finalholder = document.getElementById("finalsHolder");
var finalholdertwo = document.getElementById("finalsHolderTwo");
var winner = document.getElementById("winner");
var confetti = document.getElementById("confetti");

// Variables for If-Statements 
var imageone = false;
var imagetwo = false;
var imagethree = false;
var imagefour = false;
var imagefive = false;
var imagesix = false;
var imageseven = false;
var imageeight = false;

var semifinal1 = false;
var semifinal2 = false;
var semifinal3 = false;
var semifinal4 = false;

//Array to Shuffle Images

var imgArray = document.getElementsByClassName("imgx");      

var randomImage = new Array();

	randomImage[0] = "images/image1.jpg";
	randomImage[1] = "images/image2.jpg";
	randomImage[2] = "images/image3.jpg";
	randomImage[3] = "images/image4.jpg";
	randomImage[4] = "images/image5.jpg";
	randomImage[5] = "images/image6.jpg";
	randomImage[6] = "images/image7.jpg";
	randomImage[7] = "images/image8.jpg";

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

shuffle (randomImage);

for (let i = 0; i < 8; i++) {
	imgArray[i].src=randomImage[i];
	console.log(imgArray[i]);
}

//Audio
function clickAudio() {
	var audio = new Audio ("clickaudio.wav");
	audio.play();
}

function audioWinner() {
	var winner = new Audio ("winner.wav");
	winner.play();
}

function imageMove(i,x,id) {
	var chosenImgx = x.childNodes[i].src;	
	id.innerHTML = '<img src='+chosenImgx+' />';
}

// First Section
function optionOne(){
	imageMove(1,one,onetwo);
	two.classList.add("grayscale");
	one.classList.remove("grayscale");
	onetwo.classList.add("maroonboarder");
	imageone = true;
	checkLock1();
	clickAudio();
}

function optionTwo(){
	imageMove(1,two,onetwo);
	one.classList.add("grayscale");
	two.classList.remove("grayscale");
	onetwo.classList.add("maroonboarder");
	imagetwo = true;
	checkLock1();
	clickAudio();
}

// Second Section
function optionThree(){
	imageMove(1,three,threefour);
	four.classList.add("grayscale");
	three.classList.remove("grayscale");
	threefour.classList.add("maroonboarder");
	imagethree = true;
	checkLock1();
	clickAudio();
}

function optionFour(){
	imageMove(1,four,threefour);
	three.classList.add("grayscale");
	four.classList.remove("grayscale");
	threefour.classList.add("maroonboarder");
	imagefour = true;
	checkLock1();
	clickAudio();
}

// Third Section
function optionFive(){
	imageMove(1,five,fivesix);
	six.classList.add("grayscale");
	five.classList.remove("grayscale");
	fivesix.classList.add("maroonboarder");
	imagefive = true;
	checkLock1();
	clickAudio();
}

function optionSix(){
	imageMove(1,six,fivesix);
	five.classList.add("grayscale");
	six.classList.remove("grayscale");
	fivesix.classList.add("maroonboarder");
	imagesix = true;
	checkLock1();
	clickAudio();
}

//Fourth Section
function optionSeven(){
	imageMove(1,seven,seveneight);
	eight.classList.add("grayscale");
	seven.classList.remove("grayscale");
	seveneight.classList.add("maroonboarder");
	imageseven = true;
	checkLock1();
	clickAudio();
}

function optionEight(){
	imageMove(1,eight,seveneight);
	seven.classList.add("grayscale");
	eight.classList.remove("grayscale");
	seveneight.classList.add("maroonboarder");
	imageeight = true;
	checkLock1();
	clickAudio();
}

//Semifinal Section
function optionSemifinal1() {
	console.log("one/two");
	imageMove(0,onetwo,finalholder);
	threefour.classList.add("grayscale");
	onetwo.classList.remove("grayscale");
	finalholder.classList.add("maroonboarder");
	semifinal1 = true;
	checkLock2();
	clickAudio();
}

function optionSemifinal2() {
	console.log("three/four");
	imageMove(0,threefour,finalholder);
	onetwo.classList.add("grayscale");
	threefour.classList.remove("grayscale");
	finalholder.classList.add("maroonboarder");
	semifinal2 = true;
	checkLock2();
	clickAudio();
}

function optionSemifinal3() {
	console.log("five/six");
	imageMove(0,fivesix,finalholdertwo);
	seveneight.classList.add("grayscale");
	fivesix.classList.remove("grayscale");		
	finalholdertwo.classList.add("maroonboarder");
	semifinal3 = true;
	checkLock2();	
	clickAudio();
}

function optionSemifinal4(){
	console.log("seven/eight");
	imageMove(0,seveneight,finalholdertwo);
	fivesix.classList.add("grayscale");
	seveneight.classList.remove("grayscale");	
	finalholdertwo.classList.add("maroonboarder");
	semifinal4 = true;
	checkLock2();
	clickAudio();
}

function pickWinner1(){
	imageMove(0,finalsHolder,winner);
	finalholdertwo.classList.add("grayscale");
	winner.classList.add("maroonboarder");
	confetti.classList.remove("displaynone");
	finalholdertwo.removeAttribute("onclick");
	finalholder.removeAttribute("onclick");
	finalholdertwo.classList.remove("hvr-pulse-grow");
	finalholder.classList.remove("hvr-pulse-grow");
	audioWinner();
}

function pickWinner2(){
	imageMove(0,finalsHolderTwo,winner);
	finalholder.classList.add("grayscale");
	winner.classList.add("maroonboarder");
	confetti.classList.remove("displaynone");
	finalholdertwo.removeAttribute("onclick");
	finalholder.removeAttribute("onclick");
	finalholdertwo.classList.remove("hvr-pulse-grow");
	finalholder.classList.remove("hvr-pulse-grow");
	audioWinner();
}

//Lockout Functions
function checkLock1() {
	if ((imageone || imagetwo)&&(imagethree || imagefour)&&(imagefive || imagesix)&&(imageseven || imageeight)) {
		 console.log("semifinal lock");
		//left side	
			one.removeAttribute("onclick");
			two.removeAttribute("onclick");
			three.removeAttribute("onclick");
			four.removeAttribute("onclick");

			one.classList.remove("hvr-pulse-grow");
			two.classList.remove("hvr-pulse-grow");
			three.classList.remove("hvr-pulse-grow");
			four.classList.remove("hvr-pulse-grow");
			
			threefour.classList.add("hvr-pulse-grow");
			onetwo.classList.add("hvr-pulse-grow");

		//right side
			five.removeAttribute("onclick");
			six.removeAttribute("onclick");
			seven.removeAttribute("onclick");
			eight.removeAttribute("onclick");
			
			five.classList.remove("hvr-pulse-grow");
			six.classList.remove("hvr-pulse-grow");
			seven.classList.remove("hvr-pulse-grow");
			eight.classList.remove("hvr-pulse-grow");
			
			fivesix.classList.add("hvr-pulse-grow");
			seveneight.classList.add("hvr-pulse-grow");
	}
}

function checkLock2() {
	if ((semifinal1 || semifinal2)&&(semifinal3 || semifinal4)) {
			onetwo.removeAttribute("onclick");
			threefour.removeAttribute("onclick");
			fivesix.removeAttribute("onclick");
			seveneight.removeAttribute("onclick");
			
			onetwo.classList.remove("hvr-pulse-grow");
			threefour.classList.remove("hvr-pulse-grow");
			fivesix.classList.remove("hvr-pulse-grow");
			seveneight.classList.remove("hvr-pulse-grow");
			
			finalholdertwo.classList.add("hvr-pulse-grow");
			finalholder.classList.add("hvr-pulse-grow");
	}
}
