// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelectorAll(".menu-items")

// Transform value
let value = 0
// trail index number
let trailValue = 0

document.querySelectorAll(".nav-btn").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// Function to slide forward
const slide = (condition) => {
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    value === 75 ? value = 0 : value += 25

}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
    value === 0 ? value = 75 : value -= 25

}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
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
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("top-Software")) {
        value = 0
    } else if (check.classList.contains("top-Wetware")) {
        value = 25
    } else if (check.classList.contains("top-Hardware")) {
        value = 50
    }  else {
        value = 75
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
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
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