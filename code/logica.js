function mostrarCorazonYRedirigir(urlDestino) {
  const contenedor = document.getElementById("emoji");

  const corazon = document.createElement("span");
  corazon.innerText = "💖";
  corazon.classList.add("corazon-animado");

  contenedor.appendChild(corazon);

  setTimeout(() => {
    window.location.href = urlDestino;
  }, 2000); // espera a que termine la animación
}

function corazon1() {
  mostrarCorazonYRedirigir("code/flaquitamasmegusta.html");
}

function corazon2() {
  mostrarCorazonYRedirigir("code/fotosdepayasa.html");
}

function corazon3() {
  mostrarCorazonYRedirigir("code/fotosquemeencantan.html");
}
