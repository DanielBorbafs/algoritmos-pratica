// Calcule o fatorial de um número (ex: 5! = 120).
function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
    console.log(resultado);
  }
}

fatorial(5);
