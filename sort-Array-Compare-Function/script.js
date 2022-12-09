// For Ascending Order

let assending = ( a , b ) => {
    return a - b;
}

// For Descending Order

let descending = ( a , b ) => {
    return b - a;
}


let arr = [NaN,100,0,13,-15,Infinity,-Infinity];
console.log(arr.sort()); // Without Using Compare Functions
console.log(arr.sort(assending)); // For Ascending Order
console.log(arr.sort(descending)); // For Descending Order