var nome = "Leonardo C. Schunke";
var cargo = "Estudante - Growdev";

var nomeHtml = document.getElementById("nome-html");
var cargoHtml = document.getElementById("cargo-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function clickProjetos(){
    console.log("Clicou em projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickSobre(){
    console.log("Clicou em sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeHtml(nome);
colocarCargoHtml(cargo);