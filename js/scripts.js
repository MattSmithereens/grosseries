

$(document).ready(function() {
  var list = [];
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = "";
    var blanks = $("#itemInput").val().toUpperCase();
    list.push(blanks);

    console.log(list);

    // blanks.forEach(function(blank) {
    //   userInput = $("input#" + blank).val();
    //   list.push(userInput);
    //   // console.log(list);
    // });
    //
    $("input").val("");
    // event.preventDefault();
  });

  $("#display").click(function() {
    for (x=0;x<list.length; x++) {
      $("#finalList").append("<li>" + list[x] + "</li>");
    }
  });

  // $("#formOne").submit(function() {
  //   var cloneList = list.slice();
  //   var listItems = cloneList.toString();
  //   var listUpper = listItems.toUpperCase();
  //   console.log(listUpper);
  //
  //   var listSorted = listUpper.sort();
  //   alert(listSorted);
  //
  //
  //
  // });

});



    // $("#grocout").show();
