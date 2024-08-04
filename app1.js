const rect = require("./3.rectangle_with_callbk.js");

function solveRectancgle(l, w) {
  console.log(`Solving for Rectangle: ${l}, ${w}`);
  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    } else {
      console.log(`Area of the Rectangle with dimensions: ${l}, ${w} is => ${rectangle.area()}`);
      console.log(`Perimeter of the Rectangle with dimensions: ${l}, ${w} is => ${rectangle.perimeter()}`);
    }
  });
  console.log(`After rect module for Dimensions: ${l} ${w}`);
}

solveRectancgle(1, 2);
solveRectancgle(1, 0);
solveRectancgle(0, 2);
solveRectancgle(0, 0);
solveRectancgle(1, -2);
solveRectancgle(-1, 2);
solveRectancgle(-1, -2);
solveRectancgle(5, 6);
