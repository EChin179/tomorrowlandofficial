$(document).ready(function() {

  // hamburger menu toggle

  $('.nav-toggle').click(function() {
    $('.nav').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
  })

  $('.nav-link').click(function(){
    $('.nav').removeClass('is-open');
    $('.hamburger').removeClass('is-open');
  })

})
