/* script/expandir_artigo.js */

document.addEventListener('DOMContentLoaded', function() {
    // Função genérica para lidar com a expansão/recolhimento gradual e rolagem
    function setupExpandCollapse(contentId, buttonExpandId, buttonMoreId, initialHeight = 1000) {
        const conteudoOculto = document.getElementById(contentId);
        const botaoExpandir = document.getElementById(buttonExpandId);
        const textoBotao = botaoExpandir ? botaoExpandir.querySelector('p') : null;
        const botaoMais = document.getElementById(buttonMoreId);
        
        // Determina o elemento para onde a tela deve rolar ao recolher.
        const elementToScrollTo = conteudoOculto ? conteudoOculto.closest('article') || conteudoOculto.closest('div[id]') || conteudoOculto : null;

        if (conteudoOculto && botaoExpandir) {
            // Inicialmente, oculta o botão "Mais"
            if (botaoMais) {
                botaoMais.style.display = 'none';
            }

            // Lógica específica para DIVniver - mudar display para flex quando expandir
            if (contentId === 'DIVniver') {
                // Inicialmente esconde o conteúdo
                conteudoOculto.style.display = 'none';
            }

            // Lógica para o botão principal "clique para expandir/recolher"
            botaoExpandir.addEventListener('click', function() {
                if (conteudoOculto.classList.contains('expandido')) {
                    // Se já está expandido, recolhe tudo
                    conteudoOculto.classList.remove('expandido');
                    if (textoBotao) textoBotao.textContent = 'clique para expandir';
                    if (botaoMais) botaoMais.style.display = 'none'; // Esconde o botão "Mais" ao recolher

                    // Lógica específica para DIVniver - esconder quando recolher
                    if (contentId === 'DIVniver') {
                        conteudoOculto.style.display = 'none';
                    } else {
                        // Para outros elementos, usa a lógica original de max-height
                        conteudoOculto.style.maxHeight = '0px';
                    }

                    // Rolagem suave ao recolher
                    if (elementToScrollTo) {
                        elementToScrollTo.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }

                } else {
                    // Se está recolhido, expande
                    conteudoOculto.classList.add('expandido');
                    if (textoBotao) textoBotao.textContent = '🔝 clique para recolher 🔝';
                    if (botaoMais) botaoMais.style.display = 'block'; // Mostra o botão "Mais"

                    // Lógica específica para DIVniver - mostrar como flex quando expandir
                    if (contentId === 'DIVniver') {
                        conteudoOculto.style.display = 'flex';
                    } else {
                        // Para outros elementos, usa a lógica original
                        conteudoOculto.style.maxHeight = initialHeight + 'px';
                    }
                }

                // Lógica específica para a seção de notícias (carregar notícias)
                if (contentId === 'noticias_oculto' && typeof carregarNoticiasKpop === 'function' && !window.noticiasJaCarregadas) {
                    carregarNoticiasKpop();
                }
            });
        }

        // Lógica para o botão "Mais" (se existir) - apenas para elementos que não são DIVniver
        if (botaoMais && conteudoOculto && contentId !== 'DIVniver') {
            botaoMais.addEventListener('click', function() {
                // Garante que a seção esteja no estado 'expandido' para a transição
                if (!conteudoOculto.classList.contains('expandido')) {
                    conteudoOculto.classList.add('expandido');
                    conteudoOculto.style.maxHeight = initialHeight + 'px';
                }

                // Incrementa a altura em 1000px (apenas para elementos com max-height)
                const currentHeight = parseInt(conteudoOculto.style.maxHeight) || initialHeight;
                conteudoOculto.style.maxHeight = (currentHeight + 1000) + 'px';
            });
        }
    }

    // Aplica a função genérica para cada seção
    setupExpandCollapse('noticias_oculto', 'botaoExpandirNOTICIAS', 'maisNOTICIAS', 1000);
    setupExpandCollapse('HOTNEWS_oculto', 'botaoExpandirHOTNEWS', 'maisHOTNEWS', 1000);
    setupExpandCollapse('FAQ', 'botaoExpandirFAQ', 'maisPerguntas', 1000);
    setupExpandCollapse('conteudoGlossario', 'botaoExpandirGlossario', 'maisTERMOS', 1000);
    setupExpandCollapse('eventos_oculto','botaoExpandirEVENTOS','maisEVENTOS',1000);
    setupExpandCollapse('hanking_oculto','botaoExpandirHANKING','maisEVENTOS',1000);
    setupExpandCollapse('DIVniver','botaoExpandirDIVniver','maisEVENTOS',1000);
  
    // --- Script para os itens individuais do glossário (o toggle-icon) ---
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
});