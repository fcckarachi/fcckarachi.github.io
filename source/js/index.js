let $ = require('../../node_modules/jquery/dist/jquery');
let hammer = require('../../node_modules/hammerjs');
let materialize = require('../../node_modules/materialize-css/dist/js/materialize');


$(document).ready(function () {
  $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });
  $('.parallax').parallax();
  $('.carousel').carousel({ indicators: true, padding: 50, shift: 80 });
  let setCopyRightYear = () => {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("copyright-year").innerHTML = year;
  }
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  setCopyRightYear();
});

