// Verifique se um número é primo.
function isPrimo(num) {
  if (num <= 1) return false; // Números <= 1 não são primos
  for (let i = 2; i < num; i++) {
    console.log(i);
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimo(4)); // true
/*
7 ÷ 2 tem resto 1
7 ÷ 3 tem resto 1
7 ÷ 4 tem resto 3
7 ÷ 5 tem resto 2
7 ÷ 6 tem resto 1
Nenhum resto zero → retorna true
*/
