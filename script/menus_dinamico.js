// Menu Dinâmico
document.addEventListener('DOMContentLoaded', function() {
    const menuDinamico = document.getElementById('menu-dinamico');
    const iconeMenu = document.getElementById('icone-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const linksMenu = menuLateral.querySelectorAll('a');
    
    // Mostrar menu dinâmico após rolar 700px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            menuDinamico.classList.add('visivel');
        } else {
            menuDinamico.classList.remove('visivel');
            menuLateral.classList.remove('ativo');
        }
    });
    
    // Abrir/fechar menu lateral
    iconeMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        menuLateral.classList.toggle('ativo');
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function() {
        menuLateral.classList.remove('ativo');
    });
    
    // Prevenir fechamento ao clicar no menu
    menuLateral.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Navegação e expansão automática
    linksMenu.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            const targetSection = this.getAttribute('href');
            
            // Fechar menu após clicar
            menuLateral.classList.remove('ativo');
            
            // Se tem data-target, expandir a seção
            if (targetId) {
                e.preventDefault();
                
                // Navegar para a seção
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Expandir a seção oculta
                setTimeout(() => {
                    const elementoOculto = document.getElementById(targetId);
                    if (elementoOculto) {
                        // Recolher todas as outras seções
                        document.querySelectorAll('.conteudoOculto').forEach(sec => {
                            sec.classList.remove('expandido');
                            sec.style.maxHeight = '0';
                        });
                        
                        // Expandir a seção clicada
                        elementoOculto.classList.add('expandido');
                        elementoOculto.style.maxHeight = elementoOculto.scrollHeight + 'px';
                    }
                }, 500); // Delay para garantir que a rolagem terminou
            }
        });
    });
});