var cloudMoving;

// on page load do this
(function (){

	var screenWidth = screen.width;
	var screenHeight = screen.height;

	// move clouds with speed 1
	moveClouds(1);

	// get body element to pause css animation
	var bod = document.getElementById("bod");
	bod.style.WebkitAnimationPlayState = "paused";
	bod.style.animationPlayState = "paused";

	// pause rocket css animation
	var rocket = document.getElementById("rocket");
	rocket.style.WebkitAnimationPlayState = "paused";
	rocket.style.animationPlayState = "paused";

})();

// create stars in the background
function createStars(screenWidth, screenHeight, numStars){
	var space = document.getElementById("space");

	for(var i=0; i<numStars;i++){
		var star = document.createElement("div");
		star.className = "star";
		var top = Math.floor(Math.random() *  screenHeight+1);
		var left = Math.floor(Math.random() * screenWidth+1);
		star.style.top = top + "px";
		star.style.left = left + "px";
		space.appendChild(star);
	}
	
}


// animate the stars falling down
function animateStars(screenHeight, speed){
	var bod = document.getElementById("bod");
	bod.style.WebkitAnimationplayState = "running";
	bod.style.animationPlayState = "running";

	var rocket = document.getElementById("rocket");
	rocket.style.WebkitAnimationplayState = "running";
	rocket.style.animationPlayState = "running";


	var button = document.getElementById("launch");
	button.style.display="none";

	var space = document.getElementById("space");
	var stars = space.childNodes;

	// repeat the falling of stars, move back to top when the stars go past the bottom
	setInterval(function(){
		for(var i=0; i<stars.length; i++){
			var starHeight = parseInt(stars[i].style.top);
			var heightChange;
			if(starHeight + speed > screenHeight){
				heightChange = 0 + speed;
			}
			else{
				heightChange = starHeight + speed;
			}

			stars[i].style.top = heightChange + "px";
		}
	}, 20);
}




// move clouds down when the rocket is launched
function moveCloudsDown(screenHeight, speed){
	var sky = document.getElementById("sky");
	var clouds = sky.childNodes;

	setInterval(function(){
		for(var i=0; i<clouds.length; i++){
			var cloudHeight = parseInt(clouds[i].style.top);
			var heightChange;
			if(cloudHeight + speed > screenHeight){
				sky.removeChild(clouds[i]);
			}
			else{
				heightChange = cloudHeight + speed;
				clouds[i].style.top = heightChange + "px";
			}

		}
	}, 20);
}

// move clouds from left to right 
function moveClouds(speed){
	var sky = document.getElementById("sky");
	clouds = sky.childNodes;

	this.cloudMoving = setInterval(function(){
		for(var i=0; i<clouds.length; i++){
			var cloudXPos = parseInt(clouds[i].style.left);
			var xChange;
			if(cloudXPos + speed > screen.width){
				clouds[i].style.left =  "-200px";

			}
			else{
				xChange = cloudXPos + speed;
				clouds[i].style.left = xChange + "px";
			}

			
		}
	}, 50);


}



// call all of the functions when launch button is pressed
function launchRocket(){
	var screenWidth = screen.width;
	var screenHeight = screen.height;

	clearInterval(this.cloudMoving);
	moveCloudsDown(screenHeight, 5);
	createStars(screenWidth,screenHeight,50);
	animateStars(screenHeight, 2);

}


