var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var textarea = document.querySelector("textarea");
var body = document.getElementById("display");
var button = document.querySelector(".copybtn");
var toRight = document.getElementById("toRight");
var toBottom = document.getElementById("toBottom");


function copyToClipboard() {
	textarea.select();
	document.execCommand('copy');
}

function createGradient() {
	if(toRight.checked) {
		body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	}
	else if(toBottom.checked) {
		body.style.background = "linear-gradient(" + color1.value + "," + color2.value + ")";
	}

	textarea.textContent = "background: " + body.style.background + ";";
}

window.addEventListener("DOMContentLoaded", function () {
	createGradient();
})

toBottom.addEventListener("change", createGradient);
toRight.addEventListener("change", createGradient);
color1.addEventListener("input", createGradient);
color2.addEventListener("input", createGradient);
button.addEventListener("click", copyToClipboard);