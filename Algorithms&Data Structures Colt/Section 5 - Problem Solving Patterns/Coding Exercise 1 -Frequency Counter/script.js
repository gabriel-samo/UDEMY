function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
    const counter = {};
    for(let char of str1){
        counter[char] = (counter[char] || 0) + 1;
    }
    for(let char of str2){
        if(!counter[char]){
            return false;
        } else {
            counter[char]--;
        }
    }
    return true;
  }

console.log(validAnagram('anagram', 'nagaram'));