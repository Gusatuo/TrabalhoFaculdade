// Espera a página carregar tudo antes de começar
document.addEventListener('DOMContentLoaded', function() {

    // Acha todos os botões do menu no topo
    const botoesDoMenu = document.querySelectorAll('.nav-link');
    // Acha todas as partes do conteúdo (Sobre Mim, Formação, etc.)
    const partesDoConteudo = document.querySelectorAll('.content-section');

    // Quando um botão do menu é clicado, essa função acontece
    botoesDoMenu.forEach(function(botaoAtual) {
        botaoAtual.addEventListener('click', function(eventoDoClique) {
            // Não deixa o navegador fazer o que ele faria normalmente (pular a página)
            eventoDoClique.preventDefault();

            // Pega o nome da parte do conteúdo que esse botão deve mostrar 
            const idDaParteParaMostrar = botaoAtual.dataset.section;

            // 1. Esconde todas as partes do conteúdo
            partesDoConteudo.forEach(function(parte) {
                parte.classList.remove('active'); 
            });

            // 2. Mostra só a parte certa
            const parteCerta = document.getElementById(idDaParteParaMostrar);
            if (parteCerta) { 
                parteCerta.classList.add('active'); 
            }

            // 3. Tira o destaque de todos os botões do menu
            botoesDoMenu.forEach(function(botao) {
                botao.classList.remove('active'); 
            });

            // 4. Coloca o destaque no botão que foi clicado
            botaoAtual.classList.add('active'); 
        });
    });

});