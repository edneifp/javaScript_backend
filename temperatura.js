const kelvin = 150; //temperatura em kelvin
const celsius = kelvin - 273; //temperatura em celsius

let fahrenheit = celsius * (9/5) + 32; // formula fahrenheit
fahrenheit = Math.floor(fahrenheit); // arrendonda o resultado pra baixo
console.log(`The temperatura is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100); // formula fahrenheit
newton = Math.floor(newton); // arrendonda o resultado pra baixo
console.log(`The temperatura is ${newton} degrees newton.`);