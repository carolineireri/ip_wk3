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
  $("#contacts").submit(function(event) {
    event.preventDefault();
    var blanks = ["name", "mail", "message"];
    var input = [];
    blanks.forEach(function(blank) {
      input.push($("#" + blank).val());
    });
    alert(
      "Hello!.Thank You " +
        input[0] +
        " for reaching out to us. Your message has been received."
    );
    $("#contact")[0].reset();
  });
});
