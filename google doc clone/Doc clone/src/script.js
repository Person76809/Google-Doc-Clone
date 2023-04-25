document.getElementById("bold-button").addEventListener("click", function() {
  document.execCommand("bold", false, null);
});

document.getElementById("italic-button").addEventListener("click", function() {
  document.execCommand("italic", false, null);
});

document.getElementById("underline-button").addEventListener("click", function() {
  document.execCommand("underline", false, null);
});

document.getElementById("font-size-select").addEventListener("change", function(event) {
  document.execCommand("fontSize", false, event.target.value);
});

document.getElementById("download-pdf-button").addEventListener("click", function() {
  // Code for downloading the editor's content as a PDF file
  // ...
});

document.getElementById("download-tex-button").addEventListener("click", function() {
  // Code for downloading the editor's content as a TeX file
  // ...
});
