// Loading Animation 
let loader = document.getElementsByClassName('window')[0];
let html= document.getElementsByTagName('html')[0];
function unload(){
    loader.style.display='none';
}

// Menu Bar 
let menuBtn = document.getElementById('menu-btn');
let nav = document.getElementById('nav');
let list= document.getElementById('list');
let listItem = document.querySelectorAll('.list-item');
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
    list.classList.toggle('list-active');
    listItem.forEach(element => {
        element.classList.toggle('list-item-active');
    });
})

// Dark Mode 
let moon = document.getElementsByClassName('dark')[0];
let root = document.documentElement;
moon.addEventListener('click',()=>{
    moon.classList.toggle('fa-sun');
    moon.classList.toggle('sun');
    root.classList.toggle('dark-mode');
});

// ScrollBar 
let progress = document.getElementsByClassName('scrollThumb')[0];
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progress.style.height= progressHeight + '%';
};
