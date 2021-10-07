//FIXED SUBMENU
$(window).scroll(function(){
  if ($(window).scrollTop() >= 400) {
      $('.subsite-container,.submenu-content').addClass('fixed');
      $('.index,.submenu-title').addClass('fixed-title');
  }
  else {
      $('.subsite-container,.submenu-content').removeClass('fixed');
      $('.index,.submenu-title').removeClass('fixed-title');
  }
});


//Open and Closing side navigation menu
function open_close_nav(){
  //When open or closed, change width and animate hamburguer menu
  if (document.querySelector(".sidenav").style.width === "0px"){
      //hamburger animation
      document.querySelector(".top").style.transform = ("rotate(39.55deg)")
      document.querySelector(".middle").style.opacity = "0"
      document.querySelector(".bottom").style.transform = ("rotate(-38deg)")
      document.querySelector(".hamburger-menu").style.position = "fixed"
      //side menu width
      document.querySelector(".sidenav").style.width = "77px"
      document.querySelector(".sidenav-content").style.display = "flex"
  }
  else{
      //hamburger animation
      document.querySelector(".top").style.transform = ("rotate(0deg)")
      document.querySelector(".middle").style.opacity = "100"
      document.querySelector(".bottom").style.transform = ("rotate(0deg)")
      document.querySelector(".hamburger-menu").style.position = "absolute"
      //side menu width
      document.querySelector(".sidenav").style.width = "0px"
      document.querySelector(".sidenav-content").style.display = "none"
  }
}

document.querySelector(".sidenav").style.width = "0px"
document.querySelector(".hamburger-menu").onclick = open_close_nav;
