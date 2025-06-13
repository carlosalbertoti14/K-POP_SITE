
    document.addEventListener('DOMContentLoaded', function() {
        const conteudoOculto = document.getElementById('conteudoOculto');
        const botaoExpandir = document.getElementById('botaoExpandir');
        const textoBotao = botaoExpandir.querySelector('p');

        botaoExpandir.addEventListener('click', function() {
            if (conteudoOculto.classList.contains('expandido')) {
                // Se está expandido, recolhe
                conteudoOculto.classList.remove('expandido');
                textoBotao.textContent = 'clique para expandir';
            } else {
                // Se está recolhido, expande
                conteudoOculto.classList.add('expandido');
                textoBotao.textContent = 'clique para recolher';
            }
        });
    });
