/*
Imprima os números de 1 a 100, substituindo múltiplos de 3 por "Fizz", 
múltiplos de 5 por "Buzz" e de ambos por "FizzBuzz" (FizzBuzz).

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i); // || funciona como "ou" para valores falsy
}
