document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade do conteúdo e aplicar regras adicionais
    function toggleContent(buttonId) {
        // Extrai o número do ID do botão (ex: de "saibamais_1" pega "1")
        const number = buttonId.split('_')[1];
        
        // Constrói o ID do conteúdo oculto correspondente
        const contentId = `conteudoOculto-HOTNEWS_${number}`;
        
        // Pega o elemento do conteúdo oculto pelo ID
        const contentElement = document.getElementById(contentId);

        // Verifica se o elemento existe para evitar erros no console
        if (contentElement) {
            // Lógica para alternar a visibilidade
            if (contentElement.style.display === 'none' || contentElement.style.display === '') {
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none'; // Esta linha faz o conteúdo fechar
            }

            // Lógica específica para o botão 'saibamais_1'
            if (buttonId === 'saibamais_1') {
                const botaoMaisDiv = document.getElementById('maisHOTNEWS'); // Elemento com .botao_mais
                const hotnewsContainer = document.getElementById('HOTNEWS'); // Container #HOTNEWS

                if (botaoMaisDiv) {
                    botaoMaisDiv.style.marginBottom = '0px'; // Altera margin-bottom para 0px
                }
                if (hotnewsContainer) {
                    hotnewsContainer.style.height = 'auto'; // Altera height de #HOTNEWS para auto
                }
            } else {
                // Para os outros botões (saibamais_2, saibamais_3), garanta que #HOTNEWS tenha height: auto
                const hotnewsContainer = document.getElementById('HOTNEWS');
                if (hotnewsContainer) {
                    hotnewsContainer.style.height = 'auto';
                }
            }
        }
    }

    // Pega todos os botões que têm IDs no formato 'saibamais_X'
    const saibaMaisButtons = document.querySelectorAll('[id^="saibamais_"]');

    // Adiciona um ouvinte de evento 'click' para cada botão encontrado
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Chama a função toggleContent passando o ID do botão que foi clicado
            toggleContent(this.id);
        });
    });
});