
window.onload = function(){
    SetEvetnListener();
	console.log("success to open");
}

function SetEvetnListener(){
    var btn = document.getElementById("console");
	btn.addEventListener("click", outputConsoleLog );
}

function outputConsoleLog() {
    console.log("outputConsoleLog");
}