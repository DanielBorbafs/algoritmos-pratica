const btnResponsivo = document.getElementById('toggle');
const navbar = document.getElementsByClassName('navbar_list')[0];

btnResponsivo.addEventListener('click', function () {
  navbar.classList.toggle('active');
});
