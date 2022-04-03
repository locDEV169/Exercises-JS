setTimeout(() => {
    console.log("setTimeout");
}, 0);
new Promise((resolve, reject) => {
    resolve("Promise resolve");
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First value");
//     }, 3000);
// });

// firstPromise
//     .then((value) => {
//         console.log(value);
//         return "Second value";
//     })
//     .then((value) => {
//         console.log(value);
//         return "Third value";
//     })
//     .then((value) => {
//         console.log(value);
//     });
// const myPromise = new Promise((resolve, reject) => {
//     let a = false;
//     setTimeout(() => {
//         return a ? resolve("a is found!") : reject("sorry, no a");
//     }, 300);
// });

// myPromise
//     .then((value) => {
//         console.log("then", value);
//     })
//     .catch((err) => {
//         console.log("err", err);
//     });
