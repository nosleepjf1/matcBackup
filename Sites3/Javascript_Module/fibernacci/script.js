/**
 * Created by bobnweave on 10/4/16.
 */

function fib(index){
    if(index === 0){
        return 0;
    }
    if(index === 1){
        return 1;
    }
console.log(index);
    return fib(index - 1) + fib(index - 2);
}

document.write(fib(3));