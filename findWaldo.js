function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found Waldo at " + i +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);








// function findWaldo(arr, found) {
//   arr.forEach(function(element){
//     if (element === "Waldo"){
//       found();
//     }
//   })
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);