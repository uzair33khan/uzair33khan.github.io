
var x = document.getElementById("myMusic");
var y = document.getElementById("myMusic1");
var z = document.getElementById("myMusic2");

function setHalfVolume() {
  x.volume = 0.2;
  y.volume = 0.2;
  z.volume = 0.2;
  alert("The volume is 15% which is Low !!");
}

function setFullVolume() {
  x.volume = 1.0;
  y.volume = 1.0;
  z.volume = 1.0;
  alert("The volume is 100% which is Full Volume !!");
}
