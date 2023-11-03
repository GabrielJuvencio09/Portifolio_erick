const botoes = document.querySelectorAll('.Secundario__botoes a')
const textos = document.querySelectorAll('.secundario__Frase p')
const titulo = document.querySelector('.secundario__titulo')


function trocaTexto(index) {
    textos.forEach((texto, i) => {
        if (i === index) {
            if (texto.classList.contains('ativo')) {
                texto.classList.remove('ativo');
            } else {
                texto.classList.add('ativo');
                texto.classList.remove('offline');
            }
        } else {
            texto.classList.remove('ativo');
            texto.classList.add('offline');
        }
    });
}
function alterarTitulo(event) {
    titulo.innerText = event.target.innerText
}


botoes.forEach((botao,) => {
    botao.addEventListener('click', alterarTitulo)

})

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        trocaTexto(index)
    })

})


//----------------------------//


const linkinterno = document.querySelectorAll('.js-menu a[href^="#"]')

function descidaSuave(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

linkinterno.forEach((link) => {
    link.addEventListener('click', descidaSuave)
})


//---------------// scroll suave //---------------//

const sessaoes = document.querySelectorAll('.js-scroll')



if (sessaoes.length) {
    const metadedatela = window.innerHeight * 0.6

    function animascroll() {
        sessaoes.forEach((sessao) => {
            const topodaSessao = sessao.getBoundingClientRect().top - metadedatela


            if (topodaSessao < 0) {
                sessao.classList.add('ativo')
            }
        })
    }

}



window.addEventListener('scroll', animascroll)
