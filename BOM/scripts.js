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