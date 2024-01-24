function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    /* First step is to convert the number to string and split the 
    numbers to single digit and store it in an array. 
    */
    let num1String = num1.toString();
    let num2String = num2.toString();

    /* Second step is to check if the the length of the two numbers 
    strings are the same, if not we short circuit and returning false.
    */
    if (num1String.length !== num2String.length) return false;
    /* Defining an object to store the digits of the first num1 and
    the number of occurances of each digit.*/
    const counter = {};
    /* looping at each character of num1 string */
    for (let char of num1String) counter[char] = (counter[char] || 0) + 1;
    /* Looping at each character of num2 string and checking if it is in
    counter object and if it is not returning false else, 
    decrementing one of the digit count. */
    for (let char of num2String) {
        if (!counter[char]) return false;
        else counter[char]--;
    }
    /* if false wasnt returned it means that the two number has the same
    digits, then returning true. */
    return true;
}