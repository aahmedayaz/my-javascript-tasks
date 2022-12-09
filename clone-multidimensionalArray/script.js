// 1 - Using Recursion

let clone = (items) => items.map((item) => {
    if(Array.isArray(item) === true){
        return clone(item); //Recursive
    }
    return item;
})

let arr1 = [3 , 4 , [5 , [6]]];
let arr2 = clone(arr1);

// console.log(arr1);
// console.log(arr2);

// 2 - Using JSON.stringify and JSON.parse

let original = [3 , 4 , [5 , [6]]];
let clone1 = JSON.parse(JSON.stringify(original))

console.log(original);
console.log(clone1);