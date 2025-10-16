/* /script/saiba_mais_individual.js */

/* ... (seu código JavaScript existente antes deste bloco) ... */

document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade do conteúdo e aplicar regras adicionais
    function toggleContent(buttonId) {
        const number = buttonId.split('_')[1];
        const contentId = `conteudoOculto-HOTNEWS_${number}`;
        const contentElement = document.getElementById(contentId);

        const hotnewsSection = document.getElementById(`hotnews_destaque_${number}`);
        const hotnewsSectionHead = hotnewsSection ? hotnewsSection.querySelector('.HOTNEWS_section_head') : null;
        const hotnewsSectionBody = hotnewsSection ? hotnewsSection.querySelector('.HOTNEWS_section_body') : null;
        const hotnewsContentDiv = hotnewsSection ? hotnewsSection.querySelector('.HOTNEWS_content') : null;

        if (contentElement) {
            // Verifica se a div já tem a classe 'expandir'
            const isExpanded = contentElement.classList.contains('expandir');

            if (isExpanded) {
                // Se está expandido, vamos recolher
                contentElement.classList.remove('expandir');
                // Adicione um pequeno delay para que a animação de recolher termine antes de esconder o display
                // Isso evita que o conteúdo "salte" visualmente ao final da animação.
                setTimeout(() => {
                    contentElement.style.display = 'none';
                }, 700); // Deve ser igual ou maior que a duração da transição (0.7s)

                if (hotnewsSectionHead) {
                    hotnewsSectionHead.classList.remove('HOTNEWS_transparent_content');
                }
                if (hotnewsSectionBody) {
                    hotnewsSectionBody.classList.remove('HOTNEWS_transparent_content');
                }
                if (hotnewsContentDiv) {
                    hotnewsContentDiv.classList.remove('no-overlay');
                }
            } else {
                // Se não está expandido, vamos expandir
                contentElement.style.display = 'block'; // Torna visível para que a transição de max-height funcione
                // Usa requestAnimationFrame para garantir que o display: block seja aplicado antes da transição
                requestAnimationFrame(() => {
                    contentElement.classList.add('expandir');
                });

                if (hotnewsSectionHead) {
                    hotnewsSectionHead.classList.add('HOTNEWS_transparent_content');
                }
                if (hotnewsSectionBody) {
                    hotnewsSectionBody.classList.add('HOTNEWS_transparent_content');
                }
                if (hotnewsContentDiv) {
                    hotnewsContentDiv.classList.add('no-overlay');
                }
            }

            // Lógica para ajustar altura de #HOTNEWS (mantida do seu código original)
            const hotnewsContainer = document.getElementById('HOTNEWS');
            if (hotnewsContainer) {
                hotnewsContainer.style.height = 'auto';
            }

            // Lógica específica para 'saibamais_1' (mantida do seu código original)
            if (buttonId === 'saibamais_1') {
                const botaoMaisDiv = document.getElementById('maisHOTNEWS');
                if (botaoMaisDiv) {
                    botaoMaisDiv.style.marginBottom = '0px';
                }
            }
        }
    }

    const saibaMaisButtons = document.querySelectorAll('[id^="saibamais_"]');
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleContent(this.id);
        });
    });
});

/* ... (restante do seu código JavaScript depois deste bloco) ... */