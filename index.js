let btn1 = document.getElementById("menu");
let hello = document.getElementsByClassName("navbar-links");
let nav = document.getElementById("nav1");
let div = document.createElement("div");
btn1.addEventListener('click', () => {
    for (var i = 0; i < hello.length; i++) {
        hello[i].classList.toggle("act");
        if(hello[i].classList.contains("act")){
            hello[i].classList.remove("reverse");
        }
        else{
            hello[i].classList.add("reverse");
        }
    }
    //  font-family: 'Edu TAS Beginner', cursive;
})
// let img = document.getElementsByClassName("img");
// var j =0;
// for(i=0; i<img.length; i++){
//     img[i].addEventListener("click", function(index) {
//         this.classList.add("preview");
//         preview.appendchild("div");
//         div.innerHTML=`<i class="fa fa-close" style="font-size:36px"></i>`
//         div.style("position", "relative");
//         div.style("top", "10vh");
//         j=index;
//     }.bind(img[i], i))
// }


var i = 0;
var j = 0;
var LogoName = 'Welcome To RK DESIGNS';
var tagName = 'Create a space that reflects who you are';
var speed = 200;
typeHead()
function typeHead() {
  if (i < LogoName.length) {
    document.getElementById("LogoName").innerHTML += LogoName.charAt(i);
    i++;
    setTimeout(typeHead, speed);
  }
}
typeTag()
function typeTag() {
  if (j< tagName.length) {
    document.getElementById("tagName").innerHTML += tagName.charAt(j);
    j++;
    setTimeout(typeTag, 100);
  }
}