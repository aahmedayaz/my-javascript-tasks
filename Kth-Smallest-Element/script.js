let sortedArray;

let ascending = (a , b) => {
    return a - b; // For Ascending Order
}

let Kth_Smallest = (arr , k) => {
    sortedArray = arr.sort(ascending) // This wil sort an Array in Ascending Order
    return `${sortedArray[k - 1]} is the ${k}th Smallest Element in the Array`
}


let arr1 = [22 , 52 , 13 , 0 , -10 , 100 , -2]  // 1st Smallest = -10 ; 2nd Smallest = -2


console.log(Kth_Smallest(arr1 , 1)); // Right Output
console.log(Kth_Smallest(arr1 , 2)); // Right Output
console.log(Kth_Smallest(arr1 , 3)); // Right Output




















