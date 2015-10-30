//Book: Charlie and the Chocolate Factory
//Line: "I am the maker of music, the dreamer of dreams."

//Nico Siy


//variables:

var backgroundImg;
var boyHandsDownImg;
var boyHandsUpImg;
var cloudImg;
var cloud2Img;
var musicNotesImg;
var sidewalkImg;
var flyingBoyImg;
var rainbowImg;
var rightBuildingImg;
var midBuildingImg;
var leftBuildingImg;

var largeCloudX = -100;
var smallCloudX = 600;

var currentScene = "dream";

//preload images:

function preload() {
	backgroundImg = loadImage("images/background.png");
	boyHandsDownImg = loadImage("images/boy_handsdown.png");
	boyHandsUpImg = loadImage("images/boy_handsup.png");
	cloudImg = loadImage("images/cloud.png");
	cloud2Img = loadImage("images/cloud2.png");
	musicNotesImg = loadImage("images/musicnotes.png");
	sidewalkImg = loadImage("images/sidewalk.png");
	flyingBoyImg = loadImage("images/flyingboy.png");
	rainbowImg = loadImage("images/rainbow.png");
	rightBuildingImg = loadImage("images/rightbuilding.png");
	midBuildingImg = loadImage("images/midbuilding.png");
	leftBuildingImg = loadImage("images/leftbuilding.png");


}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	// if (currentScene === "life")
	image(backgroundImg, 0, 0);

	//cloud movement
	//took cloud movement from class notes sketch
	largeCloudX += 0.5;
	if (largeCloudX > 800) {
		largeCloudX = -200;
	}
	image(cloudImg, largeCloudX, -400);

	smallCloudX += 0.8;
	if (smallCloudX > 800) {
		smallCloudX = -200;
	}
	image(cloud2Img, smallCloudX, 0);

	image(rightBuildingImg, 600, 330);
	image(midBuildingImg, -180, 80);
	image(leftBuildingImg, -80, 270);
	image(boyHandsDownImg, 400, 371);

	//user clicks mouse, music and dreams are made:

	if (mouseIsPressed) {

		// if (currentScene === "dream") {
		image(rainbowImg, 0, 70);
		image(musicNotesImg, 100, 100);
		image(flyingBoyImg, mouseX - 130, mouseY - 130);

	}
	//
	// function mouseClicked() {
	// 	if (currentScene === "dream") {
	// 		currentScene = "life";
	// 	} else {
	// 		currentScene = "dream";
	// 	}
	// }


	//console.log(mouseX, mouseY);

}
