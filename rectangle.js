module.exports = (x, y, callbk) => {
    console.log(
    `From rectangle_with_callbk module solving for rectangle with : ${x} , ${y}`
    );
    if (x <= 0 || y <= 0) {
    callbk(
    new Error(
    `Rectangle Dimensions must be greater than 0: but provided as :${x} and 
    ${y}`
    )
    );
    } else {
    setTimeout(
    () =>
    callbk(null, {
    perimeter: () => 2 * (x + y),
    area: () => x * y,
    }),
    2000
    );
    }
 };