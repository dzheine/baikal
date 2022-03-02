console.log('hello')
var myNav = document.getElementById("navbar");
window.onscroll = function() {
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};