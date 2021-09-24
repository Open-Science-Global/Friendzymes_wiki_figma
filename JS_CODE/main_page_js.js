// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelectorAll(".menu-items")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000


document.querySelectorAll(".nav-btn").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    //clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    //animate()
    // start interal for slides back 
    //start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    //trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 75 ? value = 0 : value += 25
    // update trailValue based on value
    //trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    //trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 75 : value -= 25
     // update trailValue based on value
    //trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    //trail[T].classList.add("active")
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
    // update trail based on value
    //trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    //animate()
    // start interval
    //start = setInterval(() => slide("increase"), interval)
}
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))


//**Side Menu */
/* function openNav() {
    document.getElementById("mySidenav").style.width = "77px";
  }
  
  /* Set the width of the side navigation to 0 */
/*   function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }  */

function open_close_nav(){
    if (document.querySelector(".sidenav").style.width === "0px"){
        document.querySelector(".sidenav").style.width = "77px"
    }
    else{
        document.querySelector(".sidenav").style.width = "0px"
    }
}


document.querySelector(".drop-btn").onclick = open_close_nav;