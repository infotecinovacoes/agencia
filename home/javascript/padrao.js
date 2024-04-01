// Crie um único objeto observer
// const observer = new IntersectionObserver(entries => {
//     Array.from(entries).forEach(entry => {
//         if (entry.intersectionRatio >= 0.1) {
//             if (entry.target.classList.contains('init-hidden-normal')) {
//                 entry.target.classList.add('init-hidden-off-normal');
//                 entry.target.classList.remove('init-hidden-normal');
//             } else if (entry.target.classList.contains('init-hidden-cima')) {
//                 entry.target.classList.add('init-from-cima');
//             } else if (entry.target.classList.contains('init-hidden-esquerda')) {
//                 entry.target.classList.add('init-from-esquerda');
//             }
//         }
//     });
// }, {
//     threshold: [0.1]
// });

// Array.from(document.querySelectorAll('.init-hidden-normal, .init-hidden-cima, .init-hidden-esquerda')).forEach(element => {
//     observer.observe(element);
// });
// Crie um único objeto observer

// função para recarregar a página e voltar no início do site
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});
window.addEventListener('beforeunload', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// função para recarregar a página e voltar no início do site

//comando para subir o site ao topo quando clicar na div inicio
const botao = document.querySelector(".inicio");
const inicio = document.querySelector("#top"); // Adicione um ID à tag <body> para referenciá-la aqui
botao.addEventListener("click", function (event) {
    event.preventDefault();
    inicio.scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});
//comando para subir o site ao topo quando clicar na div inicio

// função para expandir e recolher as páginas
function togglePages() {
    const pages = document.getElementById('hidden-pages');
    if (pages.style.display === 'none' || pages.style.display === '') {
        pages.style.display = 'block';
        setTimeout(() => {
            pages.classList.add('show-pages');
        }, 10);
    } else {
        pages.classList.remove('show-pages');
        setTimeout(() => {
            pages.style.display = 'none';
        }, 300);
    }
}
// função para expandir e recolher as páginas

// Função para ocultar as páginas ao clicar fora do botão e das páginas
document.addEventListener('click', function (event) {
    const target = event.target;
    const pages = document.getElementById('hidden-pages');

    if (!target.closest('.arrow-button') && !target.closest('.hidden-pages')) {
        pages.classList.remove('show-pages');
        setTimeout(() => {
            pages.style.display = 'none';
        }, 300);
    }

});
// Função para ocultar as páginas ao clicar fora do botão e das páginas

// funcao das perguntas e respostas
function mostrarResposta(numero) {
    var resposta = document.getElementById('resposta' + numero);

    if (resposta.style.display !== 'block') {
        resposta.style.display = 'block';

    } else {
        resposta.style.display = 'none';
    }
}
// funcao das perguntas e respostas