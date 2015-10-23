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

var largeCloudX = -100;
var smallCloudX = 600;

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


}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImg, 0, 0);

	//cloud movement
	//took cloud movement from class notes sketch
	largeCloudX += 0.8;
	if (largeCloudX > 800) {
		largeCloudX = -200;
	}
	image(cloudImg, largeCloudX, 100);

	smallCloudX += 0.5;
	if (smallCloudX > 800) {
		smallCloudX = -200;
	}
	image(cloud2Img, smallCloudX, 50);

	image(sidewalkImg, 0, 200);
	image(boyHandsDownImg, 400, 371);

	//user clicks mouse, music and dreams are made:

	if (mouseIsPressed) {
		largeCloudX += 0.8;
		if (largeCloudX > 800) {
			largeCloudX = -200;
		}
		image(cloudImg, largeCloudX, 100);

		smallCloudX += 0.5;
		if (smallCloudX > 800) {
			smallCloudX = -200;
		}

		//image(backgroundImg, 0, 0);
		image(sidewalkImg, 0, 200);
		image(rainbowImg, 0, 70);
		image(musicNotesImg, 100, 100);
		image(flyingBoyImg, mouseX - 130, mouseY - 130);

	}


	//console.log(mouseX, mouseY);

}
