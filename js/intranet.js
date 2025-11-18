function seleccionarEmpresa(nom) {
  document.getElementById("empresaSeleccionada").textContent =
    "Empresa seleccionada: " + nom;

  document.getElementById("formulariBox").style.display = "block";
}

function obrirFormulari() {
  const tipus = document.getElementById("formulari").value;

  if (tipus === "comercial") {
    window.open(
      "https://ccam.gencat.cat/ca/serveis/autodiagnosi/",
      "_blank"
    );
  }
}
