
const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
})

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

const find = arr.find(function(item){
    return item === 4;
})
