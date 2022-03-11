const map = { one: true, two: true, hasOwnProperty: true };
// Fix this call
console.log("6.3", map.hasOwnProperty("one"));
console.log("6.3", hasOwnProperty.call(map, "one"));
// → true
