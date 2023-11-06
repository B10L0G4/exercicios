let secret = geradorDeNumeor()

function verificaTag (tag , texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function verificarChute() {
    console.log(secret)
}
function geradorDeNumeor(){
    return parseInt(Math.random(10) * 10 + 1 )

}

verificaTag('h1', 'Número Secreto o Jogo')
verificaTag('p', 'Escolha um núnero de 1 a 10')

