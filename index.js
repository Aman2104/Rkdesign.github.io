let btn1 = document.getElementById("menu");
let hello = document.getElementsByClassName("navbar-links");
let nav = document.getElementById("nav1");
let div = document.createElement("div");
btn1.addEventListener("click", () => {
  for (var i = 0; i < hello.length; i++) {
    hello[i].classList.toggle("act");
    if (hello[i].classList.contains("act")) {
      hello[i].classList.remove("reverse");
    } else {
      hello[i].classList.add("reverse");
    }
  }
});

var i = 0;
var j = 0;
var LogoName = "RK DESIGNS";
var tagName = "If you can dream it, we can build it!";
var speed = 200;
typeHead();
function typeHead() {
  if (i < LogoName.length) {
    document.getElementById("LogoName").innerHTML += LogoName.charAt(i);
    i++;
    setTimeout(typeHead, speed);
  }
}

// Start coding

let Planning = document.getElementById("Planning");
let Kitchen = document.getElementById("Kitchen");
let Elevation = document.getElementById("Elevation");
let Electrical = document.getElementById("Electrical");
let Interior = document.getElementById("Interior");
let Door = document.getElementById("Door");
let Landscape = document.getElementById("Landscape");

Planning.addEventListener("click", () => {
  setTimeout( function() {
    document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
    document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Planning</h2>
        </div>
        <div class="DispalyingImage">
            <img src="img/Planning/Planning 2.jpg" alt="" class="DisImg">
            <img src="img/Planning/Planning 3.jpg" alt="" class="DisImg">
            <img src="img/Planning/Planning 5.jpg" alt="" class="DisImg">
            <img src="img/Planning/Planning 6.jpg" alt="" class="DisImg">
            <!-- <img src="img/Planning/Planning 7.jpg" alt="" class="DisImg"> -->
            <img src="img/Planning/Planning 8.jpg" alt="" class="DisImg">
            <!-- <img src="img/Planning/Planning 1.jpg" alt="" class="DisImg"> -->
            <img src="img/Planning/Planning 4.jpg" alt="" class="DisImg">
            <img src="img/Planning/Planning 9.jpg" alt="" class="DisImg">
            <img src="img/Planning/Planning 10.jpg" alt="" class="DisImg">
        </div>`;
        
  }, 1000);
  
});
Kitchen.addEventListener("click", () => {
  setTimeout( function() {
  document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Modular Kitchen</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/Kitchen/kitchen 2.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 3.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 6.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 7.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 9.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 5.jpg" alt="" class="DisImg">
        </div>`;
       }, 1000);

});
Elevation.addEventListener("click", () => {
setTimeout( function() {
  document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Elevation</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/Elevation/1.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/2.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/3.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/4.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/5.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/6.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/7.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/8.jpeg" alt="" class="DisImg">
          <img src="img/Elevation/9.jpeg" alt="" class="DisImg">
        </div>`;
        }, 1000);   
});
Electrical.addEventListener("click", () => {
  setTimeout( function() {
    document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Electrical Drawing</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/Electrical/Electrical 1.jpg" alt="" class="DisImg">
          <img src="img/Electrical/Electrical 2.jpg" alt="" class="DisImg">
          <img src="img/Electrical/Electrical 3.jpg" alt="" class="DisImg">
        </div>`;   }, 1000);
});
Interior.addEventListener("click", () => {
  setTimeout( function() {
    document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Interior Design</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/Kitchen/kitchen 2.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 3.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 6.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 7.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 9.jpg" alt="" class="DisImg">
          <img src="img/Kitchen/kitchen 5.jpg" alt="" class="DisImg">
        </div>`;   }, 1000);
});
Door.addEventListener("click", () => {
  setTimeout( function() {
    document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Door Window Design</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/Door Window/Door Window 1.jpg" alt="" class="DisImg">
          <img src="img/Door Window/Door Window 2.jpg" alt="" class="DisImg">
          <img src="img/Door Window/Door Window 3.jpg" alt="" class="DisImg">
        </div>`;   }, 1000);
});
Landscape.addEventListener("click", () => {
  setTimeout( function() {
    document.getElementById("displayImage").scrollIntoView({behavior: 'smooth'});
  document.getElementById("displayImage").innerHTML = `<div class="about">
            <h2 id="Content">Landscape</h2>
        </div>
        <div class="DispalyingImage">
          <img src="img/LANDSCAPE.jpg" alt="" class="DisImg">
        </div>`;   }, 1000);
});
