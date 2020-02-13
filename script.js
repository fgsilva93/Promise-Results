// Promise.then() Chaining//

slowMath.add(6,2) // use (1,1) to see the error results
.then((sum1) => {
    console.log(sum1);
    return slowMath.multiply(sum1,2); 
}).then((sum2) => {
    console.log(sum2);
    return slowMath.divide(sum2, 4);
}).then((sum3) => {
    console.log(sum3);
    return slowMath.subtract(sum3, 3);
}).then((sum4) => {
    console.log(sum4);
    return slowMath.add(sum4, 98);
}).then((sum5) => {
    console.log(sum5);
    return slowMath.remainder(sum5, 2);
}).then((sum6) => {
    console.log(sum6);
    return slowMath.multiply(sum6, 50);
}).then((sum7) => {
    console.log(sum7); 
    return slowMath.remainder(sum7, 40);
}).then((sum8) => {
    console.log(sum8);
    return slowMath.add(sum8, 32);
}).then((sum9) =>{
    console.log(`The final results: ${sum9}`);
}).catch((err) => {
    console.log("Something in the code when wrong!")
    console.log(err); 
})