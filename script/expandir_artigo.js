document.addEventListener('DOMContentLoaded', function() {
    // Script para a seção FAQ
    const conteudoOcultoFAQ = document.getElementById('FAQ'); // ID correto para o conteúdo do FAQ
    const botaoExpandirFAQ = document.getElementById('botaoExpandirFAQ'); // ID correto para o botão do FAQ
    const textoBotaoFAQ = botaoExpandirFAQ.querySelector('p');

    botaoExpandirFAQ.addEventListener('click', function() {
        if (conteudoOcultoFAQ.classList.contains('expandido')) {
            conteudoOcultoFAQ.classList.remove('expandido');
            textoBotaoFAQ.textContent = 'clique para expandir';
        } else {
            conteudoOcultoFAQ.classList.add('expandido');
            textoBotaoFAQ.textContent = 'clique para recolher';
        }
    });

    // Script para a seção do Glossário
    const conteudoOcultoGlossario = document.getElementById('conteudoGlossario'); // ID correto para o conteúdo do glossário
    const botaoExpandirGlossario = document.getElementById('botaoExpandirGlossario'); // ID correto para o botão do glossário
    const textoBotaoGlossario = botaoExpandirGlossario.querySelector('p');

    botaoExpandirGlossario.addEventListener('click', function() {
        if (conteudoOcultoGlossario.classList.contains('expandido')) {
            conteudoOcultoGlossario.classList.remove('expandido');
            textoBotaoGlossario.textContent = 'clique para expandir';
        } else {
            conteudoOcultoGlossario.classList.add('expandido');
            textoBotaoGlossario.textContent = 'clique para recolher';
        }
    });

    // Script para os itens individuais do glossário (o toggle-icon)
    const glossaryItems = document.querySelectorAll('.glossary-item');

    glossaryItems.forEach(item => {
        const header = item.querySelector('.glossary-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = header.querySelector('.toggle-icon');
            if (item.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});