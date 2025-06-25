document.addEventListener('DOMContentLoaded', function() {
    const botaoExpandir = document.getElementById('botaoExpandirHOTNEWS');
    const hotnewsOculto = document.getElementById('HOTNEWS_oculto');
    const articleHotnews = document.getElementById('HOTNEWS');
    const botaoMaisNoticias = document.getElementById('maisHOTNEWS');

    // Altura inicial do article quando recolhido (para mobile/padrão)
    const alturaInicialArticle = '354px'; 
    // Altura da div HOTNEWS_oculto quando visível (600px, sem rolagem)
    const alturaHotnewsOculto = '600px'; 

    // Incremental de altura para o botão 'maisHOTNEWS'
    const incrementoAltura = 1000;

    // Variável para armazenar a altura atual do article quando expandido pelo 'maisHOTNEWS'
    let alturaAdicionalMaisNoticias = 0;

    // Oculta o botão 'maisHOTNEWS' inicialmente
    botaoMaisNoticias.style.display = 'none';

    botaoExpandir.addEventListener('click', function() {
        if (hotnewsOculto.style.display === 'block') {
            // Se HOTNEWS_oculto está visível, vamos recolher
            hotnewsOculto.style.display = 'none';
            hotnewsOculto.style.height = '0'; // Esconde a div HOTNEWS_oculto
            hotnewsOculto.style.overflowY = 'hidden'; 
            
            // Define a altura do article para a altura inicial (recolhida)
            articleHotnews.style.height = alturaInicialArticle; 
            botaoExpandir.querySelector('p').textContent = 'clique para expandir';
            
            // Oculta o botão 'mais notícias' e reseta a altura adicional
            botaoMaisNoticias.style.display = 'none'; 
            alturaAdicionalMaisNoticias = 0; // Reseta a altura adicional ao recolher
        } else {
            // Se HOTNEWS_oculto está oculto, vamos expandir
            hotnewsOculto.style.display = 'block';
            hotnewsOculto.style.height = alturaHotnewsOculto; // Altura fixa de 600px
            hotnewsOculto.style.overflowY = 'hidden'; 
            
            // Define a altura do article como 'auto' para que ele se ajuste
            // ao conteúdo visível (HOTNEWS_box + HOTNEWS_oculto)
            articleHotnews.style.height = 'auto'; 
            botaoExpandir.querySelector('p').textContent = 'clique para recolher';
            
            // Mostra o botão 'mais notícias'
            botaoMaisNoticias.style.display = 'block'; 
        }
    });

    botaoMaisNoticias.addEventListener('click', function() {
        // Incrementa a altura adicional que será somada à altura automática do article
        alturaAdicionalMaisNoticias += incrementoAltura;
        
        // Define a altura do article somando a altura automática atual
        // com o valor adicional acumulado pelo botão 'mais notícias'
        articleHotnews.style.height = `calc(auto + ${alturaAdicionalMaisNoticias}px)`;

        // Nota: 'calc(auto + Xpx)' não funciona diretamente em CSS ou JS para 'height'.
        // Precisamos pegar a altura calculada pelo navegador e adicionar o incremento.
        // A melhor forma é usar scrollHeight ou offsetHeight.
        const currentCalculatedHeight = articleHotnews.scrollHeight; // Ou offsetHeight
        articleHotnews.style.height = `${currentCalculatedHeight + incrementoAltura}px`;
    });
});