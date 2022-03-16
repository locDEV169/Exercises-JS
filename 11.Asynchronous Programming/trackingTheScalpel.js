// my solution
async function locateScalpel(nest) {
    let results = network(nest).map(async (name) => {
        // if the name of the nest that was last known to hold the scalpel
        // is the current nest then we have found the scalpel
        // else, return null
        if (name === (await anyStorage(nest, name, "scalpel"))) {
            return name;
        } else {
            return null;
        }
    });
    // get the name of the nest that is not null
    return (await Promise.all(results)).filter((nest) => nest !== null)[0];
}

// official answer
async function locateScalpel(nest) {
    let current = nest.name;
    for (;;) {
        let next = await anyStorage(nest, current, "scalpel");
        if (next == current) return current;
        current = next;
    }
}

// my solution without async/await, just a promise
function locateScalpel2(nest) {
    // recursively search nests until scalpel is found
    function findScalpel(nextNest) {
        // check nextNest for scalpel
        return anyStorage(nest, nextNest, "scalpel").then((value) => {
            if (value == nextNest) {
                // found scalpel
                return value;
            } else {
                // continue search from last nest known to contain scalpel
                return findScalpel(value);
            }
        });
    }
    // start search at current nest
    return findScalpel(nest.name);
}

// oficial answer
function locateScalpel2(nest) {
    function loop(current) {
        return anyStorage(nest, current, "scalpel").then((next) => {
            if (next == current) return current;
            else return loop(next);
        });
    }
    return loop(nest.name);
}

locateScalpel(bigOak).then((value) => console.log("1st:", value));
// → Butcher Shop
locateScalpel2(bigOak).then((value) => console.log("2nd:", value));
// → Butcher Shop
