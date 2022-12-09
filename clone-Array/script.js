//  1- Spread Operator

let original1 = [2 , 4 , 6];
let clone1 = [...original1];
console.log(original1);
console.log(clone1);

// 2- Map Function

let original2 = [10 , 6 , "Ayaz"];
let clone2 = original2.map((x) => x);
console.log(original2);
console.log(clone2);

// 3- Filter Function

let original3 = [3 , "ayaz" , true];
let clone3  = original3.filter(() => true);
console.log(original3);
console.log(clone3);

// 4- Slice 

let original4 = [2 , false , 1320];
let clone4 = original4.slice();
console.log(original4);
console.log(clone4);

// 5- Concat

let original5 = ["Ahmed" , 13 , true];
let clone5 = original5.concat();
console.log(original5);
console.log(clone5);