var video = document.querySelector("#player1");
var volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
		console.log("Start of Video");
	}
	console.log(video.duration)
	console.log("Current Viewing Location" + video.currentTime);
	video.play();
});


// Mute
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmute"
	}
	else{
		this.innerHTML = "Mute"
		video.muted = false
	}
	console.log(video.muted)
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = (this.value/100);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});

// Original
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
});