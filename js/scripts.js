function validate(){
  if (name == "" || email=="") {
    alert(
      "Please fill in the required details correctly")
    }
$(document).ready(function() {
  $(".hide1").click(function() {
    $(".hide1").hide();
    $("#design-p").show();
  });
  $("#design-p").click(function() {
    $("#design-p").hide();
    $(".hide1").show();
  });
  $(".hide2").click(function() {
    $(".hide2").hide();
    $("#development-p").show();
  });
  $("#development-p").click(function() {
    $("#development-p").hide();
    $(".hide2").show();
  });
  $(".hide3").click(function() {
    $(".hide3").hide();
    $("#management-p").show();
  });
  $("#management-p").click(function() {
    $("#management-p").hide();
    $(".hide3").show();
  });
});}