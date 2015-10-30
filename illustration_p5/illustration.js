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
var note1Img;
var note2Img;
var note3Img;
var note4Img;
var note5Img;
var note6Img;

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
	note1Img = loadImage("images/note1.png");
	note2Img = loadImage("images/note2.png");
	note3Img = loadImage("images/note3.png");
	note4Img = loadImage("images/note4.png");
	note5Img = loadImage("images/note5.png");
	note6Img = loadImage("images/note6.png");

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
		//music notes shaking:
		var a = random(120, 110);
		image(note1Img, 100, a)
		var b = random(210, 220);
		image(note2Img, 200, b);
		var c = random(220, 230);
		image(note3Img, 450, c);
		var d = random(120, 110);
		image(note4Img, 550, d);
		var e = random(215, 225);
		image(note5Img, 650, e);
		var f = random(215, 225);
		image(note6Img, 50, f);



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
