var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");

var btn7 = document.getElementById("abom");
var btn8 = document.getElementById("beat");
var btn9 = document.getElementById("raya");
var btn10 = document.getElementById("baby");
var btn11 = document.getElementById("will");

var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];
var span10 = document.getElementsByClassName("close10")[0];
var span11 = document.getElementsByClassName("close11")[0];

btn7.onclick = function() {
  modal7.style.display = "block";
}
btn8.onclick = function() {
  modal8.style.display = "block";
}
btn9.onclick = function() {
  modal9.style.display = "block";
}
btn10.onclick = function() {
  modal10.style.display = "block";
}
btn11.onclick = function() {
  modal11.style.display = "block";
}

span7.onclick = function() {
  modal7.style.display = "none";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
span9.onclick = function() {
  modal9.style.display = "none";
}
span10.onclick = function() {
  modal10.style.display = "none";
}
span11.onclick = function() {
  modal11.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}