//Icon colors when a tab is clicked + dropdown for settings

homeCurrent = document.getElementById('home');
homePage = document.getElementById('homePage');

contactCurrent = document.getElementById('contact');
contactPage = document.getElementById('contactPage');

resumeCurrent = document.getElementById('resume');
resumePage = document.getElementById('resumePage');

personalCurrent = document.getElementById('personal');

settingsCurrent = document.getElementById('settings');
settingsDropdown = document.getElementById('dropdown');

musicCurrent = document.getElementById('music-note');
musicDropdown = document.getElementById('skipdown');




let dropCount = 1;
dropdown = document.getElementById("dropdown");


//UNUSED ...
function settingsNow(){
	homeCurrent.style.color = "var(--clr)";
	contactCurrent.style.color = "var(--clr)";
	resumeCurrent.style.color = "var(--clr)";
	personalCurrent.style.color = "var(--clr)";
	settingsCurrent.style.color = "var(--clrA)";

//Make dropdown appear and fade: if the number of clicks on settings is 0, don't show. if the number of clicks is greater than or equal to 1 and modulo(divided by) 2 = 1 (remainder) (meaning its an odd number), then show.
	const DFinCount = dropCount++;
	console.log(DFinCount)
	if (DFinCount == 0){
		dropdown.style.opacity="0";
		dropdown.style.transform= "translateY(-90px)";
	}
	if(DFinCount >= 1 && DFinCount%2 == 1){
		dropdown.style.opacity="1";
		dropdown.style.opacity="translateY(90px)"
	}
	else{
		dropdown.style.opacity="0";
		dropdown.style.opacity="translateY(90px)"
	}
	return
}
// ... UNUSED

function settingsIn(){
	
	homeCurrent.style.color = "var(--clr)";
	contactCurrent.style.color = "var(--clr)";
	resumeCurrent.style.color = "var(--clr)";
	personalCurrent.style.color = "var(--clr)";
	settingsCurrent.style.color = "var(--clrA)";

	dropdown.style.opacity = 1;
}

function fadeSettingsOut(){
	settingsCurrent.style.color = "var(--clr)";
	dropdown.style.opacity = 0;
}

//Click Head to Hide/Show the Intro "Meet Daniel...etc"

let headCount = 1;
intro = document.getElementById("intro");

function introduce(){
	const finCount = headCount++;
	
	
	if (finCount%2 == 1){
		intro.style.display="block";
		intro.style.opacity="1";
		
	}else{
		function fadeIntro(){
			into.style.opacity="0";
		}
		intro.style.display="none";
	}
	return
}

function skipIn(){
	musicCurrent.style.color = "var(--clrA)";
	musicDropdown.style.opacity = 1;
}

function fadeSkipOut(){
	musicDropdown.style.opacity = 0;
}

//Change/revert themes using color picker and buttons

//Accent (Secondary) Theme
function changeSecondaryTheme() {
  var colorvalue = document.getElementById("secondary-colorpicker").value;
  var r = document.querySelector(':root');
  r.style.setProperty('--clr', colorvalue);
}

function revertSecondaryTheme(){
	var defaultThemeClr = "#d35555";
	var r = document.querySelector(':root');
	r.style.setProperty('--clr', defaultThemeClr);
	
}

//Background Theme
function changePrimaryTheme() {
  var colorvalue = document.getElementById("primary-colorpicker").value;
  var r = document.querySelector(':root');
  r.style.setProperty('--clrB', colorvalue);
	console.log('primary theme changed')
}

function revertPrimaryTheme(){
	var defaultThemeClr = "#000";
	var r = document.querySelector(':root');
	r.style.setProperty('--clrB', defaultThemeClr);
	console.log('primary theme reverted')
	
}

//Active (Tertiary) Theme
function changeActiveTheme() {
  var colorvalue = document.getElementById("tertiary-colorpicker").value;
  var r = document.querySelector(':root');
  r.style.setProperty('--clrA', colorvalue);
	console.log('tertiary theme changed')
}

function revertActiveTheme(){
	var defaultThemeClr = "#189521";
	var r = document.querySelector(':root');
	r.style.setProperty('--clrA', defaultThemeClr);
	console.log('tertiary theme reverted')
	
}



const deixa = document.querySelector("#deixa");
const chain = document.querySelector("#chain");
const ultimate = document.querySelector("#ultimate");
const bamba = document.querySelector("#bamba");
const blue = document.querySelector("#blue");
const harlem = document.querySelector("#harlem");

var currentSong = deixa;

let songCount = 0;

document.getElementById('previousButton').style.display = "none";

function nextSong(){
currentSong.pause();
songCount++;

if (songCount === 0){currentSong = deixa; document.getElementById("previousButton").style.display = "none";}
if (songCount > 0){
document.getElementById("previousButton").style.display = "block";
}
if (songCount < 5){
document.getElementById("nextButton").style.display = "block";
}
if (songCount === 1){currentSong = chain;}
if (songCount === 2){currentSong = ultimate;}
if (songCount === 3){currentSong = bamba;}
if (songCount === 4){currentSong = blue;}
if (songCount === 5){currentSong = harlem; document.getElementById("nextButton").style.display = "none";}


console.log("Next Song: "+songCount+" - "+currentSong.id);
currentSong.play();
document.getElementById("playButton").innerHTML = `<ion-icon name="pause"></ion-icon>`;
}

function previousSong(){
currentSong.pause();
songCount--;

if (songCount === 0){currentSong = deixa; document.getElementById("previousButton").style.display = "none";}
if (songCount > 0){
document.getElementById("previousButton").style.display = "block";
}
if (songCount < 5){
document.getElementById("nextButton").style.display = "block";
}
if (songCount === 1){currentSong = chain;}
if (songCount === 2){currentSong = ultimate;}
if (songCount === 3){currentSong = bamba;}
if (songCount === 4){currentSong = blue;}
if (songCount === 5){currentSong = harlem;}

console.log("Previous Song: "+songCount+" - "+currentSong.id);
currentSong.play();
document.getElementById("playButton").innerHTML = `<ion-icon name="pause"></ion-icon>`;
}

function playSong(){ //play or pause

if (currentSong.duration > 0 && !currentSong.paused) {
currentSong.pause();
document.getElementById("playButton").innerHTML = `<ion-icon name="play"></ion-icon>`;
} else {
currentSong.play();
document.getElementById("playButton").innerHTML = `<ion-icon name="pause"></ion-icon>`;
}
console.log("Song: "+songCount+" - "+currentSong.id);
}


document.getElementById("playButton").addEventListener("click", playSong);

document.getElementById("nextButton").addEventListener("click", nextSong);
document.getElementById("previousButton").addEventListener("click", previousSong);

window.scrollTo(0, 0);
/*let currentPage = 1;
console.log(currentPage)


window.addEventListener('scroll', throttle(handleScroll, 1000));
  
function throttle(fn, wait) {
	var time = Date.now();
	return function() {
	  if ((time + wait - Date.now()) < 0) {
		fn();
		time = Date.now();
	  }
	}
  }
  
function handleScroll() {
	if (this.oldScroll > this.scrollY){
		currentPage--;
		console.log("we going up")
	}else{
		currentPage++;
		console.log("we going down")
	}
	this.oldScroll = this.scrollY;
	if (currentPage === 2){
		window.scrollTo(0, 400);
		//currentPage = 2;
		console.log(`you are on page 2`);
	}if(currentPage === 3){
		window.scrollTo(0, 800);
		//currentPage = 3;
		console.log(`you are on page 3`);
	}
}

window.onscroll = function() {
	// print "false" if direction is down and "true" if up
	console.log(this.oldScroll > this.scrollY);
	this.oldScroll = this.scrollY;
  }*/

window.addEventListener("scroll", () =>{
	scrolled = window.scrollY;
	console.log(scrolled)
	if (scrolled > 80){
		document.querySelector(".outline-head").style.opacity = '0.2';
	}else{
		document.querySelector(".outline-head").style.opacity = '1';

	}
});

var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}