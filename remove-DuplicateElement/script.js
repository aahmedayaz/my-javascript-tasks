let arr = ['a','b','b','b','c','c','a','d','d','e']
console.log(arr);
console.log('\n');

// 1 - Using Sets
let result1 = [...new Set(arr)] // Right
console.log(result1); 

// 2- Using filter() and indexOf()
let result2 = arr.filter((item , index) => {
    return arr.indexOf(item) === index;
})
console.log(result2);

// 3 - Using include() and forEach()
let result3 = [];
arr.forEach((item) => {
    if(!result3.includes(item)){
        result3.push(item);
    }
})
console.log(result3);
