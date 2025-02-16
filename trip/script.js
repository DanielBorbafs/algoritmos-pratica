const showMenu = document.getElementById('show-menu');
const headerNav = document.getElementById('headerNav');

// Abre/fecha o menu ao clicar no ícone
showMenu.addEventListener('click', function (event) {
  event.stopPropagation(); // Impede que o clique se propague para o documento
  headerNav.classList.toggle('active');
  showMenu.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function (event) {
  // Verifica se o clique foi fora do menu e do ícone
  if (!headerNav.contains(event.target) && !showMenu.contains(event.target)) {
    headerNav.classList.remove('active');
    showMenu.classList.remove('active');
  }
});

/* simples 

const showMenu = document.getElementById("show-menu");
const headerNav = document.getElementById("headerNav");

showMenu.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  showMenu.classList.toggle("active");
});

*/
