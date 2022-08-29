$(document).ready(function() {

  // Special sub scrolling animation
  $(".special-sub-btn").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".special-sub").offset().top
    }, 2000);
  });

  // Movies scrolling animation
  $(".movies-btn").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".main").offset().top
    }, 2000)
  });

  // Scroll button animation
  $(".scroll-btn").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".navbar").offset().top
    }, 2000)
  });

  // Confirm animation first form
  $("#btn").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".navbar").offset().top
    }, 2000)
    $(".confirm-section").show(3000);
    $(".confirm-section").hide(6000);
    $("#input-one").val('');      
    $("#input-two").val('');      
    $("#input-three").val('');      
  });

  // Confirm animation second form
  $(".btn2").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".navbar").offset().top
    }, 2000)
    $(".confirm-section").show(3000);
    $(".confirm-section").hide(6000);
    $("#input-four").val('');      
    $("#input-five").val('');      
    $("#input-six").val('');      
  });


});
