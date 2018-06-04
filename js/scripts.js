//  var list = []
//
// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var userInput = "";
//     var blanks = ["input#thing1"];
//     blanks.forEach(function(blank) {
//       userInput = $("input#" + blank).val();
//       $("#grocout").append.list[""]
//       console.log(userInput);
//     });
//
//
//
//     $("#grocout").show();
//     $("#grocin").hide();
//     event.preventDefault();
//   });
// });
var list = [];

$(document).ready(function() {
  $("#formOne").submit(function() {
    var userInput = "";
    var blanks = ["itemInput"];

    blanks.forEach(function(blank) {
      userInput = $("input#" + blank).val();
      list.push(userInput);
      console.log(list);
    });

    $("input").val("");
    event.preventDefault();
  });
});

/* seperate output code

    $("#grocout").show();

*/
