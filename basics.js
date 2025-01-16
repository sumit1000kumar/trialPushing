// variable declarations

// let a = 12;
// var b = 13;
// const c = 14;

// console.log(a);
// console.log(c);
// console.log(b);

// degree celcius to degree farenheit

// function degreeCelcius(c){
//     f=(9*c+160)/5;
//     return f;
// } 

// console.log(degreeCelcius (37));

export function degreeToFarenheit(celcius){
    let farenheit = (9*celcius+160)/5;
    return farenheit;
}

console.log("The temperature in farenheit is : "+ degreeToFarenheit(37));

export function farenheitToCelcius(farenheit){
    let celcius = 5*(farenheit- 32)/9;
    return celcius;
}

console.log("The temperature in celcius is : " + farenheitToCelcius(98.6));