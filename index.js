let menubar=document.querySelector("#menubar");
let navlist=document.querySelector(".navlist")
menubar.onclick=()=>{
    navlist.classList.toggle("active")
}

window.onscroll=()=>{
    navlist.classList.remove("active")
    if(window.scrollY>60)
    {
        document.querySelector("#scroll-top").classList.add("active")
    }
    else{
        document.querySelector("#scroll-top").classList.remove("active");

    }
}
function loader(params) {
    document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(params) {
    setInterval(loader,3000);
}
window.onload=fadeOut();