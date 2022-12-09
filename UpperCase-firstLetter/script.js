let upperCaseFirstLetter = (items) => items.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
})

console.log(upperCaseFirstLetter(["hello" , "world"]));
