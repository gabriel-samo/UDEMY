function isSubsequence(str, sentence) {
    // good luck. Add any arguments you deem necessary.
    if(str.length > sentence.length) return false;
    let i = 0;
    let j = 0;
    while (j < sentence.length){
        if(str[i] === sentence[j]){
            
        }
    }
  }


console(isSubsequence('hello', 'hello world')); // true
console(isSubsequence('sing', 'sting')); // true
console(isSubsequence('abc', 'abracadabra')); // true
console(isSubsequence('abc', 'acb')); // false (order matters)