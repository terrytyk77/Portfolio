//Get the button:
mybutton = document.getElementById("goToTopButton");

// When the user scrolls down the scrollTopThreshHold from the top of the document, show the button

window.onscroll = function() {
    scrollFunction()
};

const scrollTopThreshHold = 200

function scrollFunction() {
  if (document.body.scrollTop > scrollTopThreshHold || document.documentElement.scrollTop > scrollTopThreshHold) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}