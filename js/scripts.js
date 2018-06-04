$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = "";
    var blanks = ["thing1"];
    blanks.forEach(function(blank) {
      userInput = $("input#" + blank).val();
      $("#groceries").append("<li>" + userInput + "</li>");
      console.log(userInput);
    });


    // $("#formOne").click(function() {
    //   $("ul#formOne").append("<li>")
    // }

    $("#groceries").show();

    event.preventDefault();
  });
});
