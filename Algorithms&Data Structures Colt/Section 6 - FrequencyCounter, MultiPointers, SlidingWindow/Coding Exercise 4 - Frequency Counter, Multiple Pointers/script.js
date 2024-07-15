function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let counter = {};
    for (let arg of args){
        counter[arg] = (counter[arg] || 0) + 1;
        if(counter[arg] > 1) return true;
    }
    return false;
  }

console.log(areThereDuplicates(1,2,3,4,5,6,7)); // false
console.log(areThereDuplicates(1,1,2,2,3,3,4,4,5,5,6,6)); // true
console.log(areThereDuplicates(1,2,3,3)); // true
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 