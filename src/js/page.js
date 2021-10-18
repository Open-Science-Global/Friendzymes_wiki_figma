// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".navigation-circles").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0

//viewport dimensions
let width = 14.2857

document.querySelectorAll(".nav-btn").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

//document.querySelector(".join-btn").addEventListener("click",slide("increase"))


// Function to slide forward
const slide = (condition) => {
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value.toFixed(4))    
}



// function for increase(forward, next) configuration
const initiateINC = () => {
    value.toFixed(4) == 6*width ? value = 0 : value += width

}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
    value.toFixed(4) == 0 ? value = 6*width : value -= width

}

// function to transform slide 
const move = (S) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`  
    trailAnimation()
    if(value == 0){
        document.querySelector(".navigation-circles").style.display = "none"
        document.querySelector(".prev").style.display = "none"
        document.querySelector(".next").style.display = "none"
    }else if(value.toFixed(4) == width){
        document.querySelector(".navigation-circles").style.display = "flex"
        document.querySelector(".prev").style.display = "none"
        document.querySelector(".next").style.display = "block"
        document.querySelector(".navigation-circles").style.left = "63%";

    }else{
        document.querySelector(".prev").style.display = "block"
        document.querySelector(".navigation-circles").style.left = "76%";

    } 
}

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    //clearInterval(start)
    // remove active class from all trails
    //trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    // Update slide value based on the selected trail
    if(check.classList.contains("circle1")) {
        value = width
    } else if (check.classList.contains("circle2")) {
        value = 2*width
    } else if (check.classList.contains("circle3")) {
        value = 3*width
    }  else if (check.classList.contains("circle4")) {
        value = 4*width
    }  else if (check.classList.contains("circle5")) {
        value = 5*width
    }  else{
        value = 6*width
    }
    move(value)


}
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

//Open and Closing side navigation menu
function open_close_nav(){
    //When open or closed, change width and animate hamburguer menu
    if (document.querySelector(".sidenav").style.width === "0px"){
        //hamburger animation
        document.querySelector(".top").style.transform = ("rotate(39.55deg)")
        document.querySelector(".middle").style.opacity = "0"
        document.querySelector(".bottom").style.transform = ("rotate(-39.55deg)")
        //side menu width
        document.querySelector(".sidenav").style.width = "5.9vw"
        document.querySelector(".sidenav-content").style.display = "flex"
    }
    else{
        //hamburger animation
        document.querySelector(".top").style.transform = ("rotate(0deg)")
        document.querySelector(".middle").style.opacity = "100"
        document.querySelector(".bottom").style.transform = ("rotate(0deg)")
        //side menu width
        document.querySelector(".sidenav").style.width = "0"
        document.querySelector(".sidenav-content").style.display = "none"
    }
}

document.querySelector(".sidenav").style.width = "0px"
document.querySelector(".hamburger-menu").onclick = open_close_nav;
document.querySelector(".join-btn").onclick = function(){slide("increase")}



function trailAnimation(){
    trail.forEach(restart => {restart.style.backgroundColor = "#EBEBEB"})
    if (value.toFixed(4) == width){
        trail[0].style.backgroundColor = "#F56529"
    }else if (value.toFixed(4) == 2*width){
        trail[1].style.backgroundColor = "#FAE340"
    }else if (value.toFixed(4) == 3*width){
        trail[2].style.backgroundColor = "#00F9FF"
    }else if (value.toFixed(4) == 4*width){
        trail[3].style.backgroundColor = "#232D95" 
    }else if (value.toFixed(4) == 5*width){
        trail[4].style.backgroundColor = "#C4C4C4"
    }else{
        trail[5].style.backgroundColor = "#000000"
    }

}