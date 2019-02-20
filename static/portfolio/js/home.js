var cloudMoving;

(function (){

	var screenWidth = screen.width;
	var screenHeight = screen.height;


	moveClouds(1);


	var bod = document.getElementById("bod");
	bod.style.WebkitAnimationPlayState = "paused";
	bod.style.animationPlayState = "paused";

	var rocket = document.getElementById("rocket");
	rocket.style.WebkitAnimationPlayState = "paused";
	rocket.style.animationPlayState = "paused";

})();


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



function launchRocket(){
	var screenWidth = screen.width;
	var screenHeight = screen.height;

	clearInterval(this.cloudMoving);
	moveCloudsDown(screenHeight, 5);
	createStars(screenWidth,screenHeight,50);
	animateStars(screenHeight, 2);

}


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



