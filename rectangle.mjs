export const Rectangle = (x, y, CallBack) => {
    console.log(`From Rectangle Module solving for dimensions : ${x},${y}`);
    if (x <= 0 || y <= 0) {
    CallBack(
    new Error(
    `Always Dimensions of the Rectangle is > 0: But Received as ${x},${y}`
    ),
    null
    );
    } else {
    setTimeout(
    () =>
    CallBack(null, {
    perimeter: () => 2 * (x = y),
    area: () => x * y,
    }),
    2000
    );
    }
};
    