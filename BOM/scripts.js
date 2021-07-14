window.document.getElementById("demo1").innerHTML = "Inner Height is " + window.innerHeight;
window.document.getElementById("demo2").innerHTML = "Inner Width is " + window.innerWidth;
// window.document.getElementById("demo3").innerHTML = "Window.open() " + window.open();
// window.document.getElementById("demo4").innerHTML = "window.close() " + window.close();
//As scripts may close the window opened by them
window.document.getElementById("demo5").innerHTML = "window.resizeTo() " + window.resizeTo(400, 100);
window.document.getElementById("demo6").innerHTML = "window.moveTo() " + window.moveTo(4, 10);

document.getElementById("demo7").innerHTML = "screen.width " + screen.width;
document.getElementById("demo8").innerHTML = "screen.height " + screen.height;
document.getElementById("demo9").innerHTML = "screen.availWidth " + screen.availWidth;
document.getElementById("demo10").innerHTML = "screen.availHeight " + screen.availHeight;
document.getElementById("demo11").innerHTML = "screen.colorDepth " + screen.colorDepth;
document.getElementById("demo12").innerHTML = "screen.pixelDepth " + screen.pixelDepth;

window.document.getElementById("demo13").innerHTML = "location.href " + window.location.href;
document.getElementById("demo14").innerHTML = "location.hostname " + location.hostname;
document.getElementById("demo15").innerHTML = "location.pathname " + location.pathname;
document.getElementById("demo16").innerHTML = "location.protocol" + location.protocol;
document.getElementById("demo16").innerHTML = "location.port" + location.port;
// document.getElementById("demo17").innerHTML = "location.assign() " + location.assign("https://google.com");

function backBtn() {
    history.back();
}

function forwardBtn() {
    window.history.forward();
}
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);
// document.getElementById("demo18").innerHTML = "navigator.app " + document.navigator.appName;
// document.getElementById("demo19").innerHTML = "navigator.appCodeName " + navigator.appCodeName;
// document.getElementById("demo20").innerHTML = "navigator.app " + document.navigator.platform;
// document.getElementById("demo21").innerHTML = "navigator.app " + document.navigator.cookieEnabled;

let myVar1 = setInterval(myInterval, 1000);

function myInterval() {
    const mydate = new Date();
    document.getElementById("demo23").innerHTML = mydate.toLocaleTimeString();
}

let myVar2 = setTimeout(myTimeout, 10000);

function myTimeout() {
    document.getElementById("demo24").innerHTML = "I have been called after specified seconds";
}

// let x = window.alert("Hey are you sure you are accessing this site?");
// console.log(x);
// let y = window.confirm("How this site is doing?");
// console.log(y);
// let z = window.prompt("Enter a value");
// console.log(z);