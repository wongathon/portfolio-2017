$(document).ready(function(){
  $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  $('.nav a').on('click', function(){
    if ($(window).width() < 767) {
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click() //bootstrap 3.x by Richard
    }
  });


});

//