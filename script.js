function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);


function goBack() {
  window.history.back()
}

 // Get the audio element by its ID
  var x = document.getElementById("myAudio");

  function playAudio() {
    // Optional: Reset the playback time to the beginning on each click
    // This allows the sound to restart even if it's already playing
    x.currentTime = 0;
    x.play(); // Play the sound
  }
