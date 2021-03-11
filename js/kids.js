var modal12 = document.getElementById("myModal12");
var modal13 = document.getElementById("myModal13");
var modal14 = document.getElementById("myModal14");
var modal15 = document.getElementById("myModal15");
var modal16 = document.getElementById("myModal16");
var modal17 = document.getElementById("myModal17");

var btn12 = document.getElementById("mon");
var btn13 = document.getElementById("bar");
var btn14 = document.getElementById("step");
var btn15 = document.getElementById("max");
var btn16 = document.getElementById("game");
var btn17 = document.getElementById("ozzy");

var span12 = document.getElementsByClassName("close12")[0];
var span13 = document.getElementsByClassName("close13")[0];
var span14 = document.getElementsByClassName("close14")[0];
var span15 = document.getElementsByClassName("close15")[0];
var span16 = document.getElementsByClassName("close16")[0];
var span17 = document.getElementsByClassName("close17")[0];

btn12.onclick = function() {
  modal12.style.display = "block";
}
btn13.onclick = function() {
  modal13.style.display = "block";
}
btn14.onclick = function() {
  modal14.style.display = "block";
}
btn15.onclick = function() {
  modal15.style.display = "block";
}
btn16.onclick = function() {
  modal16.style.display = "block";
}
btn17.onclick = function() {
  modal17.style.display = "block";
}

span12.onclick = function() {
  modal12.style.display = "none";
}
span13.onclick = function() {
  modal13.style.display = "none";
}
span14.onclick = function() {
  modal14.style.display = "none";
}
span15.onclick = function() {
  modal15.style.display = "none";
}
span16.onclick = function() {
  modal16.style.display = "none";
}
span17.onclick = function() {
  modal17.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal13) {
    modal13.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal14) {
    modal14.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal15) {
    modal15.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal16) {
    modal16.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal17) {
    modal17.style.display = "none";
  }
}