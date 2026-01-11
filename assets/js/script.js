var campoBusca = document.getElementById("search");
var fotos = document.getElementsByClassName("photo");
var mensagem = document.getElementById("message");

campoBusca.addEventListener("keyup", function () {

  var texto = campoBusca.value.toLowerCase();
  var encontrou = false;

  for (var i = 0; i < fotos.length; i++) {

    var nomeFoto = fotos[i].getAttribute("data-name").toLowerCase();

    if (nomeFoto.indexOf(texto) !== -1) {
      fotos[i].style.display = "block";
      encontrou = true;
    } else {
      fotos[i].style.display = "none";
    }
  }

  if (encontrou) {
    mensagem.style.display = "none";
  } else {
    mensagem.style.display = "block";
  }

});
