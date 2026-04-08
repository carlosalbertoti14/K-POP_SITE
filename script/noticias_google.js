document.addEventListener('DOMContentLoaded', function() {
    const noticiasBox = document.getElementById('noticias_box');
    const noticiasOculto = document.getElementById('noticias_oculto');
    const botaoExpandirNOTICIAS = document.getElementById('botaoExpandirNOTICIAS');

    const CACHE_KEY = 'cache_noticias_kpop';
    const CACHE_TIME = 30 * 60 * 1000; // 30 minutos em milissegundos

    let tentativasCarregamento = 0;
    const maxTentativas = 3;

    function carregarNoticiasKpop() {
        // 1. Verificar Cache Primeiro
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const parsedCache = JSON.parse(cachedData);
            if (Date.now() - parsedCache.timestamp < CACHE_TIME) {
                console.log("Carregando notícias do cache local...");
                renderizarNoticias(parsedCache.htmlBox, parsedCache.htmlOculto);
                return;
            }
        }

        const proxyUrls = [
            'https://corsproxy.io/?', 
            'https://api.allorigins.win/raw?url=',
            'https://api.codetabs.com/v1/proxy/?quest='
        ];
        
        const currentProxy = proxyUrls[tentativasCarregamento % proxyUrls.length];
        const targetUrl = 'https://news.google.com/rss/search?q=k-pop&hl=pt-BR&gl=BR&ceid=BR:pt-BR';
        const rssUrl = currentProxy + encodeURIComponent(targetUrl);

        if (noticiasBox && tentativasCarregamento === 0) {
            noticiasBox.innerHTML = '<p>Carregando notícias de K-pop...</p>';
        }

        fetch(rssUrl)
            .then(response => {
                if (!response.ok) throw new Error(`Status: ${response.status}`);
                return response.text();
            })
            .then(str => {
                const parser = new window.DOMParser();
                const xmlDoc = parser.parseFromString(str, "text/xml");
                
                // Verificar se o XML é válido
                const parseError = xmlDoc.getElementsByTagName("parsererror");
                if (parseError.length > 0) throw new Error("Erro ao processar XML do RSS.");

                const items = xmlDoc.querySelectorAll("item");
                if (items.length === 0) throw new Error("Nenhum item encontrado no RSS.");

                processarESalvarNoticias(items);
            })
            .catch(error => {
                console.error('Erro na tentativa:', tentativasCarregamento, error);
                tentativasCarregamento++;
                if (tentativasCarregamento < maxTentativas) {
                    setTimeout(carregarNoticiasKpop, 3000);
                } else {
                    noticiasBox.innerHTML = '<p>Erro ao carregar. Tente novamente mais tarde.</p>';
                }
            });
    }

    function processarESalvarNoticias(items) {
        let htmlBox = '';
        let htmlOculto = '';

        items.forEach((item, i) => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const pubDate = new Date(item.querySelector('pubDate').textContent).toLocaleDateString('pt-BR');
            const descRaw = item.querySelector('description') ? item.querySelector('description').textContent.split('<a')[0] : '';

            const template = `
                <div class="noticia-item ${i === 0 ? 'principal' : ''}">
                    <h3><a href="${link}" target="_blank">${title}</a></h3>
                    <p>${descRaw}</p>
                    <span class="noticia-data">${pubDate}</span>
                </div>
            `;

            if (i === 0) htmlBox = template;
            else htmlOculto += template;
        });

        // Salvar no Cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            htmlBox: htmlBox,
            htmlOculto: htmlOculto
        }));

        renderizarNoticias(htmlBox, htmlOculto);
    }

    function renderizarNoticias(boxContent, ocultoContent) {
        if (noticiasBox) noticiasBox.innerHTML = boxContent;
        if (noticiasOculto) noticiasOculto.innerHTML = ocultoContent;
        if (botaoExpandirNOTICIAS) botaoExpandirNOTICIAS.style.display = 'block';
    }

    carregarNoticiasKpop();
});