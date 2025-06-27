/* script/expandir_artigo.js */

document.addEventListener('DOMContentLoaded', function() {
    // Função genérica para lidar com a expansão/recolhimento gradual e rolagem
    function setupExpandCollapse(contentId, buttonExpandId, buttonMoreId, initialHeight = 1000) {
        const conteudoOculto = document.getElementById(contentId);
        const botaoExpandir = document.getElementById(buttonExpandId);
        const textoBotao = botaoExpandir ? botaoExpandir.querySelector('p') : null;
        const botaoMais = document.getElementById(buttonMoreId);

        // Determina o elemento para onde a tela deve rolar ao recolher.
        // Tenta encontrar o 'article' pai, se não, a 'div' pai com ID, senão, o próprio 'conteudoOculto'.
        const elementToScrollTo = conteudoOculto ? conteudoOculto.closest('article') || conteudoOculto.closest('div[id]') || conteudoOculto : null;

        let currentMaxHeight = 0; // Para controlar a altura atual da expansão

        if (conteudoOculto && botaoExpandir) {
            // Inicialmente, oculta o botão "Mais"
            if (botaoMais) {
                botaoMais.style.display = 'none';
            }

            // Lógica para o botão principal "clique para expandir/recolher"
            botaoExpandir.addEventListener('click', function() {
                if (conteudoOculto.classList.contains('expandido')) {
                    // Se já está expandido, recolhe tudo
                    conteudoOculto.classList.remove('expandido');
                    conteudoOculto.style.maxHeight = '0px'; // Reseta a altura para recolher
                    currentMaxHeight = 0; // Reseta o contador
                    if (textoBotao) textoBotao.textContent = 'clique para expandir';
                    if (botaoMais) botaoMais.style.display = 'none'; // Esconde o botão "Mais" ao recolher

                    // Rolagem suave ao recolher
                    if (elementToScrollTo) {
                        elementToScrollTo.scrollIntoView({
                            behavior: 'smooth', // Rolagem suave
                            block: 'start'       // Alinha o topo do elemento com o topo da janela
                        });
                    }

                } else {
                    // Se está recolhido, expande para o estado inicial
                    conteudoOculto.classList.add('expandido');
                    currentMaxHeight = initialHeight; // Define a altura inicial
                    conteudoOculto.style.maxHeight = currentMaxHeight + 'px';
                    if (textoBotao) textoBotao.textContent = '🔝 clique para recolher 🔝';
                    if (botaoMais) botaoMais.style.display = 'block'; // Mostra o botão "Mais"
                }

                // Lógica específica para a seção de notícias (carregar notícias)
                // Isso só será executado se o ID for 'noticias_oculto'
                if (contentId === 'noticias_oculto' && typeof carregarNoticiasKpop === 'function' && !window.noticiasJaCarregadas) {
                    carregarNoticiasKpop();
                }
            });
        }

        // Lógica para o botão "Mais" (se existir)
        if (botaoMais && conteudoOculto) {
            botaoMais.addEventListener('click', function() {
                // Garante que a seção esteja no estado 'expandido' para a transição
                if (!conteudoOculto.classList.contains('expandido')) {
                    conteudoOculto.classList.add('expandido');
                }

                // Incrementa a altura em 1000px
                currentMaxHeight += 1000;
                conteudoOculto.style.maxHeight = currentMaxHeight + 'px';
            });
        }
    }

    // Aplica a função genérica para cada seção
    // Parâmetros: ID do conteúdo oculto, ID do botão de expandir/recolher, ID do botão "Mais", Altura inicial
    setupExpandCollapse('noticias_oculto', 'botaoExpandirNOTICIAS', 'maisNOTICIAS', 1000);
    setupExpandCollapse('HOTNEWS_oculto', 'botaoExpandirHOTNEWS', 'maisHOTNEWS', 1000);
    setupExpandCollapse('FAQ', 'botaoExpandirFAQ', 'maisPerguntas', 1000);
    setupExpandCollapse('conteudoGlossario', 'botaoExpandirGlossario', 'maisTERMOS', 1000);


    // --- Script para os itens individuais do glossário (o toggle-icon) ---
    // Esta parte do seu script funciona de forma independente e deve ser mantida.
    const glossaryItems = document.querySelectorAll('.glossary-item');

    glossaryItems.forEach(item => {
        const header = item.querySelector('.glossary-header');
        if (header) {
            header.addEventListener('click', () => {
                item.classList.toggle('active');
                const icon = header.querySelector('.toggle-icon');
                if (icon) {
                    if (item.classList.contains('active')) {
                        icon.textContent = '-';
                    } else {
                        icon.textContent = '+';
                    }
                }
            });
        }
    });

    // Se você tiver a função carregarNoticiasKpop em outro lugar, ela será chamada quando necessário.
    // Certifique-se de que window.noticiasJaCarregadas seja definida após o carregamento inicial das notícias.
});