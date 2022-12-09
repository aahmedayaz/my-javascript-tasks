let checkArray = (input) => {
    if(Array.isArray(input) === true && input[0]){
        return true;
    }
    return false;
}

console.log(checkArray("Ahmed")); // This is not an Array
console.log(checkArray([2 , "ayaz"])); // This is an Array

// what if we don't want empty arrays
console.log(checkArray([])); // Now it is Valid