// Get the video player and all required elements
const videoPlayer = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedInput = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// Add event listeners for the required elements
playButton.addEventListener('click', togglePlay);
videoPlayer.addEventListener('click', togglePlay);
videoPlayer.addEventListener('play', updatePlayButton);
videoPlayer.addEventListener('pause', updatePlayButton);
videoPlayer.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));

// Function to toggle play and pause
function togglePlay() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

// Function to update the play button icon
function updatePlayButton() {
  const icon = videoPlayer.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

// Function to update the progress bar
function updateProgress() {
  const progressPercent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressFilled.style.flexBasis = `${progressPercent}%`;
}

// Function to scrub the video when the progress bar is clicked
function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}

// Function to update the volume of the video
function updateVolume() {
  videoPlayer.volume = volumeInput.value;
}

// Function to update the playback speed of the video
function updatePlaybackSpeed() {
  videoPlayer.playbackRate = playbackSpeedInput.value;
}

// Function to skip the video forward or backward
function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  videoPlayer.currentTime += skipTime;
}

   