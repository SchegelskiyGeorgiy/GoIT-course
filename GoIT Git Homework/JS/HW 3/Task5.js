var diam = +prompt('Enter a positive digit - size of the board');
var cellBlank = ' ',
   cellFilled = '#';


for (var lineCounter = 1; lineCounter <= diam; lineCounter++) {
   if (lineCounter % 2) {
      for (var chessCell = 1, chessLine = ''; chessCell <= diam; chessCell++) {
         if (chessCell % 2) {
            chessLine += cellFilled;
         } else {
            chessLine += cellBlank;
         }
      }
   } else {
      for (var chessCell = 1, chessLine = ''; chessCell <= diam; chessCell++) {
         if (chessCell % 2) {
            chessLine += cellBlank;
         } else {
            chessLine += cellFilled;
         }
      }
   }
   console.log(chessLine);
}