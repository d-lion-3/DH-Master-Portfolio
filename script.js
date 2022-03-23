//Icon colors when a tab is clicked + dropdown for settings

homeCurrent = document.getElementById('home');
//homePage = document.getElementById('homePage');

contactCurrent = document.getElementById('contact');
//contactPage = document.getElementById('contactPage');

resumeCurrent = document.getElementById('resume');
//resumePage = document.getElementById('resumePage');

personalCurrent = document.getElementById('personal');

settingsCurrent = document.getElementById('settings');
settingsDropdown = document.getElementById('dropdown');

musicCurrent = document.getElementById('music-note');
musicDropdown = document.getElementById('skipdown');



	
function homeNow(){
	
	homeCurrent.style.color = "var(--clrA)";
	contactCurrent.style.color = "#d35555";
	resumeCurrent.style.color = "#d35555";
	personalCurrent.style.color = "#d35555";
	settingsCurrent.style.color = "#d35555";
}

function contactNow(){
	//homePage.style.display = "none";
	//contactPage.style.display = "block";
	//resumePage.style.display = "none";
	
	homeCurrent.style.color = "var(--clr)";
	contactCurrent.style.color = "var(--clrA)";
	resumeCurrent.style.color = "var(--clr)";
	personalCurrent.style.color = "var(--clr)";
	settingsCurrent.style.color = "var(--clr)";
}

function resumeNow(){
	//homePage.style.display = "none";
	//contactPage.style.display = "block";
	//resumePage.style.display = "none";
	
	homeCurrent.style.color = "var(--clr)";
	contactCurrent.style.color = "var(--clr)";
	resumeCurrent.style.color = "var(--clrA)";
	personalCurrent.style.color = "var(--clr)";
	settingsCurrent.style.color = "var(--clr)";
}

function personalNow(){
	homeCurrent.style.color = "var(--clr)";
	contactCurrent.style.color = "var(--clr)";
	resumeCurrent.style.color = "var(--clr)";
	personalCurrent.style.color = "var(--clrA)";
	settingsCurrent.style.color = "var(--clr)";
}


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

const currentPage = 1;

function handleSweep(dist){
	window.scrollTo(0, dist);
}


window.addEventListener("scroll", (e) => {
	const scrolled = window.scrollY;
	if (scrolled > 100 && currentPage = 1){
		handleSweep(300);
		currentPage = 2;
		console.log(scrolled."you are on page 2")
	}if(scrolled < -100 && currentPage = 2){
		handleSweep(0);
		currentPage = 1;
		console.log(scrolled+"you are on page 1 again")
	}
});