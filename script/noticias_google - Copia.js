// js/carregar_noticias.js
document.addEventListener('DOMContentLoaded', function() {
    const noticiasBox = document.getElementById('noticias_box');
    const noticiasOculto = document.getElementById('noticias_oculto');
    const botaoExpandirNOTICIAS = document.getElementById('botaoExpandirNOTICIAS');

    window.noticiasJaCarregadas = false;
    let tentativasCarregamento = 0;
    const maxTentativas = 3; // Tentar até 3 vezes
    const tempoEntreTentativas = 3000; // Esperar 3 segundos entre as tentativas

    function carregarNoticiasKpop() {
        if (window.noticiasJaCarregadas) {
            console.log("Notícias de K-pop já carregadas.");
            return;
        }

        // Você pode tentar alternar entre proxies se tiver mais de um
        const proxyUrls = ['https://corsproxy.io/?', 'https://api.allorigins.win/raw?url='];
        const currentProxy = proxyUrls[tentativasCarregamento % proxyUrls.length]; // Alterna entre os proxies a cada tentativa

        const targetUrl = 'https://news.google.com/rss/search?q=k-pop&hl=pt-BR&gl=BR&ceid=BR:pt-BR';
        const rssUrl = currentProxy + encodeURIComponent(targetUrl); // Usando o proxy atual da lista

        if (noticiasBox) {
            if (tentativasCarregamento === 0) {
                 noticiasBox.innerHTML = '<p>Carregando notícias de K-pop...</p>';
            } else {
                 noticiasBox.innerHTML = `<p>Ocorreu um erro ao carregar as notícias de K-pop. Tentando novamente... (${tentativasCarregamento}/${maxTentativas})</p>`;
            }
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
                    if (botaoExpandirNOTICIAS) botaoExpandirNOTICIAS.style.display = 'none';
                    return;
                }

                noticiasBox.innerHTML = '';
                noticiasOculto.innerHTML = '';

                const firstItem = items[0];
                noticiasBox.innerHTML += `
                    <div class="noticia-item principal">
                        <h3><a href="${firstItem.querySelector('link').textContent}" target="_blank">${firstItem.querySelector('title').textContent}</a></h3>
                        <p>${firstItem.querySelector('description') ? firstItem.querySelector('description').textContent.split('<a')[0] : ''}</p>
                        <span class="noticia-data">${new Date(firstItem.querySelector('pubDate').textContent).toLocaleDateString('pt-BR')}</span>
                    </div>
                `;

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
                window.noticiasJaCarregadas = true;
                tentativasCarregamento = 0; // Reseta as tentativas em caso de sucesso
            })
            .catch(error => {
                console.error('Erro ao buscar notícias de K-pop:', error);
                tentativasCarregamento++;
                if (tentativasCarregamento < maxTentativas) {
                    console.log(`Tentando novamente em ${tempoEntreTentativas / 1000} segundos... Tentativa ${tentativasCarregamento}/${maxTentativas}`);
                    setTimeout(carregarNoticiasKpop, tempoEntreTentativas);
                } else {
                    if (noticiasBox) {
                        noticiasBox.innerHTML = '<p>Não foi possível carregar as notícias de K-pop após várias tentativas. Por favor, tente recarregar a página ou volte mais tarde.</p>';
                    }
                    if (noticiasOculto) noticiasOculto.innerHTML = '';
                    if (botaoExpandirNOTICIAS) botaoExpandirNOTICIAS.style.display = 'none';
                }
            });
    }

    carregarNoticiasKpop();
});