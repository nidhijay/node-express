// app1.mjs

import { Rectangle } from "./4.rectangle_with_callback_named_Export.mjs";

function solveRectangle(l, w) {
  console.log(`From solveRectangle calling Rectangle Module and Solving for dimensions: ${l} ${w}`);
  
  Rectangle(l, w, (err, rect) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Perimeter of the Rectangle with dimensions ${l} ${w} is: ${rect.perimeter()}`);
      console.log(`Area of the Rectangle with dimensions ${l} ${w} is: ${rect.area()}`);
    }
  });
}

solveRectangle(1, 2);
solveRectangle(1, 0);
solveRectangle(0, 2);
solveRectangle(0, 0);
solveRectangle(1, -2);
solveRectangle(-1, 2);
solveRectangle(-1, -2);
solveRectangle(5, 6);

