/**
 * Created by bobnweave on 10/4/16.
 */
function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

document.write(factorial(2));

var dog = {
    type: 'bulldog',
    legs: 3,
    age: 10
};

console.log(dog['type']);
for(var i in dog){
    console.log(i);
}