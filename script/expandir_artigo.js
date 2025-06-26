document.addEventListener('DOMContentLoaded', function() {
    // --- Script para a seção FAQ ---
    const conteudoOcultoFAQ = document.getElementById('FAQ');
    const botaoExpandirFAQ = document.getElementById('botaoExpandirFAQ');
    const textoBotaoFAQ = botaoExpandirFAQ ? botaoExpandirFAQ.querySelector('p') : null;

    if (botaoExpandirFAQ && conteudoOcultoFAQ) {
        botaoExpandirFAQ.addEventListener('click', function() {
            // Lógica para expandir/recolher a seção FAQ
            if (conteudoOcultoFAQ.classList.contains('expandido')) {
                conteudoOcultoFAQ.classList.remove('expandido');
                if (textoBotaoFAQ) textoBotaoFAQ.textContent = 'clique para expandir';
            } else {
                conteudoOcultoFAQ.classList.add('expandido');
                if (textoBotaoFAQ) textoBotaoFAQ.textContent = '🔝 clique para recolher 🔝';
            }

            // NOVO: FORÇA o fechamento de todos os conteúdos HOTNEWS e da seção principal HOTNEWS
            // Itere sobre todos os IDs de 1 a 6 para garantir que todos os sub-itens estejam fechados
            for (let i = 1; i <= 6; i++) {
                const hotnewsContent = document.getElementById(`conteudoOculto-HOTNEWS_${i}`);
                if (hotnewsContent) {
                    hotnewsContent.style.display = 'none';
                }
            }

            // Garante que a seção principal HOTNEWS_oculto esteja recolhida
            const hotnewsOculto = document.getElementById('HOTNEWS_oculto');
            const hotnewsContainer = document.getElementById('HOTNEWS');
            const botaoExpandirHOTNEWS = document.getElementById('botaoExpandirHOTNEWS');
            const textoBotaoExpandirHOTNEWS = botaoExpandirHOTNEWS ? botaoExpandirHOTNEWS.querySelector('p') : null;

            if (hotnewsOculto && hotnewsContainer) {
                hotnewsOculto.style.display = 'none'; // Define explicitamente como none
                hotnewsContainer.style.height = '270px'; // Volta para a altura original
                // Reseta o texto do botão de expandir HOTNEWS para o estado inicial
                if (textoBotaoExpandirHOTNEWS) {
                    textoBotaoExpandirHOTNEWS.textContent = 'clique para expandir';
                }
            }
        });
    }

    // --- Script para a seção do Glossário ---
    const conteudoOcultoGlossario = document.getElementById('conteudoGlossario');
    const botaoExpandirGlossario = document.getElementById('botaoExpandirGlossario');
    const textoBotaoGlossario = botaoExpandirGlossario ? botaoExpandirGlossario.querySelector('p') : null;

    if (botaoExpandirGlossario && conteudoOcultoGlossario) {
        botaoExpandirGlossario.addEventListener('click', function() {
            if (conteudoOcultoGlossario.classList.contains('expandido')) {
                conteudoOcultoGlossario.classList.remove('expandido');
                if (textoBotaoGlossario) textoBotaoGlossario.textContent = 'clique para expandir';
            } else {
                conteudoOcultoGlossario.classList.add('expandido');
                if (textoBotaoGlossario) textoBotaoGlossario.textContent = '🔝 clique para recolher 🔝';
            }
        });
    }

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

    // --- Script para a lógica de expansão/recolhimento da seção de Notícias ---
    const noticiasOculto = document.getElementById('noticias_oculto');
    const botaoExpandirNOTICIAS = document.getElementById('botaoExpandirNOTICIAS');
    const textoBotaoNOTICIAS = botaoExpandirNOTICIAS ? botaoExpandirNOTICIAS.querySelector('p') : null;

    // Botão "Mais Notícias"
    const botaoMaisNOTICIAS = document.getElementById('maisNOTICIAS');
    let currentMaxHeight = 0; // Para controlar a altura atual

    if (noticiasOculto && botaoExpandirNOTICIAS) {
        // Lógica para o botão "clique para expandir/recolher" principal
        botaoExpandirNOTICIAS.addEventListener('click', function() {
            if (noticiasOculto.classList.contains('expandido')) {
                // Se já está expandido, recolhe tudo
                noticiasOculto.classList.remove('expandido');
                noticiasOculto.style.maxHeight = '0px'; // Reseta a altura para recolher
                currentMaxHeight = 0; // Reseta o contador
                if (textoBotaoNOTICIAS) textoBotaoNOTICIAS.textContent = 'clique para expandir';
                if (botaoMaisNOTICIAS) botaoMaisNOTICIAS.style.display = 'none'; // Esconde o botão "Mais Notícias" ao recolher
            } else {
                // Se está recolhido, expande para o estado inicial (ou a primeira porção)
                noticiasOculto.classList.add('expandido');
                currentMaxHeight = 1000; // Define a altura inicial para 1000px
                noticiasOculto.style.maxHeight = currentMaxHeight + 'px';
                if (textoBotaoNOTICIAS) textoBotaoNOTICIAS.textContent = '🔝 clique para recolher 🔝';
                if (botaoMaisNOTICIAS) botaoMaisNOTICIAS.style.display = 'block'; // Mostra o botão "Mais Notícias"
            }
            // Chama a função para carregar notícias se ainda não tiverem sido carregadas
            if (typeof carregarNoticiasKpop === 'function' && !window.noticiasJaCarregadas) {
                carregarNoticiasKpop();
            }
        });
    }

    // Lógica para o botão "Mais Notícias"
    if (botaoMaisNOTICIAS && noticiasOculto) {
        // Inicialmente esconda o botão "Mais Notícias" se a seção não estiver expandida
        botaoMaisNOTICIAS.style.display = 'none';

        botaoMaisNOTICIAS.addEventListener('click', function() {
            // Garante que a seção esteja no estado 'expandido' para a transição
            if (!noticiasOculto.classList.contains('expandido')) {
                noticiasOculto.classList.add('expandido');
            }

            // Incrementa a altura em 1000px
            currentMaxHeight += 1000;
            noticiasOculto.style.maxHeight = currentMaxHeight + 'px';
        });
    }

    // --- Script para o botão Expandir/Recolher HOTNEWS ---
    const botaoExpandirHOTNEWS = document.getElementById('botaoExpandirHOTNEWS');
    const hotnewsOculto = document.getElementById('HOTNEWS_oculto');
    const hotnewsContainer = document.getElementById('HOTNEWS');
    const textoBotaoExpandirHOTNEWS = botaoExpandirHOTNEWS ? botaoExpandirHOTNEWS.querySelector('p') : null;

    if (botaoExpandirHOTNEWS && hotnewsOculto && hotnewsContainer) {
        botaoExpandirHOTNEWS.addEventListener('click', function() {
            if (hotnewsOculto.style.display === 'block') {
                // Se está expandido, recolhe
                hotnewsOculto.style.display = 'none';
                hotnewsContainer.style.height = '270px'; // Volta para a altura original
                if (textoBotaoExpandirHOTNEWS) textoBotaoExpandirHOTNEWS.textContent = 'clique para expandir';

                // Também fecha os conteúdos individuais HOTNEWS_X ao recolher a seção principal
                for (let i = 1; i <= 6; i++) {
                    const hotnewsContent = document.getElementById(`conteudoOculto-HOTNEWS_${i}`);
                    if (hotnewsContent) {
                        hotnewsContent.style.display = 'none';
                    }
                }

            } else {
                // Se está recolhido, expande
                hotnewsOculto.style.display = 'block';
                hotnewsContainer.style.height = 'auto'; // Ajusta a altura automaticamente
                if (textoBotaoExpandirHOTNEWS) textoBotaoExpandirHOTNEWS.textContent = '🔝 clique para recolher 🔝';
            }
        });
    }
});