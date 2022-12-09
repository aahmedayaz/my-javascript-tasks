let m = 0;
let mf = 1;
let item ;
let arr = ['a','b','c','a','c','b','b','b','a','b'];
for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
        if(arr[i] == arr[j]){
            m++;
        }
        if(mf < m){
            mf = m; // mf is Number of times it is Repeating
            item = arr[i] // item is the most repeating item in the array
        }
    }
    m = 0; // It is necessary for counting exact Number of times it is repeating
}

console.log(`${item} is the Most Repeating Item`); // Using Template Literals
console.log(`It is Repeated ${mf} times`); // Using Template Literals
