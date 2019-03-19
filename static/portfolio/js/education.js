var planetsList= ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"]

//Create stars in the background of the page
function createStars(screenWidth, screenHeight, numStars, orbitContainerWidth, orbitContainerHeight){
	var space = document.getElementById("space");

	for(var i=0; i<numStars;i++){
		var star = document.createElement("div");
		star.className = "star";
		//Make stars on entire screen unless there the orbitContainer is bigger than screenwidth
		if(screenHeight > orbitContainerHeight){
			var top = Math.floor(Math.random() *  screenHeight+1);
			console.log("Screen height bigger " + screenHeight);
		}
		else{
			var top = Math.floor(Math.random() * orbitContainerHeight+1);
					}
		if(screenWidth > orbitContainerWidth){
			var left = Math.floor(Math.random() * screenWidth+1);
			console.log("Screen width bigger " + screenWidth);

		}
		else{
			var left = Math.floor(Math.random() * orbitContainerWidth+1);
		}
		
		star.style.top = top + "px";
		star.style.left = left + "px";
		star.style.zIndex = -1;
		star.style.animationDelay = Math.floor(Math.random() * 10) +"s";
		space.appendChild(star);

	}
	
}

// make asteroids in asteroid belt
function createAsteroids(){
	var orbitContainer = document.getElementById("orbit-container");
	var numAsteroids = 75;
	var containerSize = 800;
	var biggestOrbit = 275;
	var smallestOrbit = 175;
	var minDuration = 20;
	var maxDuration = 55;
	


	for(var i=0; i<numAsteroids; i++){
		var asteroidOrbit = document.createElement("div");
		asteroidOrbit.className = "asteroidOrbit";

		var asteroid = document.createElement("div");
		asteroid.className = "asteroid";

		asteroidOrbitSize = Math.floor(Math.random() * (biggestOrbit-smallestOrbit)) + smallestOrbit;
		asteroidOrbit.style.height = asteroidOrbitSize + "px";
		asteroidOrbit.style.width = asteroidOrbitSize + "px";

		var angle = Math.random()*Math.PI*2;

		x = Math.cos(angle)*asteroidOrbitSize;
		y = Math.sin(angle)*asteroidOrbitSize;

		// console.log(i + ". Angle: " + angle + " x: " + x + " y: " + y);

		
		// put asteroid on side of square 
		if(i%3==0){
			asteroid.style.top = Math.floor((asteroidOrbitSize/2)) + "px";
		}
		else if(i%4==0){
			asteroid.style.top = Math.floor((asteroidOrbitSize)) + "px";
			asteroid.style.left = Math.floor((asteroidOrbitSize/2)) + "px";
		}
		else if(i%2==0){
			asteroid.style.left = Math.floor((asteroidOrbitSize)) + "px";
			asteroid.style.top = Math.floor((asteroidOrbitSize/2)) + "px";
		}
		else{
			asteroid.style.left = Math.floor((asteroidOrbitSize/2)) + "px";
		}
		

		asteroidOrbit.style.top = Math.floor((containerSize/2)  - (asteroidOrbitSize/2)) + "px";
		asteroidOrbit.style.left = Math.floor((containerSize/2) - (asteroidOrbitSize/2)) + "px";

		asteroidOrbit.appendChild(asteroid);

		// TODO: put asteroid at random point in orbit


		// This does not seem to want to work, randomly rotate asteroid to different part of orbit
		// deg = Math.floor(Math.random() * 360);

		// asteroidOrbit.style.webkitTransform = "rotate(" + deg + "deg)";
		// asteroidOrbit.style.mozTransform = "rotate(" + deg + "deg)";
		// asteroidOrbit.style.transform = "rotate(" + deg + "deg)";

		duration = Math.floor(Math.random() * (maxDuration - minDuration))+ minDuration;
		asteroidOrbit.style.WebkitAnimationDuration = duration +"s";
		asteroidOrbit.style.animateDuration = duration +"s";

		
		
		orbitContainer.appendChild(asteroidOrbit);

	}
}


//starting with mercury - color of planets
var planetColors = ["#ffffff", "#ce7f00", "#027edd", "#d6bc68",
 "#f4b042", "#f9ce89", "#2ec4f2", "#20a3cc", "#ffffff"]; 


var screenWidth = screen.width;
var screenHeight = screen.height;
var orbitContainerWidth = 800;
var orbitContainerHeight = 800;
var numStars = 125;
createStars(screenWidth,screenHeight,numStars, orbitContainerWidth, orbitContainerHeight);
createAsteroids();




// Get all of the orbits
var orbits = document.getElementsByClassName("orbit");
// add displayModal function to each orbit element
for (var i = 0; i < orbits.length; i++) {
    orbits[i].addEventListener('click', displayModal, false);
    // console.log(i + ". added");
}
// displayModal makes modal visible when orbit is clicked on
function displayModal() {
	var modals = document.getElementsByClassName("skillModal");
	for (var i = 0; i < modals.length; i++) {
   		modals[i].style.display = "none";
	}

    var idName = this.id;
    skillModal = document.querySelector("#" + idName+".skillModal");
    console.log(idName+".skillModal");
    skillModal.style.display = "block";

    
};


// Get all of the close buttons on page
var closeBtns = document.getElementsByClassName("close");
// add closeModal function to all of the close buttons
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', closeModal, false);
}
// closeModal sets modal visibility to none
function closeModal() {
    var idName = this.parentNode.parentNode.id;
    skillModal = document.querySelector("#" +idName+".skillModal");
    skillModal.style.display = "none";
    
};




// createPlanets(orbitContainerWidth,orbitContainerHeight, planetColors);