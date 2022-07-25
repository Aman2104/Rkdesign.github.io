let btn1= document.getElementById("menu");
let list= document.getElementsByClassName("navbar-links");
let nav = document.getElementById("nav1");
btn1.addEventListener('click', ()=>{
    for(var i =0; i<list.length; i++)
    list[i].classList.toggle("act");
    //  font-family: 'Edu TAS Beginner', cursive;
})
