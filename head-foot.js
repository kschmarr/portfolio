$(document).ready(function () {
  $('#nav_btn').click(function (e) {
    if ($('#nav').is(':hidden') == true) {
      $(this).toggleClass("active");
      $('#nav').removeClass("toggle");
    } else {
      $(this).removeClass("active");
      $('#nav').addClass("toggle");
    }
    e.preventDefault();
  });
});