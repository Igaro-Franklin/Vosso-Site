// Evento de scroll
window.addEventListener("scroll", function() {
  var irTop = document.getElementById("ir-top");
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollY >= 100) {
    irTop.classList.add("mostrar");
  } else {
    irTop.classList.remove("mostrar");
  }
});

function irInstagram(){
  alert('Você está sendo redirecionado ao nosso instagram!')
  window.location.href = 'https://instagram.com/vosso_site?igshid=MzNlNGNkZWQ4Mg==';

}
