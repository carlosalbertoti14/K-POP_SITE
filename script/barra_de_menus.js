document.addEventListener('DOMContentLoaded', function() {
    const fixoMenu = document.getElementById('fixo');
    // Você pode querer que o menu fique fixo depois de rolar a altura do header
    // Ou pode fixar imediatamente no topo.

    // Exemplo para fixar quando o topo do elemento #fixo atingir o topo da viewport
    const menuOffsetTop = fixoMenu.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= menuOffsetTop) {
            fixoMenu.classList.add('fixed-menu'); // Adiciona a classe CSS
        } else {
            fixoMenu.classList.remove('fixed-menu'); // Remove a classe CSS
        }
    });

    // Se o seu header é um slideshow e tem altura variável,
    // ou se você quer que o menu fique fixo logo abaixo do slideshow.
    // Você pode ajustar a lógica aqui. Exemplo:
    // const headerHeight = document.querySelector('header').offsetHeight;
    // if (window.scrollY >= headerHeight) { ... }
    // Ou, para simplificar, apenas use o offsetTop do próprio menu fixo.
});