$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

$(function () {
$(document).scroll(function () {
  var $nav = $(".navi");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});