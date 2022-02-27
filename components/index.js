const areaDoCodigo = document.querySelector('.editor__caixa_texto')
const highlightBotao = document.querySelector('.editor__botao')
const projetoNome = document.querySelector(".campos__projeto_nome")
const projetoDescricao = document.querySelector(".campos__projeto_descricao")
const projetoLinguagem = document.querySelector(".campos__personalizacao_selecao")
const projetoCor = document.querySelector(".campos__personalizacao_cor")
const projetoCodigo = document.querySelector(".preview")
const projetoBotaoSalvar = document.querySelector(".campos__botao")

/*********CODIGO PARA VISUALIAR COM HIGHLIGHT***********/
highlightBotao.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

projetoLinguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem(){
    let codigo = {'texto': areaDoCodigo.querySelector('code').innerText}
    areaDoCodigo.innerHTML = '<code class="preview hljs texto__codigo ${projetoLinguagem.value}" contenteditable="true" aria-label="Editor do código"></code>'
    areaDoCodigo.firstChild.innerText = codigo.texto
}
/**********************************************************/


projetoBotaoSalvar.addEventListener('click', () => {
    if(typeof(Storage) !== "undefined"){
        console.log("suporta a localstorage")
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
        console.log(projeto)
    }else{
        console.log("não suporta o localstorage")
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto':{
            'nomeDoProjeto': projetoNome.value,
            'descricaoDoProjeto': projetoDescricao.value,
            'linguagem': projetoLinguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText,
            'cor': window.getComputedStyle(projetoCor).backgroundColor
        }
    }
    return projeto
}

function atribuiId(){
    return localStorage.length
}

function salvaLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}