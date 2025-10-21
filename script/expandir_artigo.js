/* script/expandir_artigo.js */

document.addEventListener('DOMContentLoaded', function() {
  // Função genérica para lidar com a expansão/recolhimento gradual e rolagem
  function setupExpandCollapse(contentId, buttonExpandId, buttonMoreId, initialHeight = 5000) {
    const conteudoOculto = document.getElementById(contentId);
    const botaoExpandir = document.getElementById(buttonExpandId);
    const textoBotao = botaoExpandir ? botaoExpandir.querySelector('p') : null;
    const botaoMais = document.getElementById(buttonMoreId);
   
    // Determina o elemento para onde a tela deve rolar ao recolher.
    // Para DIVniver, rolamos para a seção pai para incluir o título e botão.
    const elementToScrollTo = (contentId === 'DIVniver') ? 
      conteudoOculto.closest('section') || conteudoOculto : 
      conteudoOculto.closest('article') || conteudoOculto.closest('div[id]') || conteudoOculto;

    if (conteudoOculto && botaoExpandir) {
      // Inicialmente, oculta o botão "Mais"
      if (botaoMais) {
        botaoMais.style.display = 'none';
      }

      // Lógica para o botão principal "clique para expandir/recolher"
      botaoExpandir.addEventListener('click', function() {
        if (conteudoOculto.classList.contains('expandido')) {
          // Se já está expandido, recolhe tudo
          conteudoOculto.classList.remove('expandido');
          
          // Atualiza o texto do botão
          if (textoBotao) {
            textoBotao.textContent = (contentId === 'DIVniver') ? 'CONFERIR TODOS!' : 'clique para expandir';
          }
          
          if (botaoMais) botaoMais.style.display = 'none'; // Esconde o botão "Mais" ao recolher

          // Para todos os elementos, usa a lógica de max-height para recolher
          conteudoOculto.style.maxHeight = '0px';

          // Rolagem suave ao recolher
          if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }

        } else {
          // Se está recolhido, expande
          conteudoOculto.classList.add('expandido');
          
          // Atualiza o texto do botão
          if (textoBotao) {
            textoBotao.textContent = (contentId === 'DIVniver') ? '🔝 RECOLHER 🔝' : '🔝 clique para recolher 🔝';
          }

          if (botaoMais) botaoMais.style.display = 'block'; // Mostra o botão "Mais"

          // Para todos os elementos, usa a lógica de max-height para expandir
          conteudoOculto.style.maxHeight = initialHeight + 'px';
          
          // Lógica específica para a seção de notícias (carregar notícias)
          if (contentId === 'noticias_oculto' && typeof carregarNoticiasKpop === 'function' && !window.noticiasJaCarregadas) {
            carregarNoticiasKpop();
          }
        }
      });
    }

    // Lógica para o botão "Mais" (se existir) - apenas para elementos que não são DIVniver
    if (botaoMais && conteudoOculto && contentId !== 'DIVniver') {
      botaoMais.addEventListener('click', function() {
        // Garante que a seção esteja no estado 'expandido' para a transição
        if (!conteudoOculto.classList.contains('expandido')) {
          conteudoOculto.classList.add('expandido');
          conteudoOculto.style.maxHeight = initialHeight + 'px';
        }

        // Incrementa a altura em 1000px (apenas para elementos com max-height)
        const currentHeight = parseInt(conteudoOculto.style.maxHeight) || initialHeight;
        conteudoOculto.style.maxHeight = (currentHeight + 1000) + 'px';
      });
    }
  }

  // Aplica a função genérica para cada seção (Aumentei o initialHeight para garantir a expansão completa)
  setupExpandCollapse('noticias_oculto', 'botaoExpandirNOTICIAS', 'maisNOTICIAS', 2000);
  setupExpandCollapse('HOTNEWS_oculto', 'botaoExpandirHOTNEWS', 'maisHOTNEWS', 2000);
  setupExpandCollapse('FAQ', 'botaoExpandirFAQ', 'maisPerguntas', 2000);
  setupExpandCollapse('conteudoGlossario', 'botaoExpandirGlossario', 'maisTERMOS', 2000);
  setupExpandCollapse('eventos_oculto','botaoExpandirEVENTOS','maisEVENTOS',2000);
  setupExpandCollapse('hanking_oculto','botaoExpandirHANKING','maisEVENTOS',2000);
  // DIVniver agora usa a mesma lógica de max-height/transição
  setupExpandCollapse('DIVniver','botaoExpandirDIVniver','maisEVENTOS',5000); 

  // --- Script para os itens individuais do glossário (o toggle-icon) ---
  const glossaryItems = document.querySelectorAll('.glossary-item');

  glossaryItems.forEach(item => {
    const header = item.querySelector('.glossary-header');
    if (header) {
      header.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = header.querySelector('.toggle-icon');
        if (icon) {
          if (item.classList.contains('active')) {
            icon.textContent = '-';
          } else {
            icon.textContent = '+';
          }
        }
      });
    }
  });
});