const linguagem = document.querySelector('.campos__personalizacao_selecao')
const areaDoCodigo = document.querySelector('.editor__caixa_texto')
const botao = document.querySelector('.editor__botao')

function aplicaHighlight(){
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = '<code class="preview hljs texto__codigo ${linguagem.value}" contenteditable="true" aria-label="Editor do código"></code>'
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

