const cartoes = document.querySelector('.cartoes')

new function () {
    mostraProjetos()
}

function mostraProjetos(){
    if(localStorage.length == 0){
        return
    }
    let projetos = []
    for(let i=0; i < localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        cartoes.innerHTML += montaCartao(projeto)
        const codigoHtml = cartoes.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function montaCartao(projeto){
    console.log(projeto)
    let cartao = `
    <div class="cartao_${projeto.id}">
        <div class="cartao__editor">
            <div class="cartao__fundo" style="background-color: ${projeto.detalhesDoProjeto.cor}">
                <div class="cartao__codigo">
                    <div class="cartao__codigo_bolas">
                        <div class="cartao__codigo_bola1"></div>
                        <div class="cartao__codigo_bola2"></div>
                        <div class="cartao__codigo_bola3"></div>
                    </div>
                    <code class="preview hljs texto__codigo ${projeto.detalhesDoProjeto.linguagem}" contenteditable="true" aria-label="Editor de código">${projeto.detalhesDoProjeto.codigo}</code>
                </div>
            </div>
        </div>    
        
        <div class="cartao__itens">
            <text class="cartao__titulo texto__titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</text>
            <text class="cartao__descricao texto__body">${projeto.detalhesDoProjeto.descricaoDoProjeto}</text>

            <div class="cartao__icones">
                <div class="cartao__comentarios">
                    <img src="img/cartao_comment.svg" alt="" class="cartao__comentarios_icone">
                    <text class="cartao__comentarios_numero texto__body">9</text>
                </div>
                <div class="cartao__likes">
                    <img src="img/cartao_like.svg" alt="" class="cartao__likes_icone">
                    <text class="cartao__likes_numero texto__body">9</text>
                </div>

                <div class="cartao__perfil">
                    <img src="img/foto_perfil.png" alt="" class="cartao__perfil_foto">
                    <text class="cartao__perfil_nome texto__body">@Harry</text>
                </div>
            </div>
        </div>
    </div>
    `

    return cartao
}