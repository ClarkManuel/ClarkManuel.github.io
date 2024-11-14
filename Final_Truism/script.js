// Array of video file paths
const videoFiles = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];

// Video positions for each video file
let videoPositions = [0, 0, 0]; // Array to store last playback time of each video

// Index of the current video being played
let currentVideoIndex = 0;

// Get references to HTML elements
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Function to load a video by index
function loadVideo(index) {
    // Update the source of the video player
    videoPlayer.src = videoFiles[index];

    // Set the playback position to the last remembered time for this video
    videoPlayer.currentTime = videoPositions[index];

    // Store the current video index
    currentVideoIndex = index;

    // Play the video
    videoPlayer.play();
}

// Event listener for switching video when text box is clicked
textBox.addEventListener("click", () => {
    // Remember the current playback time of the current video
    videoPositions[currentVideoIndex] = videoPlayer.currentTime;

    // Generate a random index for the next video
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * videoFiles.length);
    } while (nextIndex === currentVideoIndex); // Ensure new video is different from current one

    // Load the randomly selected new video
    loadVideo(nextIndex);
});

// Initial video load
loadVideo(currentVideoIndex);
