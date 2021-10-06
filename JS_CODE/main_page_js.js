// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".navigation-circles").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0

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
    move(value, trailValue)    
}



// function for increase(forward, next) configuration
const initiateINC = () => {
    value === 8640 ? value = 1440 : value += 1440

}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
    value === 0 ? value = 8640 : value -= 1440

}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}px)`  
    trailAnimation()  
    if(value == 1440){
        document.querySelector(".navigation-circles").style.display = "flex"
        document.querySelector(".prev").style.display = "none"
        document.querySelector(".next").style.display = "block"
        document.querySelector(".navigation-circles").style.left = "848px";

    }else{
        document.querySelector(".prev").style.display = "block"
        document.querySelector(".navigation-circles").style.left = "583px";

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
        value = 1440
    } else if (check.classList.contains("circle2")) {
        value = 2880
    } else if (check.classList.contains("circle3")) {
        value = 4320
    }  else if (check.classList.contains("circle4")) {
        value = 5760
    }  else if (check.classList.contains("circle5")) {
        value = 7200
    }  else{
        value = 8640
    }
    move(value, trailValue)

}
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

//Open and Closing side navigation menu
function open_close_nav(){
    //When open or closed, change width and animate hamburguer menu
    if (document.querySelector(".sidenav").style.width === "0px"){
        //hamburger animation
        document.querySelector(".top").style.transform = ("rotate(39.55deg)")
        document.querySelector(".middle").style.opacity = "0"
        document.querySelector(".bottom").style.transform = ("rotate(-38deg)")
        //side menu width
        document.querySelector(".sidenav").style.width = "77px"
        document.querySelector(".sidenav-content").style.display = "flex"
    }
    else{
        //hamburger animation
        document.querySelector(".top").style.transform = ("rotate(0deg)")
        document.querySelector(".middle").style.opacity = "100"
        document.querySelector(".bottom").style.transform = ("rotate(0deg)")
        //side menu width
        document.querySelector(".sidenav").style.width = "0px"
        document.querySelector(".sidenav-content").style.display = "none"
    }
}

document.querySelector(".sidenav").style.width = "0px"
document.querySelector(".hamburger-menu").onclick = open_close_nav;
document.querySelector(".join-btn").onclick = function(){slide("increase")}


function trailAnimation(){
    trail.forEach(restart => {restart.style.backgroundColor = "#EBEBEB"})
    if (value === 1440){
        trail[0].style.backgroundColor = "#F56529"
    }else if (value === 2*1440){
        trail[1].style.backgroundColor = "#FAE340"
    }else if (value === 3*1440){
        trail[2].style.backgroundColor = "#00F9FF"
    }else if (value === 4*1440){
        trail[3].style.backgroundColor = "#232D95" 
    }else if (value === 5*1440){
        trail[4].style.backgroundColor = "#C4C4C4"
    }else{
        trail[5].style.backgroundColor = "#000000"
    }

}