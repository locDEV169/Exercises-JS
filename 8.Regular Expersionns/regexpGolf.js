// the letters 'ca' followed by one of 'r' or 't'
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// 'p' optionally followed by 'r' followed by 'op'
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// 'ferr' followed by 'et' or 'y' or 'ari'
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// 'ious' followed by a word boundary 
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// a whitespace character followed by one of '.' or ',' or ':'or ';' 
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

// 7 or more word characters grouped together
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// one or more words not containing an e
verify(/\b[^\We]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

let re = /\b[^\We]+\b/;
console.log("red platypus".match(re));
console.log("wobbling nest".match(re));
console.log("earth bed".match(re));
console.log("learning ape".match(re));