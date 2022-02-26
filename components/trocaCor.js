const botaoCor = document.querySelector(".campos__personalizacao_cor")
const editorBorda = document.querySelector(".editor__borda")
var contador = 0

var corOpcoes = ['#6BD1FF', '#9AFF6B', '#6B83FF', '#FFC46B','#FF6BCD']

function mudarCor(){
    contador += 1
    botaoCor.style.background = corOpcoes[contador]
    editorBorda.style.background = corOpcoes[contador]

    console.log(contador)
    console.log(corOpcoes[contador])

    if (contador == 4){
        contador = -1
    }
}

botaoCor.addEventListener('click', () => {
    mudarCor()
})