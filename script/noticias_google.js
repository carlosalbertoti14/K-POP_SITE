// js/carregar_noticias.js
document.addEventListener('DOMContentLoaded', function() {
    const noticiasBox = document.getElementById('noticias_box');
    const noticiasOculto = document.getElementById('noticias_oculto');
    const botaoExpandirNOTICIAS = document.getElementById('botaoExpandirNOTICIAS');

    // Variável global para controlar se as notícias já foram carregadas
    // Isso evita que o script tente carregar novamente após o primeiro carregamento
    window.noticiasJaCarregadas = false;

    // Função para buscar e exibir as notícias de K-pop
    function carregarNoticiasKpop() {
        // Se as notícias já foram carregadas, saia da função
        if (window.noticiasJaCarregadas) {
            console.log("Notícias de K-pop já carregadas.");
            return;
        }

        // --- SOLUÇÃO CORS: Usando um proxy público ---
        // Você pode testar 'https://corsproxy.io/?' ou 'https://api.allorigins.win/raw?url='
        const proxyUrl = 'https://corsproxy.io/?';
        const targetUrl = 'https://news.google.com/rss/search?q=k-pop&hl=pt-BR&gl=BR&ceid=BR:pt-BR';
        const rssUrl = proxyUrl + encodeURIComponent(targetUrl);
        // ---------------------------------------------

        // Mensagem de carregamento inicial
        if (noticiasBox) {
            noticiasBox.innerHTML = '<p>Carregando notícias de K-pop...</p>';
        }


        fetch(rssUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                const items = data.querySelectorAll("item");
                if (!noticiasBox || !noticiasOculto) {
                    console.error("Elementos HTML para notícias não encontrados.");
                    return;
                }

                if (items.length === 0) {
                    noticiasBox.innerHTML = '<p>Nenhuma notícia de K-pop encontrada no momento.</p>';
                    noticiasOculto.innerHTML = '';
                    if (botaoExpandirNOTICIAS) botaoExpandirNOTICIAS.style.display = 'none'; // Esconde o botão
                    return;
                }

                // Limpa os contêineres antes de adicionar novas notícias
                noticiasBox.innerHTML = '';
                noticiasOculto.innerHTML = '';

                // Adiciona a primeira notícia na caixa principal
                const firstItem = items[0];
                noticiasBox.innerHTML += `
                    <div class="noticia-item principal">
                        <h3><a href="${firstItem.querySelector('link').textContent}" target="_blank">${firstItem.querySelector('title').textContent}</a></h3>
                        <p>${firstItem.querySelector('description') ? firstItem.querySelector('description').textContent.split('<a')[0] : ''}</p>
                        <span class="noticia-data">${new Date(firstItem.querySelector('pubDate').textContent).toLocaleDateString('pt-BR')}</span>
                    </div>
                `;

                // Adiciona as demais notícias na caixa oculta
                for (let i = 1; i < items.length; i++) {
                    const item = items[i];
                    noticiasOculto.innerHTML += `
                        <div class="noticia-item">
                            <h3><a href="${item.querySelector('link').textContent}" target="_blank">${item.querySelector('title').textContent}</a></h3>
                            <p>${item.querySelector('description') ? item.querySelector('description').textContent.split('<a')[0] : ''}</p>
                            <span class="noticia-data">${new Date(item.querySelector('pubDate').textContent).toLocaleDateString('pt-BR')}</span>
                        </div>
                    `;
                }
                window.noticiasJaCarregadas = true; // Marca que as notícias foram carregadas com sucesso
            })
            .catch(error => {
                console.error('Erro ao buscar notícias de K-pop:', error);
                if (noticiasBox) {
                    noticiasBox.innerHTML = '<p>Ocorreu um erro ao carregar as notícias de K-pop. Tente novamente mais tarde.</p>';
                }
                if (noticiasOculto) noticiasOculto.innerHTML = '';
                if (botaoExpandirNOTICIAS) botaoExpandirNOTICIAS.style.display = 'none'; // Esconde o botão em caso de erro
            });
    }

    // Chama a função para carregar as notícias assim que o DOM estiver pronto
    // Isso garante que a primeira notícia seja exibida sem precisar clicar em nada
    carregarNoticiasKpop();
});