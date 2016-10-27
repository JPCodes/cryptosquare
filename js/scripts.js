var cryptoArray = ""; // Columns, Rows
var f = new Array();
var sentence="";
var counter;
var counter2;

var myCrypto = function(input) {
  cryptoArray="";
  counter2=0;
  sentence = input.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""); // Remove punct
  counter = 0;
  var columns = sentence.length;
  sentence = sentence.split("");
  columns = Math.floor(Math.sqrt(columns));
  var row = columns + 1;

  for (r = 0; r < row; r++) {
    f[r]=new Array();
    for (c = 0; c < columns; c++) {
      f[r][c] = sentence[counter];
      counter++;
    }
  };
  for (c = 0; c < columns; c++) {
    for (r = 0; r < row; r++) {
      if (f[r][c]!==undefined ){
      cryptoArray+= f[r][c];
      counter2++;
      }
      if(counter2 % 5 === 0){
        cryptoArray+=" ";

      }

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
