document.getElementById("buttonSection01").addEventListener("click", function () {
  document.getElementById("textSection01").innerText = "Teste";
});

document.getElementById("buttonSection02").addEventListener("click", function () {
  document.getElementById("textSection02").className = "escondido";
});

document.getElementById("buttonSection03").addEventListener("click", function () {
  document.getElementById("textSection03").classList.toggle("escondido");
});

document.getElementById("buttonSection04").addEventListener("mouseover", function () {
  document.getElementById("textSection04").className = "escondido";
});

document.getElementById("buttonSection04").addEventListener("mouseleave", function () {
  document.getElementById("textSection04").className = "";
});
