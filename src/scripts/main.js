document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const sectionHero = document.querySelector('.hero');
    const alturaHero = sectionHero.clientHeight

    window.addEventListener('scroll', function() {
        const position = window.scrollY

        if(position < alturaHero) {
            OcultaElementosHeader();

        } else {
            exibeElementosHeader();
        }
    })
    

    // Seção de atrações
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)

            escondeTdsAbas();
            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for(let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', abreOuFechaResposta);
    }
})


function OcultaElementosHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

// Faq
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    console.log(elementoPai)

    elementoPai.classList.toggle(classe)
}

// Remove o border-bottom dos botões do show
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}


function escondeTdsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}