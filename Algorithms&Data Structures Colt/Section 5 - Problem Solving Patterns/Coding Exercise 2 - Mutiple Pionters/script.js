function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0){
        return 0;
    }
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return i + 1;
}

console.log(countUniqueValues([2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7])); // 6