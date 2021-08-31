//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
//Give specific height and width to the car image
greencar_width = 75;
greencar_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

greenCar_x = 5;
greenCar_y = 255;

function add() {
	//upload car, and background images on the canvas.
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = background_image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_ImgTag , 0 , 0 , canvas.width, canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_ImgTag , greenCar_x, greenCar_y , greencar_width , greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greenCar_y > 0 ){
		greenCar_y = greenCar_y - 10;
		uploadBackground() ;
		 uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greenCar_y < 300){
		greenCar_y =greenCar_y +10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greenCar_x > 0){
		greenCar_x = greenCar_x -10
		uploadBackground();
		uploadgreencar();
	}
}


function right()
{
	//Define function to move the car left side
	if(greenCar_x < 700){
		greenCar_x = greenCar_x +10
		uploadBackground();
		uploadgreencar();
	}
}