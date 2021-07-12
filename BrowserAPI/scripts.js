function myFunc() {
	const obj = document.getElementById("inp1");
	if (!obj.checkValidity()) {
		document.getElementById("demo").innerHTML = obj.validationMessage;
	} else {
		document.getElementById("demo").innerHTML = "Input okay!"
	}
}

function myFunc1() {
	const obj = document.getElementById("inp1");
	text = "Input OK!"
	if (obj.validity.rangeUnderflow) {
		text = "Value is smaller than 100";
		document.getElementById("demo").innerHTML = text;
	} else if (obj.validity.rangeOverflow) {
		text = "Value is greater than 600!";
		document.getElementById("demo").innerHTML = text;
	} else {
		document.getElementById("demo").innerHTML = text;
	}
}

function bakcFunc() {
	window.history.back();
	console.log("Back button clicked!");
}

function forwardFunc() {
	window.history.forward();
	console.log("forward button clicked!");
}

function goBackFunc() {
	window.history.go(-3);
	console.log("Go Back button clicked!");
}

function lengthFunc() {
	console.log(window.history.length);
}

function localFunc() {
	localStorage.setItem("name", "Anupam");
	localStorage.getItem("name");
	console.log("Data is stored in local storage");
}

function sessionFunc() {
	sessionStorage.setItem("age", 22);
	sessionStorage.getItem("age");
	console.log("Data is stored in session storage");
}

let w;

function startWorker() {
	if (typeof (w) == "undefined") {
		w = new Worker("demo_worker.js");
	}
	w.onmessage = function (event) {
		document.getElementById("res").innerHTML = event.data;
	};
}

function stopWorker() {
	w.terminate();
	w = undefined;
}

//This web worker example didn't worked as Chrome and edge didn't allowed the web worker to load the resource from local


let x = document.getElementById("demo");
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	x.innerHTML = "Geoloaction API is not supported";
}

function showPosition(position) {
	x.innerHTML = position.coords.latitude, position.coords.longitude;
}