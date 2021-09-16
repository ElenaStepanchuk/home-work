// Change code below this line
function findMatches(argsArray, ...args) {
  const matches = []; // Don't change this line
  for (let i = 0; i < argsArray.length; i += 1) {
    if (argsArray.includes(args[i])) {
      matches.push(args[i]);
    }
  }
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 9, 5));