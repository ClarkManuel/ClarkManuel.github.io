// Select video, audio, text box, and progress bar elements
const videoPlayer = document.getElementById("video-player");
const audioPlayer = document.getElementById("audio-player");
const textBox = document.getElementById("text-box");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");

// Arrays for video, audio, and text content
const videos = ["videos/video1.mp4", "videos/video2.mp4"];
const audios = ["audio/audio1.mp3", "audio/audio2.mp3"];
const texts = ["Though they may look similar...", "These viewpoints are not the same.", "One is colder, giving this sense of loneliness. ", "The other, warmer. Giving a sense of relaxation.", "But hey! That's only one interpretation."];

// Indices to track current video, audio, and text
let videoIndex = 0;
let audioIndex = 0;
let textIndex = 0;

// Objects to store playback times for each video and audio
const videoPlaybackTimes = {};
const audioPlaybackTimes = {};

// Function to update the progress bar
function updateProgressBar() {
  const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

// Function to reset the progress bar
function resetProgressBar() {
  progressBar.style.width = "0%";
}

// Function to change video and audio
function changeMedia() {
  // Save the current video's playback time
  videoPlaybackTimes[videos[videoIndex]] = videoPlayer.currentTime;

  // Save the current audio's playback time
  audioPlaybackTimes[audios[audioIndex]] = audioPlayer.currentTime;

  // Update video index and switch to the new video
  videoIndex = (videoIndex + 1) % videos.length;
  videoPlayer.src = videos[videoIndex];

  // Resume video playback from the saved time or start from the beginning
  videoPlayer.currentTime = videoPlaybackTimes[videos[videoIndex]] || 0;
  videoPlayer.play();

  // Update audio index and switch to the new audio
  audioIndex = (audioIndex + 1) % audios.length;
  audioPlayer.src = audios[audioIndex];

  // Resume audio playback from the saved time or start from the beginning
  audioPlayer.currentTime = audioPlaybackTimes[audios[audioIndex]] || 0;
  audioPlayer.play();

  // Reset the progress bar
  resetProgressBar();
}

// Function to change the text content
function changeText() {
  textIndex = (textIndex + 1) % texts.length;
  textBox.textContent = texts[textIndex];
}

// Function to handle progress bar interaction
function scrub(e) {
  const scrubTime = (e.offsetX / progressContainer.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}

// Add event listener for clicks outside the text box
document.body.addEventListener("click", (event) => {
  if (!textBox.contains(event.target) && !progressContainer.contains(event.target)) {
    changeMedia(); // Change video and audio
  }
});

// Add event listener for clicks on the text box
textBox.addEventListener("click", (event) => {
  changeText(); // Change text
  event.stopPropagation(); // Prevent triggering body click event
});

// Update progress bar as video plays
videoPlayer.addEventListener("timeupdate", updateProgressBar);

// Reset progress bar when the video ends (for seamless looping)
videoPlayer.addEventListener("ended", resetProgressBar);

// Make the progress bar interactive
progressContainer.addEventListener("click", (event) => {
  scrub(event);
  event.stopPropagation(); // Prevent triggering body click event
});
