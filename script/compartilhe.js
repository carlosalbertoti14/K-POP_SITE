document.addEventListener('DOMContentLoaded', function() {
    const shareFacebookButton = document.getElementById('shareFacebook');
    const shareWhatsappButton = document.getElementById('shareWhatsapp');
    const copyLinkButton = document.getElementById('copyLinkButton'); // Novo botão
    const siteUrl = "https://kpopbrasil.netlify.app/"; // URL do seu site
    const siteTitle = "K-Pop Brasil"; // Título para o compartilhamento

    // Função para compartilhar no Facebook
    if (shareFacebookButton) {
        shareFacebookButton.addEventListener('click', function(event) {
            event.preventDefault();
            const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
            window.open(facebookShareUrl, '_blank', 'width=600,height=400');
        });
    }

    // Função para compartilhar no WhatsApp
    if (shareWhatsappButton) {
        shareWhatsappButton.addEventListener('click', function(event) {
            event.preventDefault();
            const message = `Confira o K-Pop Brasil! Notícias e tudo sobre seus grupos favoritos: ${siteUrl}`;
            const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
            window.open(whatsappShareUrl, '_blank');
        });
    }

    // Função para copiar o link
    if (copyLinkButton) {
        copyLinkButton.addEventListener('click', function() {
            // Usa o Clipboard API para copiar o texto
            navigator.clipboard.writeText(siteUrl)
                .then(() => {
                    // Feedback visual para o usuário
                    copyLinkButton.textContent = 'LINK COPIADO!';
                    copyLinkButton.style.backgroundColor = '#4CAF50'; // Verde de sucesso
                    setTimeout(() => {
                        copyLinkButton.textContent = 'COPIAR LINK';
                        copyLinkButton.style.backgroundColor = '#4681b6'; // Volta à cor original
                    }, 2000); // Volta ao normal após 2 segundos
                })
                .catch(err => {
                    console.error('Falha ao copiar o link: ', err);
                    alert('Erro ao copiar o link. Por favor, copie manualmente: ' + siteUrl);
                });
        });
    }
});