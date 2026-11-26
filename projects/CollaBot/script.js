"use strict";
const copyButton = document.getElementById("copy-citation");
const citation = document.getElementById("bibtex");
const copyStatus = document.getElementById("copy-status");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyStatus.textContent = "BibTeX copied to clipboard.";
  } catch (_) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Citation selected. Press Ctrl+C (or Command+C) to copy.";
  }
});
// Pause other demonstrations when the visitor starts a video.
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("play", () => {
    document.querySelectorAll("video").forEach(other => {
      if (other !== video) other.pause();
    });
  });
});
