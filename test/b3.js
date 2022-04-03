setTimeout(() => {
    console.log("setTimeout");
}, 1000);

function sleep(time) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + time);
}
sleep(4000);

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }
// sleep(5000);
// function debounce(callback, delay) {
//     let timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(callback, delay);
//     };
// }
// debounce(functionA, 3000)
// function delay(t, v) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve.bind(null, v), t);
//     });
// }
// delay(3000, functionA)
