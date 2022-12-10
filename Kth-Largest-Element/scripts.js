let sortedArray;

let descending = (a , b) =>{
    return b - a; // For Arranging in Descending Order
}

let Kth_Largest = (arr , k) =>{
    sortedArray = arr.sort(descending);
    return `${sortedArray[k - 1]} is the ${k}th Largest Element in the Array`
}

let arr1 = [-10 , 25 , 89 , 0 ,14 ,64 , 11 , 100] // 1st Largest = 100 

console.log(Kth_Largest(arr1 , 1));  // Now Right Output
console.log(Kth_Largest(arr1 , 2));  // Now Right Output
console.log(Kth_Largest(arr1 , 3));  // Now Right Output
console.log(Kth_Largest(arr1 , 4));  // Now Right Output