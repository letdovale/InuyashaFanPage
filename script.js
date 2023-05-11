const btnFechar = document.getElementById('btn-fechar')
const btnVoltar = document.getElementById('btn-voltar')
const btnProximo = document.getElementById('btn-proximo')
const imagens = document.querySelectorAll('.galeria img')
const modal = document.getElementById('container-principal')
const imagemAtiva = document.getElementById('imagem-ativa')

let indiceImagem = 0

/* Abrir modal */

const abrirModal = (evento) => {
    imagemAtiva.src = evento.target.src
    modal.style.display = 'flex'
    indiceImagem = Array.from(imagens).indexOf(evento.target)
}

imagens.forEach((imagem) => {
    imagem.addEventListener('click', abrirModal)
})

/* fechar modal */

btnFechar.addEventListener('click', () =>{
    modal.style.display = 'none'
})

/*proxima imagem */

const proximaImagem = () => {
    if (indiceImagem === imagens.length-1) {
        indiceImagem= -1
    }
    
    imagemAtiva.src = imagens[indiceImagem + 1].src
    indiceImagem++
}

btnProximo.addEventListener('click', proximaImagem)

/*imagem anterior */ 

const imagemAnterior = () => {
    if (indiceImagem=== 0) {
        indiceImagem = imagens.length
    }
    imagemAtiva.src = imagens[indiceImagem - 1].src
    indiceImagem--
}

btnVoltar.addEventListener('click', imagemAnterior)

console.log(proximaImagem)