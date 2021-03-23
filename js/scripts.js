$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    // $('#walrus-showing').fadeIn('slow');
    $("#walrus-hidden").toggle();
    // $('#walrus-hidden').fadeIn('slow');
    // See top two answers here: https://stackoverflow.com/questions/2625887/jquery-toggle-and-fade-in-one-function
  });
});