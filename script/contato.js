document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const emailInput = document.getElementById('emailForm');
    const formMessage = document.getElementById('formMessage');

    // 2. Tentar buscar o e-mail padrão do usuário para preenchimento automático
    // Isso geralmente funciona bem em dispositivos móveis e em navegadores que oferecem preenchimento automático.
    // Para desktops, o navegador pode sugerir o e-mail com base no histórico ou gerente de senhas.
    // Não há um jeito 100% garantido de "buscar" o e-mail padrão do sistema por segurança e privacidade.
    if (emailInput) {
        emailInput.setAttribute('autocomplete', 'email'); // Ajuda os navegadores a sugerir o e-mail
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário (redirecionamento)

            // Limpa mensagens anteriores
            formMessage.textContent = '';
            formMessage.style.color = ''; 

            // 3. Identificar se é um e-mail válido (validação básica no JavaScript)
            if (emailInput && !isValidEmail(emailInput.value)) {
                formMessage.textContent = "Por favor, digite um endereço de e-mail válido.";
                formMessage.style.color = "red";
                emailInput.focus(); // Coloca o foco no campo de e-mail
                return; // Impede o envio do formulário
            }

            const formData = new FormData(form);
            const encodedData = new URLSearchParams(formData).toString();

            fetch("/", { // Envia para a raiz do seu site no Netlify
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodedData
            })
            .then(response => {
                if (response.ok) {
                    formMessage.textContent = "Mensagem enviada com sucesso! Agradecemos seu feedback.";
                    formMessage.style.color = "green";
                    form.reset(); // Limpa os campos do formulário
                } else {
                    formMessage.textContent = "Erro ao enviar a mensagem. Tente novamente mais tarde.";
                    formMessage.style.color = "red";
                    console.error('Erro na resposta do Netlify:', response.status, response.statusText);
                }
            })
            .catch(error => {
                formMessage.textContent = "Ocorreu um erro na conexão. Por favor, verifique sua internet e tente novamente.";
                formMessage.style.color = "red";
                console.error('Erro de rede ou fetch:', error);
            });
        });
    } else {
        console.error('Formulário com ID "feedbackForm" não encontrado.');
    }

    // Função de validação de e-mail mais robusta
    function isValidEmail(email) {
        // Regex para validação de e-mail. É razoavelmente abrangente.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});