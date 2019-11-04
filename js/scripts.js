$(document).ready(function() {
  $(".hide1").click(function() {
    $(".hide1").hide();
    $("#design-p").show();
    $("#design-p").toogle();
  });
  $("#design-p").click(function() {
    $("#design-p").hide();
    $(".hide1").show();
    $(".hide1").toogle();
  });
  $(".hide2").click(function() {
    $(".hide2").hide();
    $("#development-p").show();
    $("#development-p").toogle();
  });
  $("#development-p").click(function() {
    $("#development-p").hide();
    $(".hide2").show();
    $(".hide2").toogle();
  });
  $(".hide3").click(function() {
    $(".hide3").hide();
    $("#management-p").show();
    $("#management-p").toogle();
  });
  $("#management-p").click(function() {
    $("#management-p").hide();
    $(".hide3").show();
    $(".hide3").toogle();
  });
  $(".btnsend").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('name').value;
    alert("Hello there " + user + " your message has been received. Thank you.");
});
});
