// js/expandir_artigo.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Script para a seção FAQ ---
    const conteudoOcultoFAQ = document.getElementById('FAQ');
    const botaoExpandirFAQ = document.getElementById('botaoExpandirFAQ');
    const textoBotaoFAQ = botaoExpandirFAQ ? botaoExpandirFAQ.querySelector('p') : null;

    if (botaoExpandirFAQ && conteudoOcultoFAQ) {
        botaoExpandirFAQ.addEventListener('click', function() {
            if (conteudoOcultoFAQ.classList.contains('expandido')) {
                conteudoOcultoFAQ.classList.remove('expandido');
                if (textoBotaoFAQ) textoBotaoFAQ.textContent = 'clique para expandir';
            } else {
                conteudoOcultoFAQ.classList.add('expandido');
                if (textoBotaoFAQ) textoBotaoFAQ.textContent = '🔝 clique para recolher 🔝';
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

    // NOVO: Botão "Mais Notícias"
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
            // É importante que 'carregarNoticiasKpop' seja global ou acessível aqui
            if (typeof carregarNoticiasKpop === 'function' && !window.noticiasJaCarregadas) {
                carregarNoticiasKpop();
            }
        });
    }

    // NOVO: Lógica para o botão "Mais Notícias"
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

            // Opcional: Você pode adicionar uma lógica aqui para verificar se
            // todas as notícias já foram mostradas e, se sim, esconder o botão "Mais Notícias".
            // Para isso, você precisaria saber a altura total do conteúdo de noticiasOculto.
            // Ex: if (noticiasOculto.scrollHeight <= currentMaxHeight) { botaoMaisNOTICIAS.style.display = 'none'; }
        });
    }
});