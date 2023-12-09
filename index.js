
// Assume that cats is defined in helpers.js
let cats = ["Milo", "Otis", "Garfield"];

// index.js

// Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return cats.concat([name]);
}

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}

// Export the functions and the cats array
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
