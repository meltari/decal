$(document).ready(function() {
// all your jQuery code goes in here!
$(".foodbutton").click(function(){
$("#food").toggle();
$('html, body').animate({
    scrollTop: $("#food").offset().top
}, 2000);
});





});
