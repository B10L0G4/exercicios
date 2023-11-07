let listaEscolhidos = []
let limite = 10
let secret = geradorDeNumeor()
let chances = 1

function verificaTag (tag , texto ) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == secret){
        let chance = chances > 1 ? ' chances' :' chance';
        verificaTag('h1','Você acertou em '+ chances + chance)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else 
        if (chute > secret){
        verificaTag('p','O número é menor ')
        }else{
            verificaTag('p','O número é maior')
    }
    chances++
    clear()
}
function geradorDeNumeor(){
    let numEscolhido = parseInt(Math.random() * limite + 1 )
        return numEscolhido;
    }
function clear(){
    chute = document.querySelector('input')
    chute.value = ''
}
function exibirMensagens() {
    verificaTag('h1', 'Número Secreto o Jogo')
    verificaTag('p', 'Escolha um núnero de 1 a 10')
}

exibirMensagens()

function reiniciarJogo(){
    geradorDeNumeor()
    clear()
    chances = 1
    exibirMensagens()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}



