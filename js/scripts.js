

$(document).ready(function() {
  var list = [];
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = "";
    var blanks = $("#itemInput").val().toUpperCase();
    list.push(blanks);

    $("input").val("");
    list.sort();

  });

  $("#display").click(function() {
    for (x=0;x<list.length; x++) {
      $("#finalList").append("<li>" + list[x] + "</li>");
    }
  });
});
