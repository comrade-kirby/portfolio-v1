$(document).ready(function () {
  $('.parallax').parallax()

  $('h1 span').click(function () {
    // let position = $(this).position()
    // let clone = $(this).clone()
    // $(this).addClass('invisible-letter')
    // if ($(this).prev().length !== 0) {
    //   $(this).prev().after(clone)
    // } else {
    //   $(this).next().before(clone)
    // }
    // clone.addClass('fixed-letter')
    // clone.css(position)
    $('html, body').animate({
      scrollTop: $(".about").offset().top
    }, 1000);
  })
})
