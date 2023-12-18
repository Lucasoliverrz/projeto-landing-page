var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Leonardo.style ="display:none"
    Samantha.style ="display:flex"
    setaEsquerda.style ="display:flex; margin-top:55px"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Samantha.style ="display:none"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex; margin-top:55px"
}