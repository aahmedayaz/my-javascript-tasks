let sortedArray;

let descending = (a , b) => {
    return b - a; // For Descending Order
}

let Kth_Largest = (arr , k) => {
    sortedArray = arr.sort(descending) // It will Sort the Given Array to Descending Order
    return `${sortedArray[k - 1]} is the ${k}th Largest Element in the Array`;
}

let arr1 = [25 , 0 , 100 , 51 , -20 , Infinity , NaN , 200  , 15] // 1st Largest = Infinity ; 2nd Largest = 200

console.log(Kth_Largest(arr1 , 1)); // Now it will give Right Output
console.log(Kth_Largest(arr1 , 2)); // Now it will give Right Output
console.log(Kth_Largest(arr1 , 3)); // Now it will give Right Output