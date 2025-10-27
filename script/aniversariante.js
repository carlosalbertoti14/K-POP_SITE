document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // SEÇÃO 1: LÓGICA DE ANIVERSÁRIOS (CORRIGIDA)
    // ==================================================
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

    // Elementos do DOM
    const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");
    const proximoNiverDiv = document.getElementById("proximo_niver");

    /**
     * Extrai a data e o nome de uma imagem de aniversariante.
     */
    function extrairDadosAniversario(img) {
        const alt = img.alt.trim();
        const match = alt.match(/(\d{1,2}\/\d{1,2})$/);
        if (match) {
            const dataAniversario = match[0];
            const nomeAniversariante = alt.substring(0, alt.length - dataAniversario.length).trim();
            const [dia, mes] = dataAniversario.split("/").map(Number);
            return {
                data: dataAniversario,
                nome: nomeAniversariante,
                dia: dia,
                mes: mes,
                elemento: img
            };
        }
        return null;
    }

    // Coletar todos os aniversariantes com dados válidos
    const todosAniversariantes = Array.from(imagens)
        .map(extrairDadosAniversario)
        .filter(item => item !== null);

    // Lógica para aniversariante do dia - AGORA DETECTA MÚLTIPLOS
    const aniversariantesDoDia = todosAniversariantes.filter(niver => niver.data === diamesHoje);

    console.log('Aniversariantes do dia:', aniversariantesDoDia); // Para debug

    if (aniversariantesDoDia.length > 0) {
        encontrouAniversarianteDoDia = true;
        
        if (secNiver && divNiver) {
            // Configurar mensagem para múltiplos aniversariantes
            if (mensagemAniversarioDiv) {
                if (aniversariantesDoDia.length === 1) {
                    mensagemAniversarioDiv.querySelector('h4').textContent = `🎉 Feliz aniversário, ${aniversariantesDoDia[0].nome}! Hoje é o seu dia mais FELIZ!!! 🎉`;
                } else {
                    const nomes = aniversariantesDoDia.map(a => a.nome).join(', ');
                    mensagemAniversarioDiv.querySelector('h4').textContent = `🎉 Feliz aniversário, ${nomes}! Hoje é o dia de vocês!!! 🎉`;
                }
                mensagemAniversarioDiv.style.display = "block";
            }

            secNiver.style.display = "block";
            divNiver.style.maxHeight = '0px';
            divNiver.classList.add('expandido');

            // CORREÇÃO: Mostrar TODOS os aniversariantes do DIA
            imagens.forEach(img => {
                const dadosImg = extrairDadosAniversario(img);
                if (dadosImg && dadosImg.data === diamesHoje) {
                    img.style.display = "inline-block";
                    console.log('Mostrando:', dadosImg.nome); // Para debug
                } else {
                    img.style.display = "none";
                }
            });

            // COLOCAR TODOS OS ANIVERSARIANTES DO DIA NA proximoNiverDiv
            if (proximoNiverDiv) {
                proximoNiverDiv.innerHTML = '';
                
                if (aniversariantesDoDia.length === 1) {
                    proximoNiverDiv.innerHTML = `<p class="niver-do-dia">Hoje é dia de ${aniversariantesDoDia[0].nome}!</p>`;
                } else {
                    const nomesLista = aniversariantesDoDia.map(a => a.nome).join(', ');
                    proximoNiverDiv.innerHTML = `<p class="niver-do-dia">Hoje é dia de: ${nomesLista}!</p>`;
                }

                // CORREÇÃO: Adicionar TODAS as imagens dos aniversariantes do dia
                aniversariantesDoDia.forEach(niver => {
                    const linkElement = niver.elemento.closest('a');
                    if (linkElement) {
                        const cloneLink = linkElement.cloneNode(true);
                        cloneLink.querySelector('img').removeAttribute('id');
                        proximoNiverDiv.appendChild(cloneLink);
                    } else {
                        // Se não tiver link, adiciona apenas a imagem
                        const imgClone = niver.elemento.cloneNode(true);
                        imgClone.removeAttribute('id');
                        proximoNiverDiv.appendChild(imgClone);
                    }
                });
                
                proximoNiverDiv.style.display = 'flex';
            }
        }
    }

    // Lógica para Próximo Aniversariante (SÓ SE NÃO HOUVER ANIVERSARIANTES DO DIA)
    if (!encontrouAniversarianteDoDia) {
        // Preparar datas para comparação
        const todosComDatasFuturas = todosAniversariantes.map(niver => {
            const dataNiver = new Date(hoje.getFullYear(), niver.mes - 1, niver.dia);
            if (dataNiver < hoje) {
                dataNiver.setFullYear(hoje.getFullYear() + 1);
            }
            return {
                ...niver,
                dataNiverObjeto: dataNiver
            };
        });

        let proximosAniversariantes = todosComDatasFuturas
             .filter(niver => niver.dataNiverObjeto >= hoje)
             .sort((a, b) => a.dataNiverObjeto - b.dataNiverObjeto);

        // CORREÇÃO: Agrupar aniversariantes pela mesma data
        if (proximosAniversariantes.length > 0) {
            const primeiraData = proximosAniversariantes[0].dataNiverObjeto.getTime();
            const aniversariantesMesmaData = proximosAniversariantes.filter(niver => 
                niver.dataNiverObjeto.getTime() === primeiraData
            );

            console.log('Próximos aniversariantes na mesma data:', aniversariantesMesmaData); // Debug

            if (proximoNiverDiv) {
                proximoNiverDiv.innerHTML = '';

                if (aniversariantesMesmaData.length === 1) {
                    proximoNiverDiv.innerHTML = `
                        <p class="proximo-niver-texto">O Próximo Aniversário é de: ${aniversariantesMesmaData[0].nome}, no dia ${aniversariantesMesmaData[0].dia}/${aniversariantesMesmaData[0].mes}</p>
                    `;
                    
                    const linkElement = aniversariantesMesmaData[0].elemento.closest('a');
                    if (linkElement) {
                        const cloneLink = linkElement.cloneNode(true);
                        cloneLink.querySelector('img').removeAttribute('id');
                        proximoNiverDiv.appendChild(cloneLink);
                    }
                } else {
                    // CORREÇÃO: Mostrar MÚLTIPLOS aniversariantes na mesma data
                    const nomesLista = aniversariantesMesmaData.map(a => a.nome).join(', ');
                    proximoNiverDiv.innerHTML = `
                        <p class="proximo-niver-texto">Os Próximos Aniversários são de: ${nomesLista}, no dia ${aniversariantesMesmaData[0].dia}/${aniversariantesMesmaData[0].mes}</p>
                    `;
                    
                    // Adicionar TODAS as imagens dos aniversariantes da mesma data
                    aniversariantesMesmaData.forEach(niver => {
                        const linkElement = niver.elemento.closest('a');
                        if (linkElement) {
                            const cloneLink = linkElement.cloneNode(true);
                            cloneLink.querySelector('img').removeAttribute('id');
                            proximoNiverDiv.appendChild(cloneLink);
                        } else {
                            const imgClone = niver.elemento.cloneNode(true);
                            imgClone.removeAttribute('id');
                            proximoNiverDiv.appendChild(imgClone);
                        }
                    });
                }
                
                proximoNiverDiv.style.display = 'flex';
                secNiver.style.display = "block";
                encontrouAniversariante = true;
            }
        }

        // Mostrar todos os aniversariantes do mês na DIVniver (se não for dia de aniversário)
        imagens.forEach(img => {
            const niver = extrairDadosAniversario(img);
            if (niver && niver.mes === mesAtual) {
                img.style.display = "inline-block";
                encontrouAniversariante = true;
            } else {
                img.style.display = "none";
            }
        });
    }

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    } else {
        secNiver.style.display = "none";
    }

    // ==================================================
    // SEÇÃO 2: LÓGICA DO BOTÃO EXPANDIR/RECOLHER
    // ==================================================
    const botaoExpandir = document.getElementById('botaoExpandirDIVniver');

    if (botaoExpandir && divNiver) {
        botaoExpandir.addEventListener('click', function() {
            if (botaoExpandir.textContent === '▲ VER MENOS') {
                // Recolher - botão mostra "VER MAIS"
                divNiver.style.maxHeight = '0px';
                divNiver.style.margin = '0';
                botaoExpandir.textContent = '▼ VER MAIS';
                
                // Mostrar o próximo aniversário ao recolher
                if (proximoNiverDiv && proximoNiverDiv.innerHTML.trim() !== "") {
                    proximoNiverDiv.style.display = 'flex';
                }
                
                // Rolagem suave para o topo da seção
                setTimeout(() => {
                    secNiver.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
                
            } else {
                // Expandir - botão mostra "VER MENOS"
                divNiver.style.maxHeight = '5000px';
                divNiver.style.margin = '';
                botaoExpandir.textContent = '▲ VER MENOS';
                
                // Esconder o próximo aniversário ao expandir
                if (proximoNiverDiv) {
                    proximoNiverDiv.style.display = 'none';
                }
            }
        });
    }
});