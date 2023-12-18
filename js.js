debugger
function firstValue (){
    let a = 0
    return function secondvalue(value){
     a += value;
     console.log(`Сумма ${value} + ${sum}: ${a}`)
    return a;
    }
}
const sum = firstValue()

console.log(sum(3));

console.log(sum(5));

console.log(sum(20));
