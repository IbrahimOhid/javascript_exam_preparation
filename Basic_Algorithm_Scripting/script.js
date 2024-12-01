// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
 console.log( convertCtoF(30));

// Reverse a String
 function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
console.log(  reverseString("hello")); // olleh

// Factorialize a Number
function factorialize(num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
}

console.log(factorialize(5));
