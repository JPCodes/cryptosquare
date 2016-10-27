var cryptoArray = [[],[]]; // Columns, Rows
var sentence="";
var counter;

var myCrypto = function(input) {
  debugger;
  sentence = input.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""); // Remove punct
  counter = 0;
  var columns = sentence.length;
  sentence = sentence.split("");
  columns = Math.floor(Math.sqrt(columns));
  var row = columns + 1;

  for (r = 0; r < row; r++) {
    for (c = 0; c < columns; c++) {
      cryptoArray[r][c] = sentence[counter];
      counter++;
    }

  };
  return cryptoArray;
};


$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    $("#output p").text(myCrypto(userInput));

  });

});
