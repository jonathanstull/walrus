$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
})


// coding for fades:
    // $('#walrus-showing').fadeIn('slow');
    // $('#walrus-hidden').fadeIn('slow');
    // See top two answers here: https://stackoverflow.com/questions/2625887/jquery-toggle-and-fade-in-one-function