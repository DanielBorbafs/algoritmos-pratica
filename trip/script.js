const showMenu = document.getElementById('burder');
const headerNav = document.getElementById('links');

// Função para abrir/fechar o menu
showMenu.addEventListener('click', function (event) {
  event.stopPropagation(); // Impede que o clique no botão propague para o documento
  headerNav.classList.toggle('active');
  showMenu.classList.toggle('active');
});

// Função para fechar o menu ao clicar fora
document.addEventListener('click', function (event) {
  const isClickInside =
    headerNav.contains(event.target) || showMenu.contains(event.target);

  if (!isClickInside) {
    headerNav.classList.remove('active');
    showMenu.classList.remove('active');
  }
});
