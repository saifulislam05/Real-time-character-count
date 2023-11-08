const textArea = document.getElementById("textArea");
const currentChar = document.getElementById("currentChar");
const remainingChar = document.getElementById("remainingChar");
const limitAlert = document.getElementById("limitAlert");

textArea.addEventListener("input", updateCounts);

function updateCounts() {

  let charLength = textArea.value.length;
  let maxLength = textArea.getAttribute("maxLength");

  remainingChar.innerText = maxLength - charLength;
  currentChar.innerText = charLength;

  if (charLength==50) {
    limitAlert.classList.remove("hidden")
  }
  console.log(charLength);
}
