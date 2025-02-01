const btnResponsivo = document.getElementById('toggle');
const navbar = document.getElementsByClassName('navbar_list')[0];

btnResponsivo.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

/* ============ Trocando classe =============== */

// Garantir que o script seja executado depois que o DOM for carregado
document.addEventListener('DOMContentLoaded', function () {
  const arrowQuestion = document.getElementById('arrow');
  const textOpen = document.getElementById('texto_pergunta');

  // Adiciona o evento de clique
  arrowQuestion.addEventListener('click', function () {
    console.log('Elemento clicado');
    // Alterna a visibilidade do texto
    if (textOpen.style.display === 'none' || textOpen.style.display === '') {
      textOpen.style.display = 'block'; // Mostra o texto
    } else {
      textOpen.style.display = 'none'; // Esconde o texto
    }
  });
});