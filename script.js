const mediaContainer = document.getElementById("media-container");
const video = document.getElementById("video");
const audio = document.getElementById("audio");

mediaContainer.addEventListener("mouseenter", () => {
  mediaContainer.classList.add("hover-active");
  video.play().catch((error) => console.error("Error playing video:", error));
  audio.play().catch((error) => console.error("Error playing audio:", error));
  audio.volume = 1.0; // Ensure audio volume is set to maximum
});

mediaContainer.addEventListener("mouseleave", () => {
  mediaContainer.classList.remove("hover-active");
  video.pause();
  video.currentTime = 0;
  audio.pause();
  audio.currentTime = 0;
});

function copyText() {
    const textArea = document.getElementById('code-block');
    const copyButton = document.getElementById('copyButton');
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            alert('Details copied to clipboard!\n\nIf you are hr consider mailing');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}
