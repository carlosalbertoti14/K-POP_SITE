document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

    const nivernome = [
        // TWICE
        { nome: "NAYEON", url: "url('midia/twice_PERFIL_BG_Nayeon.jpg')" }, // Mantenha os perfis existentes se eles forem usados para o background
        { nome: "JEONGYEON", url: "url('midia/twice_PERFIL_BG_Jeongyeon.jpg')" },
        { nome: "MOMO", url: "url('midia/twice_PERFIL_BG_Momo.jpg')" },
        { nome: "SANA", url: "url('midia/twice_PERFIL_BG_Sana.jpg')" },
        { nome: "JIHYO", url: "url('midia/twice_PERFIL_BG_Jihyo.jpg')" },
        { nome: "MINA", url: "url('midia/twice_PERFIL_BG_Mina.jpg')" },
        { nome: "DAHYUN", url: "url('midia/twice_PERFIL_BG_Dahyun.jpg')" }, // Não tem imagem de fundo específica na sua lista, mas mantido se houver uma genérica ou se for adicionada.
        { nome: "CHAEYOUNG", url: "url('midia/twice_PERFIL_BG_Chaeyoung.jpg')" },
        { nome: "TZUYU", url: "url('midia/twice_PERFIL_BG_Tzuyu.jpg')" },

        // aespa
        { nome: "GISELLE", url: "url('midia/aespa_PERFIL_BG_Giselle.jpg')" }, // Assumindo nomes de arquivo de background similares
        { nome: "KARINA", url: "url('midia/aespa_PERFIL_BG_Karina.jpg')" },
        { nome: "NINGNING", url: "url('midia/aespa_PERFIL_BG_Ningning.jpg')" },
        { nome: "WINTER", url: "url('midia/aespa_PERFIL_BG_Winter.jpg')" },

        // ATEEZ
        { nome: "HONGJOONG", url: "url('midia/ateez_PERFIL_BG_Hongjoong.jpg')" },
        { nome: "JONGHO", url: "url('midia/ateez_PERFIL_BG_Jongho.jpg')" },
        { nome: "MINGI", url: "url('midia/ateez_PERFIL_BG_Mingi.jpg')" },
        { nome: "SAN", url: "url('midia/ateez_PERFIL_BG_San.jpg')" },
        { nome: "SEONGHWA", url: "url('midia/ateez_PERFIL_BG_Seonghwa.jpg')" },
        { nome: "WOOYOUNG", url: "url('midia/ateez_PERFIL_BG_Wooyoung.jpg')" },
        { nome: "YEOSANG", url: "url('midia/ateez_PERFIL_BG_Yeosang.jpg')" },
        { nome: "YUNHO", url: "url('midia/ateez_PERFIL_BG_Yunho.jpg')" },

        // BABYMONSTER
        { nome: "AHYEON", url: "url('midia/babymonster_PERFIL_BG_Ahyeon.jpg')" },
        { nome: "ASA", url: "url('midia/babymonster_PERFIL_BG_Asa.jpg')" },
        { nome: "CHIQUITA", url: "url('midia/babymonster_PERFIL_BG_Chiquita.jpg')" },
        { nome: "LUKA", url: "url('midia/babymonster_PERFIL_BG_Luka.jpg')" },
        { nome: "PHARITA", url: "url('midia/babymonster_PERFIL_BG_Pharita.jpg')" },
        { nome: "RAMI", url: "url('midia/babymonster_PERFIL_BG_Rami.jpg')" },
        { nome: "RORA", url: "url('midia/babymonster_PERFIL_BG_Rora.jpg')" },

        // BLACKPINK
        { nome: "JENNIE", url: "url('midia/blackpink_PERFIL_BG_Jennie.jpg')" },
        { nome: "JISOO", url: "url('midia/blackpink_PERFIL_BG_Jisoo.jpg')" },
        { nome: "LISA", url: "url('midia/blackpink_PERFIL_BG_Lisa.jpg')" },
        { nome: "ROSE", url: "url('midia/blackpink_PERFIL_BG_Rose.jpg')" }
    ];

   const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");

    imagens.forEach(img => {
        const alt = img.alt.trim();
        // Regex para encontrar a data (dia/mes) no final da string
        const match = alt.match(/(\d{1,2}\/\d{1,2})$/);

        if (match) {
            const dataAniversario = match[0]; // Ex: "1/7" ou "14/7"
            // O nome é tudo que vem antes da data
            const nomeAniversariante = alt.substring(0, alt.length - dataAniversario.length).trim();

            if (dataAniversario === diamesHoje) {
                const aniversarianteDoDia = nivernome.find(item => item.nome.toLowerCase() === nomeAniversariante.toLowerCase());
                if (aniversarianteDoDia && secNiver && divNiver) {
                    // Se você quer mudar o background, descomente a linha abaixo
                    // secNiver.style.backgroundImage = aniversarianteDoDia.url;

                    if (mensagemAniversarioDiv) {
                        // Atualiza apenas o texto da h4 existente
                        mensagemAniversarioDiv.querySelector('h4').textContent = `Feliz aniversário, ${nomeAniversariante}! Hoje é o seu dia mais FELIZ!!!`;
                        mensagemAniversarioDiv.style.display = "block";
                    }
                    if (fogosVideo) {
                        fogosVideo.style.display = "block";
                    }
                    img.style.display = "block"; // Exibe apenas a imagem do aniversariante do dia
                    encontrouAniversarianteDoDia = true;
                }
            } else {
                // Por padrão, esconde as imagens que não são do aniversariante do dia
                // Elas serão exibidas na próxima iteração se forem do mês atual
                img.style.display = "none";
            }
        } else {
            // Se o alt não tiver uma data no formato esperado, esconda a imagem também
            img.style.display = "none";
        }
    });

    // Exibe os aniversariantes do mês se não houver um aniversariante do dia
    if (!encontrouAniversarianteDoDia) {
        imagens.forEach(img => {
            const alt = img.alt.trim();
            const match = alt.match(/(\d{1,2}\/\d{1,2})$/);

            if (match) {
                const dataAniversario = match[0];
                const mesAniversario = parseInt(dataAniversario.split("/")[1]);

                if (mesAniversario === mesAtual) {
                    img.style.display = "inline-block";
                    encontrouAniversariante = true;
                } else {
                    img.style.display = "none"; // Garante que as imagens de outros meses fiquem escondidas
                }
            } else {
                 img.style.display = "none";
            }
        });
    }

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    } else {
        // Se não houver aniversariantes no mês atual ou no dia, esconda a seção
        secNiver.style.display = "none";
    }
});
